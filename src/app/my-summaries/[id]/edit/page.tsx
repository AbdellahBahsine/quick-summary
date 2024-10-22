'use client';

import EditMySummary from "./components/EditMySummary/EditMySummary";
import WithAuth from "@/app/components/WithAuth/WithAuth";


const EditPage = () => {
  return (
    <div className="h-full px-6 md:px-10 flex flex-col items-center">
      <div className="max-w-[1545px] w-full">
        <EditMySummary />
      </div>
    </div>
  )
}

export default WithAuth(EditPage);