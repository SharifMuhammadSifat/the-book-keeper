import React from 'react';
import Image from 'next/image';
import Logo from "../../../assets/logo.png";
import Link from 'next/link';
import Navlink from '../Navlink/Navlink';
import NavButtons from '../NavButtons/NavButtons';
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
                        <li><Navlink href={"/profile"}>My Profile</Navlink></li>
                    </ul>
                </div>
                <NavButtons />
            </div>
        </div>
    );
};

export default Navbar;