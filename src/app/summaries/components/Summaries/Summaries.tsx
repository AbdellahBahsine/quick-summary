import SummariesPagination from "@/app/components/SummariesPagination/SummariesPagination";
import Summary from "@/app/components/Summary/Summary";
import SummarySkeleton from "@/app/components/Summary/components/SummarySkeleton/SummarySkeleton";
import { useSummaries } from "@/app/context/SummariesContext";

const Summaries : React.FC<{page: number, totalPages: number, setPage: React.Dispatch<React.SetStateAction<number>>}> = ({page, totalPages, setPage}) => {

    const {summaries, loading} = useSummaries();

    return (
        <div className="relative flex-1 pb-10">
                {
                    loading ? (
                        <div className="grid-cols-auto-fit gap-4">
                        {
                            Array.from({ length: 8 }).map((_, index) => (
                                <SummarySkeleton key={index} />
                            ))
                        }
                        </div>
                    ) :
                    <div className="grid-cols-auto-fit gap-4">
                        {
                            summaries.map((summary) => (
                                <Summary key={summary.id} id={summary.id} title={summary.title} author={summary.author} description={summary.description} isModifiable={false} />
                            ))
                        }
                        <SummariesPagination page={page} setPage={setPage} totalPages={totalPages} />
                    </div>
                }
        </div>
    );
}

export default Summaries;