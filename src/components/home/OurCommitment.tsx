import SubHeading from "../ui/SubHeading";
import FadeIn from "../shared/FadeIn";
import { useState } from "react";
import CommitmentSkeleton from "../feedback/skeletons/home/CommitmentSkeleton";
import CurtainReveal from "../ui/ImageReveal";
import { useSectionImages } from "../../features/sectionImages/hooks/useSectionImages";

const OurCommitment = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { data: pages } = useSectionImages();

  const homePage = pages?.find((page: any) => page.slug === "home");

  // Find Commitment Section
  const commitmentSection = homePage?.sections?.find(
    (section: any) => section.type === "commitment",
  );


  // Get First Detail
  const detail = commitmentSection?.details?.[0];

  if (isLoading) {
    return (
      <>
        <CommitmentSkeleton />

        <img
          src="/images/image1.webp"
          alt="loading-trigger"
          className="hidden"
          onLoad={() => setIsLoading(false)}
        />
      </>
    );
  }

  return (
    <section className="overflow-hidden bg-white py-10 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Image Side */}
          <CurtainReveal
            src={detail?.image || "/images/image1.webp"}
            alt={detail?.heading || "Commitment"}
            className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Text Side */}
          <div className="space-y-10">
            <FadeIn delay={200} className="space-y-6">
              <SubHeading title={detail?.sub_heading} />

              <h2 className="max-w-xs py-2 text-xl leading-tight text-black sm:text-2xl">
                {detail?.heading}
              </h2>

              <p className="pt-2 text-justify text-sm leading-relaxed text-gray-600">
                {detail?.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
