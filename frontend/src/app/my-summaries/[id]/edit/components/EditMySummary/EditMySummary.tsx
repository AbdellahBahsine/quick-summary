

const EditMySummary = () => {

    const summary = {
        id: 1,
        title: "The subtle art of not giving a f**k",
        author: "Mark Manson",
        description: "This book is about how to prioritize what you care about and how to stop caring about things that don't matter.",
        content: "This book is about how to prioritize what you care about and how to stop caring about things that don't matter. This book is about how to prioritize what you care about and how to stop caring about things that don't matter. This book is about how to prioritize what you care about and how to stop caring about things that don't matter."
    }

    return (
        <div>
            <h1 className="text-xl font-bold my-6">Edit My Summary - <span className="font-light">{summary.title}</span></h1>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-2 sm:max-w-[400px] w-full">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={summary.title} className="border border-gray-300 p-4 rounded w-full outline-none" />
                </div>
                <div className="flex flex-col items-start gap-2 sm:max-w-[400px] w-full">
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" value={summary.author} className="border border-gray-300 p-4 rounded w-full outline-none" />
                </div>
                <div className="flex flex-col items-start gap-2 sm:max-w-[400px] w-full">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" value={summary.description} className="border border-gray-300 p-4 rounded w-full outline-none" />
                </div>
                <div className="flex flex-col items-start gap-2 max-w-[700px] w-full">
                    <label htmlFor="content">Content</label>
                    <textarea name="content" value={summary.content} className="border border-gray-300 p-4 rounded w-full resize-none h-[500px] outline-none" />
                </div>
                <button className="bg-blue-500 text-white p-4 rounded w-[100px] self-start">Save</button>
            </form>
        </div>
    )
}

export default EditMySummary;