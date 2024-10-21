import MySummaries from "./components/MySummaries/MySummaries";

const MySummariesPage = () => {
    return (
        <div className="px-6 md:px-10 flex justify-center">
            <div className="max-w-[1545px] w-full">
                <div className="flex justify-between items-center my-4">
                    <h1 className="text-xl font-bold">My Summaries</h1>
                    <button className="bg-blue-500 text-white p-4 rounded">Create new summary</button>
                </div>
                <MySummaries />
            </div>
        </div>
    );
}

export default MySummariesPage;