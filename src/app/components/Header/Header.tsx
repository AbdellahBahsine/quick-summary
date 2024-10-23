import Link from "next/link";
import DesktopNav from "./components/DesktopNav/DesktopNav";
import MobileNav from "./components/MobileNav/MobileNav";


const Header = () => {
    return (
        <header className="min-h-[80px] h-[80px] border-b border-gray-200 px-6 md:px-10 flex justify-center relative">
            <div className="h-full flex items-center justify-between max-w-[1545px] w-full">
                <Link href="/" className="text-2xl"><span className="font-light">Quick</span><span className="font-bold text-blue-600">Summary</span></Link>
                <DesktopNav />
                <MobileNav />
            </div>
        </header>
    )
}

export default Header;