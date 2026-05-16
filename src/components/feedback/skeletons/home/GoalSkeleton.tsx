import Skeleton from "../../../shared/Skeleton";

const GoalSkeleton = () => {
  return (
    <section className="h-[95vh] bg-white overflow-hidden flex flex-col lg:flex-row">
      {/* Text Content Skeleton */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20 order-2 lg:order-1">
        <div className="max-w-lg w-full space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="w-12 h-px" />
              <Skeleton className="w-24 h-4" />
            </div>
            <Skeleton className="w-3/4 h-12" />
            <Skeleton className="w-1/2 h-12" />
          </div>

          <div className="space-y-3">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-3/4 h-4" />
          </div>

          <Skeleton className="w-40 h-10 mt-4" />
        </div>
      </div>

      {/* Image Skeleton */}
      <div className="w-full lg:w-1/2 h-full order-1 lg:order-2">
        <div className="grid grid-cols-2 h-full w-full gap-1">
          <Skeleton className="h-full w-full" />
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    </section>
  );
};

export default GoalSkeleton;

