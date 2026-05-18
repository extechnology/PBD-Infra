import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import galleryData from "../../constants/galleryData";
import SectionHeading from "../ui/SectionHeading";
import FadeUpImage from "../ui/ImageFadeUp";

// const projectGalleryData = Array.from({ length: 25 }).map((_, i) => ({
//   id: i + 1,
//   image: i % 2 === 0 ? "/home-interior.jpg" : "/home-interior2.jpg",
//   location: [
//     "Feroke, Calicut",
//     "Perumanna, Calicut",
//     "Panthiramkave, Calicut",
//     "Mukkam, Calicut",
//     "Vipin, Ernakulam",
//   ][i % 5],
// }));

const GalleryCard = () => {
  const [currentPage] = useState(1);

//   const itemsPerPage = 10;

  // Scroll to top of gallery section when page changes
  useEffect(() => {
    // optional: add smooth scroll logic if needed
  }, [currentPage]);

  return (
    <div className="bg-charcoal min-h-screen text-black font-body selection:bg-accent selection:text-black pb-20">

      <section className="pt-24 relative overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="text-center mb-16">
          <SectionHeading title="Our Milestone Projects" />
        </div>

        {/* Grid Layout perfectly matching the requested structure */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {galleryData?.map((segment, index) => (
            <div
              key={index}
              className="group flex flex-col h-full bg-white/5 border border-white/20 rounded-md hover:border-sand transition-all duration-300 shadow-soft overflow-hidden"
            >
              {/* Image Section */}
              <div className="w-full h-72 sm:h-80 overflow-hidden relative  border-b border-white/20 ">
                {(() => {
                  const mainImg = segment.images?.[0];
                  return mainImg ? (
                    <FadeUpImage
                      src={mainImg}
                      alt={segment.title}
                      className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-105"
                    />
                  ) : null;
                })()}

                <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 to-transparent mix-blend-multiply opacity-70" />
              </div>

              {/* Text Section */}
              <div className="flex flex-col grow p-8 items-center text-center bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-[15px] font-heading font-medium mb-6 tracking-widest uppercase text-black/90 group-hover:text-sand transition-colors border-b border-white/10 pb-4 w-full">
                  {segment.title}
                </h3>
                {/* <p className="text-white/60 text-sm leading-relaxed mb-10 flex-grow font-light">
                    {segment.description}
                  </p> */}

                {/* Action Button Segment */}
                <Link
                  to={`/gallery/${segment.title}`}
                  className="w-full mt-auto block"
                >
                  <button className="w-full py-4 border border-white/20 hover:border-sand hover:bg-sand hover:text-charcoal bg-black/20 text-black group-hover:text-sand font-heading uppercase tracking-widest text-xs font-medium transition-all duration-300 shadow-sm">
                    View Now!
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GalleryCard;
