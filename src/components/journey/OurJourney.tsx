import FadeIn from "../shared/FadeIn";
import CurtainReveal from "../ui/ImageReveal";
import SectionHeading from "../ui/SectionHeading";
import { useSectionImages } from "../../features/sectionImages/hooks/useSectionImages";

const OurJourney = () => {
  const { data: pages } = useSectionImages();
  const homePage = pages?.find((page) => page.slug === "our-journey");
  const aboutSection = homePage?.sections?.filter(
    (section) => section.type === "journey",
  );


  const messageSection = aboutSection?.[0];
  const managementSection = aboutSection?.[1];


  return (
    <div>
      <FadeIn>
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <SectionHeading
            title="Our Journey"
            subtitle="Transforming Ideas into Trusted Developments"
          />
          {messageSection?.details?.map((message, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="">
                <CurtainReveal
                  src={message?.image}
                  alt="no image"
                  className=""
                />
              </div>

              <div className="content-center">
                <p className="pt-3 font-medium text-lg">{message?.heading}</p>
                <p className="py-5 text-sm text-justify ">
                  {message?.description}
                </p>
                <p className=" font-medium text-gold-500">
                  {message?.sub_heading}
                </p>
              </div>
            </div>
          ))}

          {managementSection?.details?.map((management, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-8"
            >
              <div className="content-center">
                <p className="pt-3 text-gold-500 font-medium">
                  {management?.heading}
                </p>
                <p className="py-2">{management?.sub_heading}</p>
                <p className="py-1 text-sm text-justify">
                  {management?.description}
                </p>
              </div>
              <div className="">
                <CurtainReveal
                  src={management?.image}
                  alt="no image"
                  className=""
                />
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export default OurJourney;
