import LuxuryButton from "../ui/LuxuryButton";
import FadeIn from "../shared/FadeIn";
import SubHeading from "../ui/SubHeading";
import CurtainReveal from "../ui/ImageReveal";

const ValueGrowthSection = () => {
  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {/* ================= SECTION 1 ================= */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* IMAGE */}
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold-100 blur-3xl opacity-50" />

              <div className="relative overflow-hidden">
                <CurtainReveal
                  src="/images/image1.webp"
                  alt="Value Growth"
                  className="w-full h-[550px] object-cover hover:scale-105 transition duration-700"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-8 right-8 bg-white shadow-2xl  px-8 py-6 border border-gray-100">
                <h3 className="text-4xl font-medium text-black mb-2">20+</h3>

                <p className="text-gray-500 uppercase tracking-[3px] text-xs">
                  Years Experience
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div>
              {/* Label */}
              <div className="flex items-center gap-4 mb-6">
                <SubHeading title="Appreciation in Value" />
              </div>

              {/* Heading */}
              <h2 className="text-xl md:text-2xl font-medium text-black leading-tight mb-5">
                Engineering Long-Term
                <span className="block text-gold-600">
                  Property Value & Growth
                </span>
              </h2>

              {/* Content */}
              <p className="text-gray-600 text-justify leading-6 text-sm mb-5">
                At PBD, we focus on developing projects that create long-term
                value and growth for landowners and investors through strategic
                planning, quality construction, and high-potential developments.
                PBD ensures sustainable appreciation and enhanced property value
                by delivering premium developments with modern infrastructure,
                excellent locations, and reliable construction standards.
              </p>

              {/* Features */}

              {/* Button */}
              <LuxuryButton label="Explore Projects" to="projects" />
            </div>
          </div>
        </FadeIn>

        {/* ================= SECTION 2 ================= */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* CONTENT */}
            <div className="order-2 lg:order-1">
              {/* Label */}
              <div className="flex items-center gap-4 mb-6">
                <SubHeading title="Future Vision" />
              </div>

              {/* Heading */}
              <h2 className="text-xl md:text-2xl font-medium text-black leading-tight mb-5">
                Pioneering the Future
                <span className="block text-gold-600">of Development</span>
              </h2>

              <h3 className="text-md text-gray-700 font-medium mb-5">
                Innovating Construction for a Better Tomorrow
              </h3>

              {/* Paragraph */}
              <p className="text-gray-600 leading-6 text-justify text-sm mb-2">
                At Prajith Builders & Developers, we believe lasting growth is
                built through strong relationships, trust, and a commitment to
                excellence. Over the past 20+ years, our journey has been shaped
                by the support of our clients, partners, and the people of
                Kerala. Strengthening this vision, we launched a new venture,
                <span className="font-medium text-black">
                  {" "}
                  PCM Asset Home LLP{" "}
                </span>
                in 2024, focused exclusively on premium villa and residential
                developments with innovative planning and future-ready luxury
                living concepts.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative order-1 lg:order-2">
              {/* Decorative Border */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-gray-200 " />

              {/* Main Image */}
              <div className="relative overflow-hidden ">
                <CurtainReveal
                  src="/images/image2.webp"
                  alt="Future Development"
                  className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md shadow-xl px-7 py-5  border border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-[3px] mb-1">
                  New Venture
                </p>

                <h3 className="text-md font-medium text-black">
                  PCM Asset Home LLP
                </h3>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ValueGrowthSection;
