const monumentData = [
  {
    title: "Privacy",
    description:
      "Private luxury residences with one flat per floor in each tower.",
    image: "/images/image1.webp",
  },
  {
    title: "Architecture",
    description:
      "Contemporary architecture designed with elegance and precision.",
    image: "/images/image2.webp",
  },
  {
    title: "Interiors",
    description:
      "Minimal interiors crafted with premium materials and clean aesthetics.",
    image: "/images/image3.webp",
  },
  {
    title: "Lifestyle",
    description:
      "An elevated lifestyle experience with curated luxury amenities.",
    image: "/images/image1.webp",
  },
];

const Monument = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div className="mb-14">
          <h1 className=" text-2xl text-center font-light text-neutral-900 md:text-3xl">
            Private Sky Villas
          </h1>

          <div className="mx-auto mt-5 h-px w-24 bg-neutral-900" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {monumentData.map((item, index) => (
            <div
              key={index}
              className="group border border-neutral-200 bg-white transition-all duration-300 hover:border-black"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 p-6">
                {/* Number */}
                <span className="block text-sm tracking-[0.25em] text-neutral-400">
                  0{index + 1}
                </span>

                {/* Title */}
                <h2 className="text-2xl font-light tracking-wide text-black">
                  {item.title}
                </h2>

                {/* Divider */}
                <div className="h-px w-12 bg-black" />

                {/* Description */}
                <p className="text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Monument;
