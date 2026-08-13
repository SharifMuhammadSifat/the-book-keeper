import Link from "next/link";
import Image from "next/image";
import Logo from "../../../assets/logo.png";
const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className='navbar bg-base-100 shadow-sm flex item-center justify-center'>
                <Link href="/" className="btn border-0 text-xl bg-transparent normal-case">
                    <Image src={Logo} alt="Logo" width={40} height={40} /> <span className='bg-linear-to-r from-red-500 to-amber-900 bg-clip-text text-transparent '>TheBookKeeper</span>
                </Link>
            </div>
            <div className="flex-1 flex items-center justify-center">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;