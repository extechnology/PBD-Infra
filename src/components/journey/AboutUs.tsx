import FadeIn from "../shared/FadeIn";
import CurtainReveal from "../ui/ImageReveal";
import { useSectionImages } from "../../features/sectionImages/hooks/useSectionImages";


const AboutUs = () => {

  const { data: pages } = useSectionImages();
  const homePage = pages?.find((page: any) => page.slug === "our-journey");
  const aboutSection = homePage?.sections?.find(
    (section: any) => section.type === "about-us",
  );
  const detail = aboutSection?.details?.[0];

  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 py-10 md:py-20">
        <FadeIn delay={0.2}>
          <div>
            <CurtainReveal src={detail?.image || "/images/image1.webp"} alt="no image" className="" />
          </div>
        </FadeIn>
        <div className="content-center">
          <FadeIn delay={0.4}>
            <h1 className="text-2xl font-medium text-gold-500">{detail?.heading}</h1>
            <p className="pt-3 font-medium">
              {detail?.sub_heading}
            </p>
            <p className="py-3 text-sm text-justify">
              {detail?.description}
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
