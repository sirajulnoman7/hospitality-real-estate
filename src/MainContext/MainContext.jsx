import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext=createContext(null)

const MainContext = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    // create user 
    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }
    // login user 
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }  
    // update profile 
    const updateProfileInfo=({displayName,photoURL})=>{
        setLoading(true)
      return updateProfile(auth.currentUser,{
        displayName:displayName,
        photoURL:photoURL

      })
    
    }

    // sign out 
    const logOut=()=>{
        setLoading(true)
       return signOut(auth)
    }
    // manage user with observer 
    useEffect(()=>{
     const unSubscribe=   onAuthStateChanged(auth,(currentUser)=>{
        setLoading(false)
           setUser(currentUser)
            // console.log(currentUser)
        })
        return ()=>unSubscribe()
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        loginUser,
        updateProfileInfo,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default MainContext;