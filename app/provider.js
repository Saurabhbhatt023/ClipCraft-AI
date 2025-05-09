"use client";
import React, { useEffect, useState, useContext } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./_context/AuthContext";
import { auth } from "@/configs/firebaseConfig";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { api } from "@/convex/_generated/api";
import { SidebarProvider } from '@/components/ui/sidebar';
// Initialize the Convex client with the environment variable
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);
      setUser(user);

      if (user) {
        try {
          // Only pass the fields expected by the schema
          const createUser = await convex.mutation(api.users.createUser, {
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
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

export default Provider;