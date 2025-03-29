"use client"
import React, { useEffect, useState, useContext } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { onAuthStateChanged } from 'firebase/auth'
import { AuthContext } from '@/_context/AuthContext'
import { auth } from '@/configs/firebaseConfig'

const Provider = ({ children }) => {
  const [user, setUser] = useState() 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{user}}> 
      <NextThemesProvider   
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange>    
        {children} 
      </NextThemesProvider>
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}

export default Provider