'use client'
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegister = (data) => {
        console.log(data);
    }
    return (
        <div className='flex flex-col m-auto items-center justify-center gap-4'>
            <form onSubmit={handleSubmit(handleRegister)}>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-3xl text-amber-900 font-bold">Register</legend>

                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" {...register("name", { required: 'Please provide your name' })} />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" {...register("email", { required: 'Please provide your email' })} />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" {...register("password", { required: 'Please provide your password' })} />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                    <label className="label">Photo URL</label>
                    <input type="url" className="input" placeholder="Photo URL" {...register("photoURL", { required: 'Please provide your photo URL' })} />
                    {errors.photoURL && <p className="text-red-500">{errors.photoURL.message}</p>}

                    <button type='submit' className="btn bg-linear-to-r from-red-500 to-amber-900 text-white mt-4">Register</button>
                </fieldset>
            </form>
            <div className='flex item-center justify-center gap-2'>
                <h1>Already have an account?</h1>
                <Link href="/login" className="bg-linear-to-r from-red-500 to-amber-900 bg-clip-text text-transparent '">Login</Link>
            </div>
        </div>


    );
};

export default Register;