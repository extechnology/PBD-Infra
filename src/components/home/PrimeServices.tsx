import FadeIn from "../shared/FadeIn";
import { useState } from "react";
import ServicesSkeleton from "../feedback/skeletons/home/ServicesSkeleton";
import LuxuryButton from "../ui/LuxuryButton";
import CurtainReveal from "../ui/ImageReveal";

const PrimeServices = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    <section className="bg-white pt-8 text-black pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-12 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative overflow-hidden shadow-lg shadow-gold-500/10  border-gold-500/20">
              <CurtainReveal
                src="/images/image3.webp"
                alt="Prime Services"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn direction="right" className="space-y-12">
            <h2 className="text-2xl font-medium pb-4">
              Our <span className="text-gold-500">Prime Services</span>
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed pb-4">
              We offer comprehensive construction and real estate solutions
              backed by over 20 years of industry expertise. Our prime services
              include residential construction, commercial development,
              industrial infrastructure projects, project management,
              contracting services, and real estate development. We focus on
              delivering high-quality, durable, and future-ready spaces with
              professional execution, modern engineering practices, and timely
              project completion
            </p>
            <LuxuryButton label="Explore Services" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default PrimeServices;

