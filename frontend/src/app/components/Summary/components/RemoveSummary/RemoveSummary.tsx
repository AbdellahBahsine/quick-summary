

const RemoveSummary: React.FC<{ setIsRemove: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setIsRemove }) => {  
    return (
        <div className="absolute top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
            <div className="h-200 w-300 bg-white p-4 rounded">
                <p className="mb-4">Are you sure you want to remove this summary?</p>
                <div className="flex justify-end gap-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => console.log("Remove")}>Yes</button>
                <button className="bg-gray-300 text-white px-4 py-2 rounded" onClick={() => setIsRemove(false)}>No</button>
                </div>
            </div>
        </div>
    );
}

export default RemoveSummary;