import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full px-6 md:px-10 flex justify-center">
      <div className="max-w-[1545px] w-full">
        <div className="h-full mt-32">
          <h1 className="text-4xl font-bold text-blue-600">📚 Create books summaries</h1>
          <p className="mt-6 text-5xl font-light max-w-[800px]">QuickSummary is a platform where you can create summaries of your favorite books.</p>
          <p className="mt-6 text-lg font-light"> You can also read summaries created by other users.</p>
          <p className="mt-6 text-lg font-light"> Sign in to start creating summaries.</p>
          <Link href="/register" className="bg-blue-600 text-white w-[200px] h-[50px] flex items-center justify-center mt-8 rounded">Get Started</Link>
        </div>
      </div>
    </div>
  );
}
