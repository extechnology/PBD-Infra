import SubHeading from "../ui/SubHeading";
import FadeIn from "../shared/FadeIn";
import { useState } from "react";
import CommitmentSkeleton from "../feedback/skeletons/home/CommitmentSkeleton";
import CurtainReveal from "../ui/ImageReveal";

const OurCommitment = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <CurtainReveal
            src="/images/image1.webp"
            alt="Construction commitment"
            className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-110"
          />

          {/* Text Side */}
          <div className="space-y-10">
            <FadeIn delay={200} className="space-y-6">
              <SubHeading title="Our Commitment" />
              <h2 className="text-xl sm:text-2xl max-w-sm py-2 text-black leading-tight">
                Dedicated to building trust{" "}
                <span className="text-gold-500 font-medium">
                  Through Excellence.
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm pt-2">
                At PBD, we are committed to delivering exceptional construction
                and real estate solutions with uncompromised quality,
                transparency, and timely execution. Every project reflects our
                dedication to engineering excellence, customer satisfaction,
                sustainable development, and long-term value creation.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
