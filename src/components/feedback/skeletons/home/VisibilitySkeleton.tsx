import Skeleton from "../../../shared/Skeleton";

const VisibilitySkeleton = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <Skeleton className="w-64 h-10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-zinc-200 shadow-sm">
              <Skeleton className="w-full h-64" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisibilitySkeleton;
