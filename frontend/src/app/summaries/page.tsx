import Header from "./components/Header/Header";
import Summaries from "./components/Summaries/Summaries";

const SummariesPage = () => {    
    return (
        <div className="px-6 md:px-10 flex justify-center">
            <div className="max-w-[1545px] w-full">
                <Header />
                <Summaries />
            </div>
        </div>
    );
};

export default SummariesPage;