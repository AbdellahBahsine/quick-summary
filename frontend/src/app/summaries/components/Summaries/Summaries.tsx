import Summary from "@/app/components/Summary/Summary";

const Summaries = () => {

    const summaries = [
        {
            id: 1,
            title: "The subtle art of not giving a f**k",
            author: "Mark Manson",
            description: "This book is about how to prioritize what you care about and how to stop caring about things that don't matter."
        },
        {
            id: 2,
            title: "The subtle art of not giving a f**k",
            author: "Mark Manson",
            description: "This book is about how to prioritize what you care about and how to stop caring about things that don't matter."
        },
        {
            id: 3,
            title: "The subtle art of not giving a f**k",
            author: "Mark Manson",
            description: "This book is about how to prioritize what you care about and how to stop caring about things that don't matter."
        },
    ];

    return (
        <div className="grid-cols-auto-fit gap-4">
            {
                summaries.map((summary) => (
                    <Summary key={summary.id} id={summary.id} title={summary.title} author={summary.author} description={summary.description} isModifiable={false} />
                ))
            }
        </div>
    );
}

export default Summaries;