"use client"
import Avatar from "../../../assets/avatar.png";
import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import Image from "next/image";


const NavButtons = () => {
    const { data: session, isPending } = authClient.useSession()
    return (
        isPending ? (
            <div className="flex gap-5 items-center">
                <span className="loading loading-ring loading-xl"></span>
            </div>
        ) : session ? (
            <div className="flex gap-5 items-center">
                <button onClick={async () => await authClient.signOut()} className="btn btn-ghost text-xl bg-linear-to-r from-red-500 to-amber-900 p-2 rounded-md shadow-md">
                    <span className=' text-white'>Logout</span>
                </button>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {<Image src={session.user.image} alt="Avatar" width={40} height={40} loading="eager" />}
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href="/profile" className="justify-between">
                                Profile
                            </Link>
                        </li>
                        <li><button onClick={() => authClient.signOut()}>Logout</button></li>
                    </ul>
                </div>
            </div>
        ) : (
            <div className="flex gap-5 items-center">
                <Link href="/login" className="btn btn-ghost text-xl bg-linear-to-r from-red-500 to-amber-900 p-2 rounded-md shadow-md">
                    <span className=' text-white'>Login</span>
                </Link>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src={Avatar} alt="Avatar" width={40} height={40} />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href="/profile" className="justify-between">
                                Profile
                            </Link>
                        </li>
                        <li><Link href="/logout">Logout</Link></li>
                    </ul>
                </div>
            </div>
        )
    )
}

export default NavButtons