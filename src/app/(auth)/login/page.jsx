import React from 'react';
import Link from 'next/link';
const login = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <div className='flex item-center justify-center gap-2'>
                <h1>Don't have an account?</h1>
                <Link href="/register" className="btn btn-neutral mt-4">Register</Link>
            </div>
        </div>
    );
};

export default login;