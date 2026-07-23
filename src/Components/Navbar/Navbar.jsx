import React from 'react';
import Image from 'next/image';
import Avatar from "../../../assets/avatar.png";
import Logo from "../../../assets/logo.png";
import Link from 'next/link';
import Navlink from '../Navlink/Navlink';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex justify-between w-full items-center">
                <div>
                    <Link href="/" className="btn border-0 text-xl bg-transparent normal-case">
                        <Image src={Logo} alt="Logo" width={40} height={40} /> <span className='bg-linear-to-r from-red-500 to-amber-900 bg-clip-text text-transparent '>TheBookKeeper</span>
                    </Link>
                </div>

                <div>
                    <ul className="flex gap-5 items-center mx-auto text-[16px] font-semibold text-amber-900">
                        <li><Navlink href={"/"}>Home</Navlink></li>
                        <li><Navlink href={"/books"}>All Books</Navlink></li>
                        <li><Navlink href={"/Profile"}>My Profile</Navlink></li>
                    </ul>
                </div>

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
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;