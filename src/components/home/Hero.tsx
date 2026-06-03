import { useState } from "react";
import HeroSkeleton from "../feedback/skeletons/home/HeroSkeleton";
import useHeroVideo from "../../features/home/hero/hooks/useHeroVideo";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { data: heroVideoData, isLoading: apiLoading } = useHeroVideo();

  const videoUrl = heroVideoData?.[0]?.video;

  console.log(videoUrl);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {(apiLoading || isLoading) && <HeroSkeleton />}

      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {videoUrl && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            onLoadedData={() => {
              console.log("VIDEO LOADED");
              setIsLoading(false);
            }}
            onError={(e) => {
              console.log("VIDEO ERROR", e);
              setIsLoading(false);
            }}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  );
};

export default Hero;
