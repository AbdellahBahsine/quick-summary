'use client';

import { useSummaries } from "@/app/context/SummariesContext";
import { useState } from "react";

const NewSummaryForm = () => {

    const {addSummary} = useSummaries();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');

    const summary = {title, author, content, description};

    const handleNewSummary = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addSummary(summary);
    }

    return (
        <form className="flex flex-col gap-4 mb-10" onSubmit={handleNewSummary} >
            <div className="flex flex-col items-start gap-2 sm:max-w-[400px] w-full">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" className="border border-gray-300 p-4 rounded w-full outline-none" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="flex flex-col items-start gap-2 sm:max-w-[400px] w-full">
                <label htmlFor="author">Author</label>
                <input type="text" id="author" name="author" className="border border-gray-300 p-4 rounded w-full outline-none" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="flex flex-col items-start gap-2 sm:max-w-[400px] w-full">
                <label htmlFor="author">Description</label>
                <input type="text" id="description" name="description" className="border border-gray-300 p-4 rounded w-full outline-none" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="flex flex-col items-start gap-2 max-w-[700px] w-full">
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" className="border border-gray-300 p-4 rounded w-full resize-none h-[500px] outline-none" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <button type="submit" className="bg-blue-600 text-white p-4 rounded w-[100px] self-start">Submit</button>
        </form>
    );
}

export default NewSummaryForm;