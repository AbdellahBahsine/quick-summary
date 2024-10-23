'use client';

import Link from "next/link";
import MySummaries from "./components/MySummaries/MySummaries";
import WithAuth from "../components/WithAuth/WithAuth";

const MySummariesPage = () => {
    return (
        <div className="px-6 md:px-10 flex justify-center h-full">
            <div className="max-w-[1545px] w-full h-full flex flex-col">
                <div className="flex justify-between items-center my-4">
                    <div>
                        <h1 className="text-xl font-bold">My Summaries</h1>
                        <p>Here you can find summaries of books created by you.</p>
                    </div>
                    <Link href="/my-summaries/new-summary" className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white"><button>Create summary</button></Link>
                </div>
                <MySummaries />
            </div>
        </div>
    );
}

export default WithAuth(MySummariesPage);