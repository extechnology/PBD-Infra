import FadeIn from "../shared/FadeIn";

const visibilityData = [
  { src: "/images/image1.webp", label: "Residential" },
  { src: "/images/image2.webp", label: "Commercial" },
  { src: "/images/image3.webp", label: "Industrial" },
  { src: "/images/image1.webp", label: "Infrastructure" },
];

const OurVisibility = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <FadeIn delay={0.2}>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-12">
            Our <span className="text-gold-500">Visibility</span>
          </h2>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibilityData.map((item, idx) => (
            <FadeIn key={idx} delay={0.3 + idx * 0.1}>
              <div className="relative group overflow-hidden rounded-xl border border-gold-500/30 shadow-xl hover:shadow-gold-500/50 transition-shadow duration-300">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Label */}
                <div className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                  {item.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVisibility;
