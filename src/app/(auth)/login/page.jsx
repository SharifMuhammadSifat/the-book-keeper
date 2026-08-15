'use client'
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
const login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = async (data) => {
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            toast.error(error.message);
        }
        if (res) {
            toast.success("User logged in successfully");
        }
    }


    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <div className='flex flex-col'>
            <form onSubmit={handleSubmit(handleLogin)}>


                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-3xl text-amber-900 font-bold">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" {...register("email", { required: 'Please provide your email' })} />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" {...register("password", { required: 'Please provide your password' })} />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    <button type='submit' className="btn bg-linear-to-r from-red-500 to-amber-900 text-white mt-4">Login</button>
                    <button type='button' className='btn bg-linear-to-r from-red-500 to-amber-900 text-white mt-4' onClick={handleGoogleLogin}>Login with Google</button>
                </fieldset>
            </form>
            <div className='flex items-center justify-center gap-2'>
                <h1>Don't have an account?</h1>
                <Link href="/register" className="bg-linear-to-r from-red-500 to-amber-900 bg-clip-text text-transparent">Register</Link>
            </div>
        </div>
    );
};

export default login;