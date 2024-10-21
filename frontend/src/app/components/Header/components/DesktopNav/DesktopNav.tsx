'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import LoggedInUser from "./components/LoggedInUser/LoggedInUser";

const DesktopNav = () => {

    const pathname = usePathname();

    return (
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

            <LoggedInUser />
            
        </div>
    )
}

export default DesktopNav;