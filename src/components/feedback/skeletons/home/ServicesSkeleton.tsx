import Skeleton from "../../../shared/Skeleton";

const ServicesSkeleton = () => {
  return (
    <section className="bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Skeleton */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 aspect-video md:aspect-auto md:h-96">
            <Skeleton className="w-full h-full" />
          </div>

          {/* Text Skeleton */}
          <div className="space-y-8">
            <Skeleton className="w-1/2 h-10" />
            <div className="space-y-3">
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-3/4 h-4" />
            </div>
            <Skeleton className="w-40 h-12 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSkeleton;
