import { useUser } from "@/app/context/UserContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LoggedInUser = () => {

    const { logout } = useUser();

    const pathname = usePathname();
    
    return (
        <>
            <Link href="/summaries" className={`flex items-center ${pathname === '/summaries' ? "font-bold" : ""}`}><li>Summaries</li></Link>
            <Link href="/my-summaries" className={`flex items-center ${pathname === '/my-summaries' ? "font-bold" : ""}`}><li>My Summaries</li></Link>
            <button onClick={() => logout()}>Logout</button>
        </>
    )
}

export default LoggedInUser;