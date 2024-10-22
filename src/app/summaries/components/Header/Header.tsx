'use client';

import { useSummaries } from "@/app/context/SummariesContext";

const Header : React.FC<{limit: number, title: string, setTitle: (title: string) => void, setTotal: (total: number) => void}> = ({limit, title, setTitle, setTotal}) => {

    const { fetchSummaries } = useSummaries();

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        fetchSummaries(1, limit, title, setTotal);
    }

    return (
        <div className="my-6">
            <h1 className="text-xl font-bold" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>Summaries</h1>
            <p>Here you can find summaries of books created by you and other users.</p>
            <input type="text" placeholder="Search summaries by title" className="border border-gray-300 p-4 sm:max-w-[450px] w-full mt-4 outline-none" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button className="bg-blue-600 text-white p-4 mt-4 w-full sm:w-fit" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Header;