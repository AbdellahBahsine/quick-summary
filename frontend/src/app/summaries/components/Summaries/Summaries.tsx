import Summary from "@/app/components/Summary/Summary";
import { useSummaries } from "@/app/context/SummariesContext";
import { useUser } from "@/app/context/UserContext";
import { useEffect } from "react";

const Summaries = () => {

    const { fetchSummaries, summaries} = useSummaries();
    const { user } = useUser();

    useEffect(() => {
        fetchSummaries();
    }, [user]);

    return (
        <div className="grid-cols-auto-fit gap-4">
            {
                summaries.map((summary) => (
                    <Summary key={summary.id} id={summary.id} title={summary.title} author={summary.author} description={summary.description} isModifiable={false} />
                ))
            }
        </div>
    );
}

export default Summaries;