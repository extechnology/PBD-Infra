import LuxuryButton from "../ui/LuxuryButton";
import FadeIn from "../shared/FadeIn";
import SubHeading from "../ui/SubHeading";
import CurtainReveal from "../ui/ImageReveal";
import { useSectionImages } from "../../features/sectionImages/hooks/useSectionImages";

const ValueGrowthSection = () => {
  const { data: pages } = useSectionImages();
  const homePage = pages?.find((page: any) => page.slug === "our-journey");
  const valueGrowthSection = homePage?.sections?.filter(
    (section: any) => section.type === "growth-section",
  );
  const section1 = valueGrowthSection?.[0];
  const section2 = valueGrowthSection?.[1];

console.log(section2,"section")
  
  return (
    <section className="bg-white md:py-28 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {/* ================= SECTION 1 ================= */}
        <FadeIn>
          {section1?.details?.map((detail: any, index: number) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* IMAGE */}
              <div className="relative">
                {/* Background Shape */}
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold-100 blur-3xl opacity-50" />

                <div className="relative overflow-hidden">
                  <CurtainReveal
                    src={detail?.image}
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
                <div className="flex items-center gap-4 mb-3">
                  <SubHeading title={detail?.sub_heading} />
                </div>

                {/* Heading */}
                <h2 className="text-xl max-w-xs md:text-2xl font-light text-black leading-tight mb-5">
                  {detail?.heading}
                </h2>

                {/* Content */}
                <p className="text-gray-600 text-justify leading-6 text-sm mb-5">
                  {detail?.description}
                </p>


                {/* Button */}
                <LuxuryButton label="Explore Projects" to="projects" />
              </div>
            </div>
          ))}
        </FadeIn>

        {/* ================= SECTION 2 ================= */}
        <FadeIn>
          {section2?.details?.map((detail: any, index: number) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* CONTENT SECTOIN*/}
              <div className="order-2 lg:order-1">
                {/* Label */}
                <div className="flex items-center gap-4 mb-3">
                  <SubHeading title={detail?.sub_heading} />
                </div>

                {/* Heading */}
                <h2 className="text-xl max-w-xs md:text-2xl font-light text-black leading-tight mb-2">
                  {detail?.heading}
                </h2>

                {/* Paragraph */}
                <p className="text-gray-600 leading-6 text-justify text-sm mb-2">
                  {detail?.description}
                </p>
              </div>

              {/* IMAGE  SECTION*/}
              <div className="relative order-1 lg:order-2">
                {/* Decorative Border */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border border-gray-200 " />

                {/* Main Image */}
                <div className="relative overflow-hidden ">
                  <CurtainReveal
                    src={detail?.image}
                    alt="Future Development"
                    className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md shadow-xl px-7 py-5  border border-gray-100">
                  <p className="text-xs text-gray-500 uppercase tracking-[3px] mb-1">
                    New Venture
                  </p>

                  <h3 className="text-md font-light text-black">
                    PCM Asset Home LLP
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
};

export default ValueGrowthSection;
