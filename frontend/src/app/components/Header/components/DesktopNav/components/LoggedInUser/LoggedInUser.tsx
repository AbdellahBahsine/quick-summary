import Link from "next/link";
import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

const LoggedInUser = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    return (
        <div className="relative" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <div className="w-full flex items-center gap-2 bg-blue-600 text-white p-2 rounded cursor-pointer">
                <p>John Doe</p>
                <IoIosArrowDown />
            </div>
            <div className={`absolute top-[44px] w-full right-0 bg-white text-[#171717] shadow-md p-4 rounded ${dropdownOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col gap-4">
                    <li className="hover:underline cursor-pointer"><Link href="/my-summaries">My summaries</Link></li>
                    <li className="hover:underline cursor-pointer">Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default LoggedInUser;