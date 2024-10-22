import Link from 'next/link';

const GuestUser = () => {
    return (
        <div className="flex gap-4">
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2"><button>Sign In</button></Link>
            <Link href="/register" className="bg-transparent text-blue-600 border border-blue-600 px-4 py-2"><button>Sign Up</button></Link>
        </div>
    )
}

export default GuestUser;