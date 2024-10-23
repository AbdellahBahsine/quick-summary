'use client';

import Link from "next/link";
import { useState } from "react";
import RemoveSummary from "./components/RemoveSummary/RemoveSummary";


const Summary : React.FC<{ id: string, title: string, author: string, description: string, isModifiable: boolean }> = ({ id, title, author, description, isModifiable }) => {

    const [isRemove, setIsRemove] = useState(false);

    return (
        <>
            {!isModifiable && <Link href={`/summaries/${id}`}>
                <div className="border border-gray-300 p-4 rounded">
                    <div className="flex justify-between">
                            <h1 className="font-bold max-w-[200px] truncate overflow-hidden whitespace-nowrap">{title.length > 50 ? title.slice(0, 50) + '...' : title}</h1>
                    </div>
                    <span className="text-sm">By {author.length > 50 ? author.slice(0, 50) + '...' : author}</span>
                    <p className="text-gray-500">{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                </div>
            </Link>
            }

            {
                isModifiable && <div className="border border-gray-300 p-4 rounded">
                    <div className="flex justify-between">
                        <Link href={`/summaries/${id}`}><h1 className="font-bold max-w-[200px] truncate overflow-hidden whitespace-nowrap">{title.length > 50 ? title.slice(0, 50) + '...' : title}</h1></Link>
                        <div className="flex gap-4">
                            <button className="text-red-500" onClick={() => setIsRemove(true)}>Remove</button>
                            <Link href={`/my-summaries/${id}/edit`}><button className="text-blue-600">Edit</button></Link>
                        </div>
                    </div>
                    <Link href={`/summaries/${id}`}>
                        <span className="text-sm">By {author.length > 50 ? author.slice(0, 50) + '...' : author}</span>
                        <p className="text-gray-500">{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                    </Link>
                </div>
            }

            {
                isRemove && <RemoveSummary setIsRemove={setIsRemove} id={id} />}
        </>
    );
}

export default Summary;