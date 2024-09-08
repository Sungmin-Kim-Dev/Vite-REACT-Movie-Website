import { Skeleton } from "../../components/ui/skeleton";

const SlideSkeleton = () => {
  return (
    <div className="global-px my-8">
      <Skeleton className="h-8 w-3/5 max-w-72" />
      <div className="my-6 grid auto-rows-[0] grid-cols-2 grid-rows-1 gap-x-5 gap-y-0 overflow-hidden md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-x-8">
        <Skeleton className="aspect-[2/3]" />
        <Skeleton className="aspect-[2/3]" />
        <Skeleton className="aspect-[2/3]" />
        <Skeleton className="aspect-[2/3]" />
        <Skeleton className="aspect-[2/3]" />
      </div>
    </div>
  );
};

export default SlideSkeleton;
