const SummariesPagination : React.FC<{ page: number, setPage: React.Dispatch<React.SetStateAction<number>>, totalPages: number }> = ({ page, setPage, totalPages }) => {
    return (
        <div className="absolute bottom-[40px] right-0 flex items-center gap-2">
            <button disabled={page === 1} onClick={() => setPage(page - 1)} className="bg-blue-600 text-white px-4 py-2 rounded">
                Previous
            </button>
            <span>
                Page {page} of {totalPages}
            </span>
            <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="bg-blue-600 text-white px-4 py-2 rounded">
                Next
            </button>
        </div>
    )
}

export default SummariesPagination;