import SubHeading from "../ui/SubHeading";

const focusPoints = [
  "Modern Architectural Planning & Smart Space Utilization",
  "Premium Quality Construction Standards",
  "Professional Project Management & Supervision",
  "Timely Execution & On-Schedule Delivery",
  "Sustainable & Future-Ready Infrastructure",
  "Customer-Focused Design with Lasting Value",
];

const assurance = [
  "Luxury Villas",
  "Premium Apartments",
  "Independent Houses",
  "Gated Community Projects",
  "Duplex & Triplex Homes",
  "Modern Residential Townships",
];

const OfferDetails = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden border border-neutral-200 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative min-h-[400px] lg:min-h-full">
          <img
            src="/images/image1.webp"
            alt="Project"
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
          <SubHeading
            title="Houses, Flats & Villa Projects"
          />

          {/* Main Heading */}
          <h1 className="my-8 text-4xl font-light leading-tight text-black md:text-5xl">
            Timeless Spaces <br />
            Built With Precision
          </h1>

          {/* Description */}
          <p className="border-l border-gold-500 pl-5 text-base leading-relaxed text-neutral-600">
            We are developing premium houses, flats, and villa projects designed
            with modern architecture, quality construction, and comfortable
            living environments. Our residential developments focus on
            functionality, durability, aesthetics, and future-ready
            infrastructure while ensuring elegance, convenience, and long-term
            value.
          </p>

          {/* Focus */}
          <div className="mt-12">
            <h3 className="mb-5 text-lg font-medium text-black">
              What We Focus On
            </h3>

            <div className="space-y-4">
              {focusPoints.map((item, index) => (
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
            <h3 className="mb-5 text-lg font-medium text-black">
              Our Assurance
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {assurance.map((item, index) => (
                <div
                  key={index}
                  className="border border-gold-300 px-4 py-3 text-sm text-neutral-700 transition duration-300 hover:border-black"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferDetails;
