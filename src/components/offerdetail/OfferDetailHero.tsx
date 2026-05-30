import { useState } from "react";
import { ChevronDown } from "lucide-react";
import useBanners from "../../features/banners/hooks/useBanners";

const OfferDetailHero = () => {
  const [expanded, setExpanded] = useState(false);

  const { data: bannersData } = useBanners();

  const journeyBanner = bannersData?.filter((banner) => banner.section === "services");
  const journeyBannerImage = journeyBanner?.[0]?.image;

  const description = `
    PBD specializes in project development and construction services across
    residential, commercial, and industrial sectors. With over 20 years of
    expertise, we deliver high-quality, future-ready developments through
    professional planning, modern engineering practices, skilled execution,
    and timely project completion while maintaining strong standards in
    quality, safety, reliability, and customer satisfaction.
  `;

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={journeyBannerImage}
          alt="Project Development"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Vintage Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-10 top-0 hidden h-full w-px bg-white/10 lg:block" />
      <div className="absolute right-10 top-0 hidden h-full w-px bg-white/10 lg:block" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 lg:px-10 lg:pb-24">
        <div className="max-w-4xl">
          {/* Heading */}
          <h1 className="max-w-3xl  text-4xl leading-tight text-white md:text-5xl md:leading-[1.1]">
            Project Development <br />& Construction
          </h1>

          {/* Divider */}
          <div className="my-8 h-px w-28 bg-white/40" />

          {/* Description */}
          <div className="max-w-3xl">
            <p
              className={`overflow-hidden text-base leading-relaxed text-white/75 transition-all duration-500 md:text-lg ${
                expanded ? "max-h-[500px]" : "max-h-[60px]"
              }`}
            >
              {description}
            </p>

            {/* Read More */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="group mt-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white transition hover:text-white/70"
            >
              {expanded ? "Read Less" : "Read More"}

              <ChevronDown
                size={16}
                className={`transition duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferDetailHero;
