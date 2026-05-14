import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

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
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <div className="space-y-8 max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gold-500/10 backdrop-blur-md border border-gold-500/30 px-4 py-2 rounded-full text-gold-400 text-xs sm:text-sm font-bold uppercase tracking-widest animate-fade-in-down">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            <span>Building Tomorrow's Infrastructure</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-tight tracking-tighter animate-fade-in-up">
            Excellence in <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gold-400 via-gold-200 to-white">
              Every Dimension
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed opacity-90 animate-fade-in-up delay-200">
            Leading the way in sustainable infrastructure development and
            innovative construction solutions for a modern world.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 animate-fade-in-up delay-300">
            <Link
              to="/projects"
              className="group bg-gold-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-400 transition-all duration-300 flex items-center space-x-2 shadow-2xl shadow-gold-500/20 hover:shadow-gold-500/40 border border-transparent hover:border-gold-300"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="group bg-black/50 backdrop-blur-md text-gold-500 border border-gold-500/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-500 hover:text-black transition-all duration-300 flex items-center space-x-2 shadow-xl shadow-black/20"
            >
              <Play className="w-4 h-4 fill-current mr-1" />
              <span>Watch Our Story</span>
            </Link>
          </div>
        </div>
      </div>

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
