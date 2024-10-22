'use client';

import WithAuth from "@/app/components/WithAuth/WithAuth";
import NewSummaryForm from "./components/NewSummaryForm/NewSummaryForm";

const NewSummaryPage = () => {
    return (
        <div className="px-6 md:px-10 flex justify-center">
            <div className="max-w-[1545px] w-full">
                <h1 className="font-bold text-xl my-6">New Summary</h1>
                <NewSummaryForm />
            </div>
        </div>
    );
}

export default WithAuth(NewSummaryPage);