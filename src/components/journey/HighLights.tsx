import FadeIn from "../shared/FadeIn";
import CurtainReveal from "../ui/ImageReveal";
import LuxuryButton from "../ui/LuxuryButton";
import SubHeading from "../ui/SubHeading";

const Highlights = () => {
  return (
    <FadeIn>
      <section className="relative md:py-24 py-10 bg-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold-500/10 blur-[140px] " />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold-500/5 blur-[120px] " />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* Small Label */}
              <SubHeading title="Highlights of PBD" />

              {/* Heading */}
              <h2 className="text-xl  xl:text-2xl font-medium leading-tight text-black mb-5 mt-4">
                Engineering Growth with
                <span className="block text-gold-500">
                  Experience & Precision
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm text-justify leading-6 mb-6 max-w-2xl">
                Over the years, PBD has successfully completed around
                <span className="text-gold-500 font-medium"> 200+ </span>
                residential, commercial, and industrial projects across Kerala,
                earning the trust of nearly
                <span className="text-gold-500 font-medium"> 3000+ </span>
                satisfied customers. With a strong commitment to quality
                construction, timely delivery, and customer satisfaction, PBD
                continues to build lasting relationships and deliver
                developments that create long-term value, durability, and
                reliability.
              </p>

              {/* Button */}
              <LuxuryButton label="Explore Now!" to="offer" />
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              {/* Border Frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border border-gold-500/30" />

              {/* Main Image */}
              <div className="relative overflow-hidden">
                <CurtainReveal
                  src="/images/image3.webp"
                  alt="PBD Highlights"
                  className="w-full h-[650px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Overlay */}
                {/* <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" /> */}
              </div>

              {/* Floating Badge */}
              {/* <div className="absolute bottom-8 left-8 bg-black/40 backdrop-blur-md border border-gold-500/30 px-8 py-5">
                <h3 className="text-gold-500 text-2xl font-bold mb-1">20+</h3>

                <p className="text-zinc-300 uppercase tracking-[3px] text-xs">
                  Years Experience
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Highlights;
