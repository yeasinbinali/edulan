import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unsubscribed();
    }, [])

    const authInfo = {user, createUser, signInUser, logOut};

    return (
        <AuthContext.Provider value = {authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;