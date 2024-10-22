'use client';

import WithAuth from "@/app/components/WithAuth/WithAuth";
import { useSummaries } from "@/app/context/SummariesContext";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const SummaryDetails = () => {

    const {fetchSummaryById, summary} = useSummaries();

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        fetchSummaryById(id);
    }, [fetchSummaryById, id]);

    return (
        <div className="px-6 md:px-10 flex justify-center">
            <div className="max-w-[1545px] w-full">
                <div className="mt-10 border border-gray-300 p-8 rounded">
                    <h1 className="text-4xl font-bold">{summary?.title}</h1>
                    <p className="text-sm text-gray-500">by {summary?.author}</p>
                    <div className="mt-6">
                        <p>{summary?.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WithAuth(SummaryDetails);