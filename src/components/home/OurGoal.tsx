import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "../shared/FadeIn";
import { useState } from "react";
import GoalSkeleton from "../feedback/skeletons/home/GoalSkeleton";
import SubHeading from "../ui/SubHeading";
import CurtainReveal from "../ui/ImageReveal";
import { useSectionImages } from "../../features/sectionImages/hooks/useSectionImages";


const OurGoal = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { data: pages } = useSectionImages();

  const homePage = pages?.find((page) => page.slug === "home");

  const goalSection = homePage?.sections?.find(
    (section) => section.type === "goal",
  );
  const detail = goalSection?.details?.[0];

  console.log(detail, "detail");

  if (isLoading) {
    return (
      <>
        <GoalSkeleton />
        {/* Hidden image to trigger loading */}
        <img
          src="/images/image2.webp"
          alt="loading-trigger"
          className="hidden"
          onLoad={() => setIsLoading(false)}
        />
      </>
    );
  }

  return (
    <section className="h-[95vh] bg-white overflow-hidden flex flex-col lg:flex-row">
      {/* Text Content - Centered */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20 order-2 lg:order-1">
        <div className="max-w-lg space-y-4">
          <div className="space-y-2">
            <SubHeading title={detail?.sub_heading} />

            <FadeIn delay={0.2}>
              <h2 className="text-xl max-w-xs lg:text-2xl text-black leading-[1.2] tracking-tight">
                {detail?.heading}
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <p className="text-gray-700 text-sm text-justify  font-light leading-relaxed">
              {detail?.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="">
              <Link
                to="/journey"
                className="inline-flex items-center space-x-3 text-black hover:text-gold-500 transition-colors duration-300 group"
              >
                <span className="uppercase tracking-widest text-xs font-medium">
                  Discover Our Vision
                </span>
                <span className="p-1 border border-black/20 rounded-full group-hover:border-gold-500/50 transition-colors">
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Right Side Images - Filling Screen Half */}
      <div className="w-full lg:w-1/2 h-full order-1 lg:order-2 flex items-center justify-center">
        <FadeIn
          delay={0.8}
          className="h-full w-full flex items-center justify-center"
        >
          <div className="relative grid grid-cols-2 h-[700px] w-full ">
            <CurtainReveal
              src={detail?.image}
              alt="Our Goal 1"
              className="w-full h-full object-cover opacity-90  hover:opacity-100  transition-all duration-700"
            />
            <CurtainReveal
              src="/images/image3.webp"
              alt="Our Goal 2"
              className="w-full h-full object-cover opacity-90 hover:opacity-100  transition-all duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-white/10 to-transparent pointer-events-none"></div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default OurGoal;
