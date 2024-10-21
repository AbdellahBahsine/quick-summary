'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import MobileNav from "./components/MobileNav/MobileNav";


const Header = () => {

    const pathname = usePathname();

    return (
        <header className="min-h-[70px] h-[70px] border-b border-gray-200">
            <div className="h-full flex items-center justify-between px-6 md:px-10">
                <Link href="/">Quick<span className="font-bold text-blue-600">Summary</span></Link>
                <div className="h-full items-center gap-4 hidden md:flex">
                    <nav className="h-full flex items-center font-[300]">
                        <ul className="h-full flex items-center gap-4">
                            <li className="h-full flex items-center justify-center relative">
                                <Link href="/" className={`h-full flex items-center ${pathname === '/' ? "font-bold" : ""}`}>Home</Link>
                                {pathname === '/' ? <div className='absolute bottom-[-1px] h-[2px] w-[70%] bg-blue-600'></div> : ""}
                            </li>
                            <li className="h-full flex items-center justify-center relative">
                                <Link href="/summaries" className={`h-full flex items-center ${pathname === '/summaries' ? "font-bold" : ""}`}>Summaries</Link>
                                {pathname === '/summaries' ? <div className='absolute bottom-[-1px] h-[2px] w-[70%] bg-blue-600'></div> : ""}
                            </li>
                        </ul>
                    </nav>
                    <div className="flex gap-4">
                        <Link href="/login" className="bg-blue-600 text-white px-4 py-2"><button>Sign In</button></Link>
                        <Link href="/register" className="bg-transparent text-blue-600 border border-blue-600 px-4 py-2"><button>Sign Up</button></Link>
                    </div>
                </div>
                <MobileNav />
            </div>
        </header>
    )
}

export default Header;