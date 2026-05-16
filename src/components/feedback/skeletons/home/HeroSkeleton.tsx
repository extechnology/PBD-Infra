import Skeleton from "../../../shared/Skeleton";

const HeroSkeleton = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Placeholder */}
      <Skeleton className="absolute inset-0 h-full w-full" />
      
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent z-10 pointer-events-none"></div>
      
      {/* Scroll Indicator Placeholder */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Skeleton className="w-6 h-10 rounded-full" />
      </div>
    </section>
  );
};

export default HeroSkeleton;
