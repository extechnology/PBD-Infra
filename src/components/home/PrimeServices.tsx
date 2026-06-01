import FadeIn from "../shared/FadeIn";
import { useState } from "react";
import ServicesSkeleton from "../feedback/skeletons/home/ServicesSkeleton";
import LuxuryButton from "../ui/LuxuryButton";
import CurtainReveal from "../ui/ImageReveal";
import { useSectionImages } from "../../features/sectionImages/hooks/useSectionImages";
// import usePrimeService from "../../features/home/prime-service/hooks/hooks.primeservice";

const PrimeServices = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {data:pages} = useSectionImages();
  // const { data: primeservice } = usePrimeService();
  // console.log(primeservice,"primeservice")

  const homePage = pages?.find((page: any) => page.slug === "home");

  const servicesSection = homePage?.sections?.find(
    (section: any) => section.type === "prime-services",
  );
  const detail = servicesSection?.details?.[0];

  // console.log(detail,"prime detail")

  if (isLoading) {
    return (
      <>
        <ServicesSkeleton />
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
    <section className="bg-white pt-8 text-black pb-10 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative overflow-hidden shadow-lg shadow-gold-500/10  border-gold-500/20">
              <CurtainReveal
                src={detail?.image || "/images/image3.webp"}
                alt="Prime Services"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn direction="right" className="space-y-12">
            <h2 className="text-2xl font-light pb-4">
              {detail?.heading}
            </h2>
            <p className="text-sm text-gray-700 text-justify leading-relaxed pb-4">
              {detail?.description}
            </p>
            <LuxuryButton label="Explore Services" to="offer" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default PrimeServices;

