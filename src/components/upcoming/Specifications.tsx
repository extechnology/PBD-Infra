
const amenities = [
  "Landscaped Garden",
  "Entrance Lobby with High Ceiling",
  "CCTV in Select Common Areas",
  "Children’s Play Area",
  "Swimming Pool",
  "Kids’ Pool",
  "Pool Deck",
  "Gymnasium",
  "Yoga / Activity Room",
  "Multipurpose Hall",
  "High Speed Elevators",
  "Back-up Generator for Emergency Power",
  "VRF System of Air Conditioning",
];

const specifications = [
  "Branded marble flooring for living, dining, kitchen and all bedrooms",
  "Vitrified/ceramic tiles for bathroom flooring and dado",
  "Wash basin counters | Vitrified/ceramic tiles dado 2 feet high above kitchen platform",
  "Kitchen platform with stainless steel sink and drain board | Branded marble for master bathroom flooring",
  "Anti-skid tiles in the balcony areas (wherever applicable) | Aluminum windows",
  "Concealed plumbing | Branded C.P. fittings | Branded electrical switches",
  "Video door phone | Laminated flush doors",
];

const galleryImages = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
];

const Specifications = () => {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background */}
      {/* <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800&auto=format&fit=crop"
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />
      </div> */}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 md:px-0">
        {/* Amenities */}
        <div>
          <h2 className="mb-8 text-2xl font-medium uppercase tracking-wide text-gold-600 md:text-3xl">
            Amenities
          </h2>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
            {Array.from({ length: 4 }).map((_, columnIndex) => (
              <ul key={columnIndex} className="space-y-4">
                {amenities
                  .filter((_, index) => index % 4 === columnIndex)
                  .map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-relaxed text-white/90 md:text-base"
                    >
                      <span className="mt-[7px] h-2 w-2 rounded-full bg-gold-500" />
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            ))}
          </div>

          {/* Gallery */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[0, 2].map((startIndex) => (
              <div
                key={startIndex}
                className="overflow-hidden border border-white/40 bg-white/5 p-3 backdrop-blur-md"
              >
                <div className="grid grid-cols-2 gap-3">
                  {galleryImages
                    .slice(startIndex, startIndex + 2)
                    .map((image, idx) => (
                      <div
                        key={idx}
                        className="group relative h-44 overflow-hidden md:h-52"
                      >
                        <img
                          src={image}
                          alt="Gallery"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-medium uppercase tracking-wide text-gold-600 md:text-3xl">
            Specifications
          </h2>

          <div className="grid grid-cols-1 gap-x-16 gap-y-5 lg:grid-cols-2">
            {specifications.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-sm leading-loose text-white/90 md:text-base"
              >
                <span className="mt-[10px] h-2 w-2 min-w-[8px] rounded-full bg-gold-500" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
