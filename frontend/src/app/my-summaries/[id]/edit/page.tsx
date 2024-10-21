import { Suspense } from "react";
import EditMySummary from "./components/EditMySummary/EditMySummary";


const EditPage = () => {
  return (
    <div className="h-full px-6 md:px-10 flex flex-col items-center">
      <div className="max-w-[1545px] w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <EditMySummary />
      </Suspense>
      </div>
    </div>
  )
}

export default EditPage;