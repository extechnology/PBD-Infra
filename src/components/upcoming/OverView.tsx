

const OverView = () => {
  const images = [
    "/images/image1.webp",
    "/images/image2.webp",
    "/images/image3.webp",
    "/images/image1.webp",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Accent */}
      <div className="absolute left-0 top-0 h-72 w-72  bg-neutral-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72  bg-neutral-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-14 text-center">
          {/* <span className="mb-3 inline-block  border border-neutral-200 bg-neutral-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Luxury Living
          </span> */}

          <h1 className=" text-2xl font-light tracking-tight text-neutral-900 md:text-3xl">
            Private Sky Villas
          </h1>

          <div className="mx-auto mt-5 h-px w-24 bg-neutral-900" />
        </div>

        {/* Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2 className="mb-6 text-2xl font-medium leading-tight text-neutral-900">
              Elevated Living <br />
              Beyond Expectations
            </h2>

            <p className="mb-8 text-justify text-base leading-relaxed text-neutral-600 md:text-lg">
              Experience a refined lifestyle crafted with modern architecture,
              spacious interiors, and premium amenities. Every detail is
              thoughtfully designed to provide elegance, privacy, and comfort in
              a serene urban environment.
            </p>

            {/* Features */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "5 Bedroom Villas",
                "3 Car Garage",
                "Private Infinity Pool",
                "Landscaped Garden",
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-sm border border-neutral-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-xl"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white">
                    0{index + 1}
                  </div>

                  <span className="text-sm font-medium text-neutral-700 md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Gallery */}
          <div className="grid grid-cols-2 ">
            {images.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden  ${
                  index === 1 || index === 2 ? "translate-y-0" : "translate-y-0"
                }`}
              >
                <div className="absolute inset-0 z-10 bg-black/10 transition duration-500 group-hover:bg-black/0" />

                <img
                  src={image}
                  alt="Luxury Residence"
                  className="w-full object-cover aspect-square transition duration-700 group-hover:scale-110 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverView;
