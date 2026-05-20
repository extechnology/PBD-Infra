import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import galleryData from "../../constants/galleryData";
import FadeUpImage from "../ui/ImageFadeUp";

const GalleryCard = () => {
  const [currentPage] = useState(1);

  // Scroll to top of gallery section when page changes
  useEffect(() => {
    // optional: add smooth scroll logic if needed
  }, [currentPage]);

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-3 relative z-10">
      {galleryData?.map((segment, index) => (
        <div
          key={index}
          className="group flex flex-col h-full bg-white border border-white/20 rounded-md  transition-all duration-300 shadow-soft overflow-hidden"
        >
          {/* Image Section */}
          <div className="w-full h-72 sm:h-80 overflow-hidden relative border-b border-white/20">
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

            {/* Action Button Segment */}
            <Link
              to={`/gallery/${segment.title}`}
              className="w-full mt-auto block"
            >
              <button className="w-full py-4 border border-white/20  hover:text-charcoal bg-gold-500 text-white group-hover:text-charcoal font-heading uppercase tracking-widest text-xs font-medium transition-all duration-300 shadow-sm cursor-pointer">
                View Now!
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryCard;
