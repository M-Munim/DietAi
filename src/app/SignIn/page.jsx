"use client";

import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from "../../services/firebase";

const auth = getAuth(app);


const page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password).then((value) => alert("success")).catch((error) => alert(error.message));
    };

    return (
        <div className='w-3/4 mx-auto h-56 bg-yellow-200 flex items-center justify-center flex-col mt-20'>
            <h1>SignIn</h1>
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <label>Password</label>
            <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={signIn}>submit</button>
        </div>
    )
}

export default page
