const NewSummaryForm = () => {
    return (
        <form className="flex flex-col gap-4">
            <div className="flex flex-col items-start gap-2 sm:max-w-[400px] w-full">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" className="border border-gray-300 p-4 rounded w-full outline-none" />
            </div>
            <div className="flex flex-col items-start gap-2 sm:max-w-[400px] w-full">
                <label htmlFor="author">Author</label>
                <input type="text" id="author" name="author" className="border border-gray-300 p-4 rounded w-full outline-none" />
            </div>
            <div className="flex flex-col items-start gap-2 sm:max-w-[400px] w-full">
                <label htmlFor="author">Description</label>
                <input type="text" id="description" name="description" className="border border-gray-300 p-4 rounded w-full outline-none" />
            </div>
            <div className="flex flex-col items-start gap-2 max-w-[700px] w-full">
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" className="border border-gray-300 p-4 rounded w-full resize-none h-[500px] outline-none" />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-4 rounded w-[100px] self-start">Submit</button>
        </form>
    );
}

export default NewSummaryForm;