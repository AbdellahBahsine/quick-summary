'use client';

import Link from "next/link";
import { useState } from "react";
import RemoveSummary from "./components/RemoveSummary/RemoveSummary";


const Summary : React.FC<{ id: number, title: string, author: string, description: string, isModifiable: boolean }> = ({ id, title, author, description, isModifiable }) => {

    const [isRemove, setIsRemove] = useState(false);

    return (
        <>
                <div className="border border-gray-300 p-4 rounded">
                    <div className="flex justify-between">
                        <Link href={`/summaries/${id}`}>
                            <h1 className="font-bold max-w-[200px] truncate overflow-hidden whitespace-nowrap">{title}</h1>
                        </Link>
                        {isModifiable && 
                        
                            <div className="flex gap-4">
                                <button className="text-red-500" onClick={() => setIsRemove(true)}>Remove</button>
                                <Link href={`/my-summaries/${id}/edit`}><button className="text-blue-500">Edit</button></Link>
                            </div>
                        }
                    </div>
                    <span className="text-sm">By {author}</span>
                    <p className="text-gray-500">{description}</p>
                </div>

            {
                isRemove && <RemoveSummary setIsRemove={setIsRemove} />}
        </>
    );
}

export default Summary;