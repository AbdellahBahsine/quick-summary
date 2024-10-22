'use client';

import Summary from "@/app/components/Summary/Summary";
import { useSummaries } from "@/app/context/SummariesContext";
import { useEffect } from "react";

const MySummaries = () => {
    
    const { fetchMySummaries, mySummaries } = useSummaries();

    useEffect(() => {
        fetchMySummaries();
    }, []);

    return (
        <div className="grid-cols-auto-fit gap-4">
            {mySummaries.map((summary) => (
                <Summary key={summary.id} id={summary.id} title={summary.title} author={summary.author} description={summary.description} isModifiable={true} />
            ))}
        </div>
    );
}

export default MySummaries;