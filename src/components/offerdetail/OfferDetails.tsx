import LuxuryButton from "../ui/LuxuryButton";
import { useParams } from "react-router-dom";
import useOfferDetails from "../../features/offer/hooks/useOfferDetails";
import createSlug from "../../lib/utils/slug";
import { Phone, FileDown } from "lucide-react";

// Dynamic data will be derived from the offer API


const OfferDetails = () => {
  const { slug } = useParams();
  const { data: offers, isLoading } = useOfferDetails();

  // Find the offer matching the URL slug
  const offer = offers?.find(
    (item) => createSlug(item?.category?.title) === slug,
  );

  // Split points and assurance strings into arrays, filtering empty strings
  const pointsArray = offer?.points?.split('#').filter((p) => p.trim()) || [];
  const assuranceArray = offer?.assurance?.split('#').filter((p) => p.trim()) || [];

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden border border-neutral-200 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative min-h-[400px] lg:min-h-full">
          <img
            src={offer?.image ?? "/images/image1.webp"}
            alt={offer?.heading ?? "Project"}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Label */}
          <div className="absolute bottom-0 left-0 border-t border-r border-white/20 bg-white/90 px-8 py-5 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-500">
              Premium Developments
            </span>

            <h2 className="mt-2 text-2xl font-light tracking-wide text-black">
              Crafted For Modern Living
            </h2>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center px-6 py-14 md:px-10 lg:px-14">
          {/* Small Label */}
          {/* <SubHeading title={offer?.category?.title ?? ""} /> */}

          {/* Main Heading */}
          <h1 className="my-8 text-2xl font-light leading-tight text-black md:text-3xl">
            {offer?.category?.title ?? ""}
          </h1>

          {/* Description */}
          <p className="border-l border-gold-500 pl-5 text-base leading-relaxed text-neutral-600">
            {offer?.description}
          </p>

          {/* Focus */}
          <div className="mt-12">
            <h3 className="mb-5 text-lg font-medium text-neutral-500">
              What We Focus On
            </h3>

            <div className="space-y-4">
              {pointsArray.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b border-neutral-200 pb-4"
                >
                  <span className="text-sm text-gold-500">0{index + 1}</span>

                  <p className="text-sm leading-relaxed text-neutral-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Assurance */}
          <div className="mt-12">
            <h3 className="mb-5 text-lg font-medium text-neutral-500">
              Our Assurance
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {assuranceArray.map((item, index) => (
                <div
                  key={index}
                  className="border border-gold-300 px-4 py-3 text-sm text-neutral-700 transition duration-300 hover:border-black"
                >
                  {item.trim()}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-14 flex flex-col gap-4 sm:flex-row">
            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent("Hi, I'm interested in your services. Could you share more details?")}`}
              target="_blank"
              rel="noopener noreferrer"
              id="offer-contact-btn"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-gold-500 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-black hover:text-gold-500"
            >
              <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Contact Us</span>
            </a>

            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent("Hello, I'd like to download the brochure. Please share it with me.")}`}
              target="_blank"
              rel="noopener noreferrer"
              id="offer-download-brochure-btn"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden border border-neutral-300 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-neutral-500 transition-all duration-500 hover:border-gold-500 hover:text-gold-500"
            >
              <FileDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>Download Brochure</span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center pt-18">
        <LuxuryButton label="Explore Projects" to="/projects" />
      </div>
    </section>
  );
};

export default OfferDetails;

