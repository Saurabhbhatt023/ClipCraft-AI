"use client"
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import React from 'react'
import { NextThemesProvider } from 'next-themes';
import { AuthContext } from './_context/AuthContext';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/configs/firebaseConfig';

const ConvexClientProvider = ({children}) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);
      setUser(user);

      if (user) {
        try {
          // You'll need to create this mutation in your Convex backend
          const createUser = await convex.mutation('users:createUser', {
            name: user?.displayName,
            email: user?.email,
            pictureURL: user?.photoURL
          });
          console.log("User created in Convex:", createUser);
        } catch (error) {
          console.error("Error creating user in Convex:", error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <ConvexProvider client={convex}> 
      <AuthContext.Provider value={{ user }}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </AuthContext.Provider>
    </ConvexProvider>
  );
}

export default ConvexClientProvider