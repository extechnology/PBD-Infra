
const Hero = () => {
  // Placeholder video URL - Replace with actual local video path if available
  const videoUrl = "https://www.pexels.com/download/video/34430635/";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover "
          poster="https://pixabay.com/images/download/x-6910973_1920.jpg"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlays */}
        {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black/90"></div> */}
      </div>

      {/* Content */}
     

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
