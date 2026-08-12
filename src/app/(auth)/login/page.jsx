'use client'
import React from 'react';
import Link from 'next/link';
const login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.target.email.value, e.target.password.value);
    }
    return (
        <div className='m-auto flex flex-col items-center justify-center gap-4'>
            <form onSubmit={handleLogin}>


                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-3xl text-amber-900 font-bold">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email' />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' />
                </fieldset>
                <button className="btn bg-linear-to-r from-red-500 to-amber-900 text-white mt-4">Login</button>
            </form>
            <div className='flex item-center justify-center gap-2'>
                <h1>Don't have an account?</h1>
                <Link href="/register" className="bg-linear-to-r from-red-500 to-amber-900 bg-clip-text text-transparent">Register</Link>
            </div>
        </div>
    );
};

export default login;