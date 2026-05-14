import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "../shared/FadeIn";

const OurGoal = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <FadeIn>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-px bg-gold-500"></div>
                  <p className="text-gold-500 font-semibold tracking-[0.2em] uppercase text-sm">
                    Our Goal
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-2xl  lg:text-4xl pb-2  text-white leading-[1.1] tracking-tight">
                  Build Trust Through <br />
                  <span className="font-bold text-gold-500">
                    Timely Delivery
                  </span>{" "}
                  <br />& Innovation
                </h2>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                We aim to achieve new milestones by delivering high-quality
                residential, commercial, and industrial projects across Kerala.
                Our focus remains steadfast on excellence in construction,
                customer satisfaction, sustainability, and precision in project
                completion.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="pt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-3 text-white hover:text-gold-500 transition-colors duration-300 group"
                >
                  <span className="uppercase tracking-widest text-sm font-semibold">
                    Discover Our Vision
                  </span>
                  <span className="p-2 border border-white/20 rounded-full group-hover:border-gold-500/50 transition-colors">
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Minimalist Image Layout */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <FadeIn delay={0.8}>
            <div className="relative w-full aspect-4/5 md:aspect-square lg:aspect-[4/5] max-w-md mx-auto lg:max-w-none lg:ml-auto">
              {/* Subtle Gold Frame */}
              <div className="absolute -inset-4 border border-gold-500/30 rounded-t-[50%] rounded-b-md opacity-50 transform translate-x-4 translate-y-4"></div>

              {/* Image Container */}
                <div className="relative h-full w-full rounded-t-[50%] rounded-b-md overflow-hidden bg-gray-900 border border-white/10">
                  <img
                    src="/images/image2.webp"
                    alt="Our Goal - Architecture and Construction"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                  />
                  {/* Gradient Overlay for integration */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent"></div>
                </div>

              {/* Decorative Accent */}
              <div className="absolute -left-8 top-1/4 w-24 h-24 bg-gold-500 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
            </div>
              </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
