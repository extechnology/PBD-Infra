import FadeIn from "../shared/FadeIn"
import CurtainReveal from "../ui/ImageReveal";
import SectionHeading from "../ui/SectionHeading";

const journeyContent = {
  messageFromMD: {
    title: "Message from Managing Director",
    content:
      "At PBD, our journey has always been driven by quality, trust, and commitment. Over the past 20 years, we have successfully delivered residential, commercial, and industrial projects with a strong focus on excellence and timely completion. We believe every project is an opportunity to create lasting value and meaningful spaces for our clients. With innovation, professionalism, and customer satisfaction at our core, we continue to build developments that reflect reliability, precision, and modern construction standards",
    author: "- V Prajith",
  },
  ourManagement: {
    title: "Our Management",
    subtitle: "Leadership Driven by Excellence & Innovation",
    content:
      "Prajith Builders & Developers is led by an experienced and visionary management team committed to delivering excellence in every project. Driven by innovation, professionalism, and continuous growth, the leadership team remains actively involved throughout the planning and execution process. Supported by skilled architects, engineering experts, project supervisors, sales & marketing professionals, and a dedicated customer support team, PBD ensures quality construction, efficient project management, and exceptional client satisfaction across all developments.",
  },
};


const OurJourney = () => {
  return (
    <div>
      <FadeIn>
        <div className="max-w-7xl mx-auto pb-10">
          <SectionHeading title="Our Journey" subtitle="Transforming Ideas into Trusted Developments" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="">
              <CurtainReveal
                src="/images/image1.webp"
                alt="no image"
                className=""
              />
            </div>

            <div className="content-center">
              <p className="pt-3 font-medium text-lg">{journeyContent.messageFromMD.title}</p>
              <p className="py-5 text-sm text-justify ">
                {journeyContent.messageFromMD.content}
              </p>
              <p className=" font-medium text-gold-500">{journeyContent.messageFromMD.author}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10">
            <div className="content-center">
              <p className="pt-3 text-gold-500 font-medium">{journeyContent.ourManagement.title}</p>
              <p className="py-2">{journeyContent.ourManagement.subtitle}</p>
              <p className="py-1 text-sm text-justify">
                {journeyContent.ourManagement.content}
              </p>
            </div>
            <div className="">
              <CurtainReveal
                src="/images/image1.webp"
                alt="no image"
                className=""
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default OurJourney