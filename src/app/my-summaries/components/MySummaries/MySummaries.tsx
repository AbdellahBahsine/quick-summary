'use client';

import SummariesPagination from "@/app/components/SummariesPagination/SummariesPagination";
import Summary from "@/app/components/Summary/Summary";
import SummarySkeleton from "@/app/components/Summary/components/SummarySkeleton/SummarySkeleton";
import { useSummaries } from "@/app/context/SummariesContext";
import { useEffect, useState } from "react";

const MySummaries = () => {
    
    const { fetchMySummaries, mySummaries, loading } = useSummaries();

    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 8;
    const [totalPages, setTotalPages] = useState<number>(Math.ceil(total / limit));

    useEffect(() => {
        fetchMySummaries(page, limit, setTotal);
    }, [page]);

    useEffect(() => {
        setTotalPages(Math.ceil(total / limit));
    }, [total]);

    return (
        <div className="relative flex-1">
            {
                loading ? (
                    <div className="grid-cols-auto-fit gap-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <SummarySkeleton key={index} />
                    ))}
                    </div>
                ) :
                <div className="grid-cols-auto-fit gap-4">
                    {
                        mySummaries.map((summary) => (
                            <Summary key={summary.id} id={summary.id} title={summary.title} author={summary.author} description={summary.description} isModifiable={true} />
                        ))
                    }

                    <SummariesPagination page={page} setPage={setPage} totalPages={totalPages} />
                </div>
            }
        </div>
    );
}

export default MySummaries;