'use client';

import { useEffect, useState } from "react";
import WithAuth from "../components/WithAuth/WithAuth";
import Header from "./components/Header/Header";
import Summaries from "./components/Summaries/Summaries";
import { useSummaries } from "../context/SummariesContext";
import { useUser } from "../context/UserContext";

const SummariesPage = () => {

    const { fetchSummaries} = useSummaries();
    const { user } = useUser();

    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 8;
    const [totalPages, setTotalPages] = useState<number>(Math.ceil(total / limit));
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetchSummaries(page, limit, title, setTotal);
    }, [user, page, title, fetchSummaries]);

    useEffect(() => {
        setTotalPages(Math.ceil(total / limit));
    }, [total]);

    return (
        <div className="px-6 md:px-10 flex justify-center h-full">
            <div className="max-w-[1545px] w-full h-full flex flex-col">
                <Header limit={limit} title={title} setTitle={setTitle} setTotal={setTotal} />
                <Summaries page={page} setPage={setPage} totalPages={totalPages} />
            </div>
        </div>
    );
};

export default WithAuth(SummariesPage);