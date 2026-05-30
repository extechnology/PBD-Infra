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
        <div className="relative z-20 mt-12 mb-12 flex items-center justify-start md:mt-20 md:mb-16">
          <div className="flex border border-black/40 bg-white">
            <button
              onClick={() => setActiveTab("completed")}
              className={`relative px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] transition-all duration-300 sm:px-8 sm:text-sm ${
                activeTab === "completed"
                  ? "bg-black text-white"
                  : "text-black/50 hover:bg-black/5 hover:text-black"
              }`}
            >
              <span className="relative z-10">Completed Projects</span>
            </button>

            <button
              onClick={() => setActiveTab("upcoming")}
              className={`relative border-l border-black/10 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] transition-all duration-300 sm:px-8 sm:text-sm ${
                activeTab === "upcoming"
                  ? "bg-black text-white"
                  : "text-black/50 hover:bg-black/5 hover:text-black"
              }`}
            >
              <span className="relative z-10">Upcoming Projects</span>
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
