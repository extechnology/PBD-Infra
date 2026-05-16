import Skeleton from "../../../shared/Skeleton";

const CommitmentSkeleton = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side Skeleton */}
          <div className="relative">
            <Skeleton className="w-full h-[500px] rounded-4xl" />
          </div>

          {/* Text Side Skeleton */}
          <div className="space-y-10">
            <div className="space-y-6">
              <Skeleton className="w-40 h-8 rounded-full" />
              <Skeleton className="w-3/4 h-12" />
              <div className="space-y-3">
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-3/4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSkeleton;
