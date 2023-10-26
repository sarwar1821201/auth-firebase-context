import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';


export const AuthContext= createContext(null);
  const auth=getAuth(app)

  const googleAuthProvider= new GoogleAuthProvider();

const AuthProviders = ({children}) => {
     
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
  
    //const user= {displayName: 'Sagor Nodi' }

    const createUser= (email, password) => {
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const signIn= (email,password) => {
        return signInWithEmailAndPassword (auth,email,password)
    }

    const logOut= () => {
        return signOut(auth)
    }
    
     const signInWithGoogle = () => {
         return signInWithPopup(auth, googleAuthProvider)
     }
   
    // observe auth state chnange

    useEffect( () =>{
  
     const unsubscribe=  onAuthStateChanged(auth,  currentUser => {
        console.log('auth state change',  currentUser )
        setUser(currentUser)
        setLoading(false)
    } );

    return () => {
        unsubscribe ();
    }

    },[] )

  const authInfo = {
     user, createUser, signIn, logOut, loading, signInWithGoogle
  }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;