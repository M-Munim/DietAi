"use client";

import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from '../../services/firebase';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // store the authenticated user
    const [user, setUser] = useState(null);

    // Listen for authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Update state when user logs in or out
        });

        return () => unsubscribe(); // Cleanup the listener when component unmounts
    }, []);

    console.log(user)

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((value) => alert("success"))
    };

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => alert("Signed in successfully"))
            .catch((error) => alert(error.message));
    }

    const handleLogout = () => {
        signOut(auth).then(() => alert("Logged out successfully"));
    };
    return (
        <div className='w-3/4 mx-auto h-56 bg-yellow-200 flex items-center justify-center flex-col mt-20 p-4'>
            {user ? (
                <div>
                    <p className="text-lg font-bold">{user.email} joined</p>
                    <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <>
                    <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="border p-1" />
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="border p-1" />
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={createUser}>
                        Submit
                    </button>
                    <br />
                    <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded" onClick={signInWithGoogle}>
                        Sign in with Google
                    </button>
                </>
            )}
        </div>
    )
}

export default page
