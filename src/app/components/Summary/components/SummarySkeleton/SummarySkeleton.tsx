import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SummarySkeleton = () => {
  return (
    <div className="p-4 border rounded shadow flex flex-col">
        <Skeleton height={20} />
        <Skeleton height={15} className="mt-2" />
        <Skeleton height={15} className="mt-2" />
    </div>
  );
};

export default SummarySkeleton;
