'use client';

// import { useParams } from "next/navigation";

const SummaryDetails = () => {

    // const { id } = useParams<{ id: string }>();

    return (
        <div className="px-6 md:px-10 flex justify-center">
            <div className="max-w-[1545px] w-full">
                <div className="mt-10 border border-gray-300 p-8 rounded">
                    <h1 className="text-4xl font-bold">HELLO WORLD :D</h1>
                    <p className="text-sm text-gray-500">by John Doe</p>
                    <p className="text-sm text-gray-500">on 12th August 2021</p>
                    <div className="mt-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsum distinctio nesciunt quam molestias praesentium adipisci dignissimos? Optio atque, ad esse consequatur laudantium maxime est, at aliquam voluptate repellendus quis temporibus, obcaecati sed perferendis veniam dolor voluptatem labore hic autem?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SummaryDetails;