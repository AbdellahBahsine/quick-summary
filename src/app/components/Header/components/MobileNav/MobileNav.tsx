'use client';

import { useUser } from "@/app/context/UserContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const MobileNav = () => {

    const { isLoggedIn, logout } = useUser();

    const [isOpen, setIsOpen] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const pathname = usePathname();

    useEffect(() => {
        setIsUser(isLoggedIn());
        setIsLoaded(true);
    }, [])

    if (!isLoaded) {
        return null;
    }

    return (
        <div className="md:hidden">
            <div className="w-[40px] flex flex-col items-end gap-1 cursor-pointer" onClick={handleClick}>
                <div className="w-[33.33%] h-[3px] bg-blue-600"></div>
                <div className="w-[66.66%] h-[3px] bg-blue-600"></div>
                <div className="w-full h-[3px] bg-blue-600"></div>
            </div>

            <div className={`${isOpen ? 'right-[0px]' : "right-[-100vw]"} flex-col gap-4 bg-white absolute top-[80px] w-full py-6 px-6 border-b border-l border-r border-gray-200 transition-top duration-500 ease-in-out`}>
                <nav className="flex items-center justify-end gap-4 font-[300]">
                    <Link href="/" className={`${pathname === '/' ? "font-bold" : ""}`}>Home</Link>
                    {
                        isUser ? (
                            <div className="flex gap-4">
                                <Link href="/summaries" className={`${pathname === '/summaries' ? "font-bold" : ""}`}>Summaries</Link>
                                <Link href="/my-summaries" className={`${pathname === '/my-summaries' ? "font-bold" : ""}`}>My Summaries</Link>
                                <button onClick={() => logout()}>Log out</button>
                            </div>
                        ) : (
                            <div className="flex gap-4">
                                <Link href="/login" className="bg-blue-600 text-white w-[80px] h-[40px] flex items-center justify-center"><button>Sign In</button></Link>
                                <Link href="/register" className="bg-transparent text-blue-600 border border-blue-600 w-[80px] h-[40px] flex items-center justify-center"><button>Sign Up</button></Link>
                            </div>
                        )
                    }
                </nav>

            </div>
        </div>
    )
}

export default MobileNav;