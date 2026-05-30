interface Specification {
  id: number;
  amenities: string;
  specifications: string;
  is_active: boolean;
}

interface SpecificationImage {
  id: number;
  image: string;
}

interface SpecificationsProps {
  specifications: Specification[];
  specificationImages?: (SpecificationImage[] | undefined)[];
}

const Specifications = ({
  specifications,
  specificationImages,
}: SpecificationsProps) => {
  // Since API returns array with single object
  const specificationData = specifications?.[0];

  // ── Amenities ──
  const parsedAmenities =
    specificationData?.amenities
      ?.split("#")
      .map((a) => a.replace(/[\r\n]/g, "").trim())
      .filter(Boolean) ?? [];

  // ── Specifications ──
  const parsedSpecs =
    specificationData?.specifications
      ?.split("#")
      .map((s) => s.replace(/[\r\n]/g, "").trim())
      .filter(Boolean) ?? [];

  // ── Gallery Images ──
  const galleryImages: SpecificationImage[] =
    specificationImages
      ?.flat()
      .filter((img): img is SpecificationImage => !!img) ?? [];

  return (
    <section className="relative overflow-hidden text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 md:px-0">
        {/* ───────────────── Amenities ───────────────── */}
        {parsedAmenities.length > 0 && (
          <div>
            <h2 className="mb-8 text-2xl font-medium uppercase tracking-wide text-gold-600 md:text-3xl">
              Amenities
            </h2>

            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
              {Array.from({ length: 4 }).map((_, columnIndex) => (
                <ul key={columnIndex} className="space-y-4">
                  {parsedAmenities
                    .filter((_, index) => index % 4 === columnIndex)
                    .map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm leading-relaxed text-white/90 md:text-base"
                      >
                        <span className="mt-[7px] h-2 w-2 min-w-[8px] rounded-full bg-gold-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                </ul>
              ))}
            </div>

            {/* ───────────────── Gallery ───────────────── */}
            {galleryImages.length > 0 && (
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {[0, 2].map((startIndex) => {
                  const slice = galleryImages.slice(startIndex, startIndex + 2);

                  if (slice.length === 0) return null;

                  return (
                    <div
                      key={startIndex}
                      className="overflow-hidden border border-white/40 bg-white/5 p-3 backdrop-blur-md"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {slice.map((imgObj, idx) => (
                          <div
                            key={idx}
                            className="group relative h-44 overflow-hidden md:h-52"
                          >
                            <img
                              src={imgObj.image}
                              alt="Specification Gallery"
                              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/0" />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ───────────────── Specifications ───────────────── */}
        {parsedSpecs.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-medium uppercase tracking-wide text-gold-600 md:text-3xl">
              Specifications
            </h2>

            <div className="grid grid-cols-1 gap-x-16 gap-y-5 lg:grid-cols-2">
              {parsedSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm leading-loose text-white/90 md:text-base"
                >
                  <span className="mt-[10px] h-2 w-2 min-w-[8px] rounded-full bg-gold-500" />

                  <p>{spec}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Specifications;