import { useState } from "react";
import GalleryHero from "../components/gallery/GalleryHero";
import GalleryCard from "../components/gallery/GalleryCard";
import UpComing from "../components/gallery/UpComing";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState<"completed" | "upcoming">("completed");

  return (
    <div className="bg-white min-h-screen pb-16 md:pb-24 text-black font-body selection:bg-gold-500 selection:text-black"> 
      <div>
        <GalleryHero />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-0 relative overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96  bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-0 -ml-40 -mb-40 w-96 h-96  bg-white/5 blur-3xl pointer-events-none" />

        {/* Tab Switcher */}
        <div className="flex justify-start items-center mt-12 md:mt-20 mb-12 md:mb-16 relative z-20">
          <div className="inline-flex p-1 bg-white/5 border border-white/10  backdrop-blur-md">
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-6 py-2.5 sm:px-8 sm:py-3  text-xs sm:text-sm font-heading uppercase tracking-widest font-semibold transition-all duration-500 cursor-pointer ${
                activeTab === "completed"
                  ? "bg-gold-500 text-charcoal shadow-lg shadow-sand/20"
                  : "text-black/60 hover:text-black hover:bg-white/5"
              }`}
            >
              Completed Projects
            </button>
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-2.5 sm:px-8 sm:py-3  text-xs sm:text-sm font-heading uppercase tracking-widest font-semibold transition-all duration-500 cursor-pointer ${
                activeTab === "upcoming"
                  ? "bg-gold-500 text-charcoal shadow-lg shadow-sand/20"
                  : "text-black/60 hover:text-black hover:bg-white/5"
              }`}
            >
              Upcoming Projects
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative z-10">
          {activeTab === "completed" ? <GalleryCard /> : <UpComing />}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
