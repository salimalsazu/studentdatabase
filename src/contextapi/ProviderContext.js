import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import { initailState, studentReducer } from '../state/ProductState.js/ProductReducer';
import { actionTypes } from '../state/ProductState.js/ActionType';


export const contextApi = createContext();
const auth = getAuth(app);

const ProviderContext = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const [state, dispatch] = useReducer(studentReducer, initailState);

    console.log(state);

    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START })
        fetch("https://studentdatabase.vercel.app/students")
            .then(res => res.json())
            .then(data => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data.data }))
            .catch(() => {
                dispatch({
                    type: actionTypes.FETCHING_ERROR
                })
            })

    }, [])




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
        logOut,
        state,
        dispatch
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