import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '@/configs/firebaseConfig'; 

const Authentication = ({children}) => {
    const provider = new GoogleAuthProvider();
    
    const onSignInClick = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
         
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
     
          const user = result.user;
         
          console.log(user)
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
         
          const email = error.customData?.email;
          
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
          console.error(errorMessage);
        });
    }
   
    return (
      <div>
        <div onClick={onSignInClick}>{children}</div>
      </div>
    )
}

export default Authentication