'use client';
import { authClient } from "@/lib/auth-client"
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
const ProfileDetails = () => {
    const { data: session, isPending } = authClient.useSession();
    return (
        isPending ? (
            <div className="flex gap-5 items-center">
                <span className="loading loading-ring loading-xl"></span>
            </div>
        ) : (
            <div className="flex-1 flex flex-col items-center justify-center bg-amber-50 px-4 py-8">
                <div className="w-full max-w-md rounded-xl bg-white shadow-lg p-8">
                    <div className="flex flex-col items-center">
                        <Image
                            src={session?.user?.image}
                            alt={session?.user?.name}
                            width={180}
                            height={180}
                            className="rounded-full object-cover border-4 border-amber-500"
                        />

                        <h1 className="mt-6 text-3xl font-bold text-gray-800">
                            {session?.user?.name}
                        </h1>

                        <div className="mt-8 flex w-full flex-col gap-4">
                            <Link href="/profile/update-details" className="w-full flex items-center justify-center rounded-lg bg-linear-to-r from-red-500 to-amber-900 text-white py-3 font-semibold transition hover:bg-amber-600">
                                Update Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default ProfileDetails;  