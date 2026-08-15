'use client';

import React from "react";
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';
const UpdateDetails = () => {
    const { register, handleSubmit } = useForm();
    const handleUpdate = async (data) => {
        const { data: res, error } = await authClient.updateUser({
            ...(data.name ? { name: data.name } : {}),
            ...(data.image ? { image: data.image } : {})
        });
        if (error) {
            toast.error(error.message);
        }
        if (res) {
            toast.success("User updated successfully");
            redirect("/");
        }
    }

    return (
        <div className='flex-1 flex flex-col items-center justify-center py-8 px-4 bg-amber-50'>
            <form onSubmit={handleSubmit(handleUpdate)}>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-3xl text-amber-900 font-bold">Update Details</legend>
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Enter updated Name" {...register("name")} />
                    <label className="label">Image URL</label>
                    <input type="url" className="input" placeholder="Enter updated Image URL" {...register("image")} />
                    <button type='submit' className="btn bg-linear-to-r from-red-500 to-amber-900 text-white mt-4">Update</button>
                </fieldset>
            </form>
        </div>
    );
};
export default UpdateDetails;