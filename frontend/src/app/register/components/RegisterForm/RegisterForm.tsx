'use client';

import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, username, password, confirmPassword);
    }

    return (
        <div className="border border-gray-300 p-8 w-[460px] mt-32 rounded">
            <h1 className="text-4xl font-bold mb-6"><span className="text-blue-600"> Sign Up</span> <span className="font-normal text-sm">and start making summaries</span></h1>
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="text-sm">E-mail</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 p-4" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="text-sm">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="border border-gray-300 p-4" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 p-4" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm">Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border border-gray-300 p-4" />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-4 rounded">Log in</button>
                <p className="text-sm text-gray-500">Already have an account? <Link href="/login" className="text-blue-500">Log in</Link></p>
            </form>
        </div>
    );
}

export default RegisterForm;