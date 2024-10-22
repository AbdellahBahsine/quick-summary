'use client';

import Link from "next/link";
import MySummaries from "./components/MySummaries/MySummaries";
import WithAuth from "../components/WithAuth/WithAuth";

const MySummariesPage = () => {
    return (
        <div className="px-6 md:px-10 flex justify-center">
            <div className="max-w-[1545px] w-full">
                <div className="flex justify-between items-center my-4">
                    <h1 className="text-xl font-bold">My Summaries</h1>
                    <Link href="/my-summaries/new-summary" className="bg-blue-500 text-white p-4 rounded"><button>Create new summary</button></Link>
                </div>
                <MySummaries />
            </div>
        </div>
    );
}

export default WithAuth(MySummariesPage);