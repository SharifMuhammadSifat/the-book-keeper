"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ href, children }) => {
    const pathname = usePathname();



    return (
        <Link href={href} className={`text-black text-xl font-semibold ${pathname === href ? 'border-b-2 border-amber-900 rounded-b-none' : 'hover:bg-linear-to-r from-red-500 to-amber-900 hover:text-white'} p-1.5 rounded-sm`}>
            {children}
        </Link>
    );
};

export default Navlink;