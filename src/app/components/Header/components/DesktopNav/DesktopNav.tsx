'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import LoggedInUser from "./components/LoggedInUser/LoggedInUser";
import GuestUser from "./components/GuestUser/GuestUser";
import { useUser } from "@/app/context/UserContext";

const DesktopNav = () => {

    const { isLoggedIn } = useUser();

    const pathname = usePathname();

    return (
        <div className="h-full items-center gap-4 hidden md:flex">
            <nav className="h-full flex items-center font-[300]">
                <ul className="flex items-center gap-4">
                    <li className="flex items-center justify-center relative">
                        <Link href="/" className={`flex items-center ${pathname === '/' ? "font-bold" : ""}`}>Home</Link>
                    </li>
                    {
                        isLoggedIn() ? (
                            <LoggedInUser />
                        ) : (
                            <GuestUser />
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default DesktopNav;