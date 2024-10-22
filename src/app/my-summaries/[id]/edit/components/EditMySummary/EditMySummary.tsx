'use client';

import { useSummaries } from "@/app/context/SummariesContext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditMySummary = () => {
    
    const {fetchSummaryById, summary, updateSummary} = useSummaries();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");

    const newSummary = {title, author, description, content};
    
    const { id } = useParams<{ id: string }>();;

    useEffect(() => {
        fetchSummaryById(id[0]);
    }, [fetchSummaryById, id]);

    useEffect(() => {
        if (summary) {
            setTitle(summary.title);
            setAuthor(summary.author);
            setDescription(summary.description);
            setContent(summary.content);
        }
    }, [summary]);

    const handleEditSummary = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (summary)
            updateSummary(summary.id, newSummary);
    }

    return (
        <div>
            <div className="w-full sm:w-fit border-b-2 border-gray-200 pb-4 my-6">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 flex items-center uppercase">
                    <div className="text-2xl md:text-3xl border border-gray-800 text-white p-2 rounded mr-4">✏️</div>
                    Edit My Summary - <span className="font-light">{summary?.title}</span>
                </h1>
            </div>
            <form className="flex flex-col gap-4 mb-10" onSubmit={handleEditSummary}>
                <div className="flex flex-col items-start gap-2 sm:max-w-[400px] w-full">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={title} className="border border-gray-300 p-4 rounded w-full outline-none" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="flex flex-col items-start gap-2 sm:max-w-[400px] w-full">
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" value={author} className="border border-gray-300 p-4 rounded w-full outline-none" onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="flex flex-col items-start gap-2 sm:max-w-[400px] w-full">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" value={description} className="border border-gray-300 p-4 rounded w-full outline-none" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="flex flex-col items-start gap-2 max-w-[700px] w-full">
                    <label htmlFor="content">Content</label>
                    <textarea name="content" value={content} className="border border-gray-300 p-4 rounded w-full resize-none h-[500px] outline-none" onChange={(e) => setContent(e.target.value)} />
                </div>
                <button className="bg-blue-600 text-white p-4 rounded w-[100px] self-start">Save</button>
            </form>
        </div>
    )
}

export default EditMySummary;