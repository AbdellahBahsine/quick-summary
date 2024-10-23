import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full px-6 md:px-10 flex justify-center">
      <div className="max-w-[1545px] w-full flex py-8">
        <div className="h-full pt-64 xl:w-[50%] padding-top-height">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">📚 Create books summaries</h1>
          <p className="mt-6 text-4xl sm:text-5xl font-light max-w-[800px] leading-[1.4]">QuickSummary is a platform where you can <span className="bg-yellow-200 rounded-full px-4">create</span> summaries of your favorite books.</p>
          <p className="mt-6 text-lg font-light"> You can also read summaries created by other users.</p>
          <p className="mt-6 text-lg font-light"> Sign in to start creating summaries.</p>
          <Link href="/register" className="bg-blue-600 text-white w-[200px] h-[50px] flex items-center justify-center mt-8 rounded">Get Started</Link>
        </div>
        <div className="hidden xl:flex justify-center w-[50%] pt-32 padding-top-height-img">
          <div className="w-[700px] h-[700px] relative">
            <Image src="/images/Learning-bro.svg" alt="learning" layout="fill" objectFit="cover" quality={100} />
          </div>
        </div>
      </div>
    </div>
  );
}
