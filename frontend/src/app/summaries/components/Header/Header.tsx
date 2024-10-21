const Header = () => {
    return (
        <div className="my-6">
            <h1 className="text-xl font-bold" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>Summaries</h1>
            <p>Here you can find summaries of books created by you and other users.</p>
            <input type="text" placeholder="Search summaries by title" className="border border-gray-300 p-4 sm:max-w-[450px] w-full mt-4 outline-none" />
        </div>
    )
}

export default Header;