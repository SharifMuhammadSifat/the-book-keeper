import React from 'react';
import Link from 'next/link';
const Register = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Register</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <label className="label">Photo URL</label>
                <input type="url" className="input" placeholder="Photo URL" />

                <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <div className='flex item-center justify-center gap-2'>
                <h1>Already have an account?</h1>
                <Link href="/login" className="btn btn-neutral mt-4">Login</Link>
            </div>
        </div>


    );
};

export default Register;