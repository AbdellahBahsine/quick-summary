'use client';

import WithAuth from "@/app/components/WithAuth/WithAuth";
import NewSummaryForm from "./components/NewSummaryForm/NewSummaryForm";

const NewSummaryPage = () => {
    return (
        <div className="px-6 md:px-10 flex justify-center">
            <div className="max-w-[1545px] w-full">
                <div className="w-full sm:w-fit border-b-2 border-gray-200 pb-4 my-6">
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 flex items-center uppercase">
                        <div className="text-2xl md:text-3xl border border-gray-800 text-white p-2 rounded mr-4">📄</div>
                        New Summary
                    </h1>
                </div>
                <NewSummaryForm />
            </div>
        </div>
    );
}

export default WithAuth(NewSummaryPage);