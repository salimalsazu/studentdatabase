import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { app } from '../firebase/firebase.config';


export const contextApi = createContext();
const auth = getAuth(app);

const ProviderContext = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    //signup 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //signin 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    //google login 
    const providerLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('exchange-token')
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])


    const value = {
        auth,
        user,
        setUser,
        loading,
        createUser,
        signIn,
        providerLogin,
        logOut
    }

    return (
        <contextApi.Provider value={value}>
            {children}
        </contextApi.Provider>
    );
};


export const useApi = () => {
    const context = useContext(contextApi);
    return context;
}


export default ProviderContext;