import FadeIn from "../shared/FadeIn";
import { useState } from "react";
import VisibilitySkeleton from "../feedback/skeletons/home/VisibilitySkeleton";
import SectionHeading from "../ui/SectionHeading";
import FadeUpImage from "../ui/ImageFadeUp";
import useVisibility from "../../features/home/visibility/hooks/useVisibility";


const OurVisibility = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { data: visibility } = useVisibility();

  if (isLoading) {
    return (
      <>
        <VisibilitySkeleton />
        <img
          src="/images/image3.webp"
          alt="loading-trigger"
          className="hidden"
          onLoad={() => setIsLoading(false)}
        />
      </>
    );
  }

  return (
    <section className="bg-white text-black py-12 md:py-20 relative">

      <div
        className={`max-w-7xl mx-auto px-4 md:px-0 transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Title */}
        <FadeIn delay={0.2}>
          <SectionHeading title="Our Visibility" />
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:px-0">
          {visibility?.map((item, idx) => (
            <FadeIn key={idx} delay={0.3 + idx * 0.1}>
              <div className="relative group overflow-hidden border border-gold-500/30 shadow-xl hover:shadow-gold-500/50 transition-shadow duration-300">
                <FadeUpImage
                  src={item?.image}
                  alt={item?.label}
                  className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-105"
                  // onLoad={handleImageLoad}
                />
                {/* Dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Label */}
              </div>
              <div className=" pt-3 text-sm font-medium text-gray-600">
                {item?.title}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVisibility;

