import FadeIn from "../shared/FadeIn";

const Highlights = () => {
  return (
    <FadeIn>
      <section className="relative py-24 bg-black overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold-500/5 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* Small Label */}
              <p className="uppercase tracking-[5px] text-gold-500 text-sm mb-5">
                Highlights of PBD
              </p>

              {/* Heading */}
              <h2 className="text-2xl  xl:text-4xl font-medium leading-tight text-white mb-8">
                Engineering Growth with
                <span className="block text-gold-500">
                  Experience & Precision
                </span>
              </h2>

              {/* Description */}
              <p className="text-zinc-400 text-md leading-9 mb-10 max-w-2xl">
                Over the years, PBD has successfully completed around
                <span className="text-gold-500 font-semibold"> 200+ </span>
                residential, commercial, and industrial projects across Kerala,
                earning the trust of nearly
                <span className="text-gold-500 font-semibold"> 3000+ </span>
                satisfied customers.
                <br />
                <br />
                With a strong commitment to quality construction, timely
                delivery, and customer satisfaction, PBD continues to build
                lasting relationships and deliver developments that create
                long-term value, durability, and reliability.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-10">
                <div className="border border-zinc-800 bg-zinc-950 px-8 py-6 min-w-[180px]">
                  <h3 className="text-4xl font-bold text-gold-500 mb-2">200+</h3>
                  <p className="text-zinc-400 uppercase tracking-wide text-sm">
                    Projects Completed
                  </p>
                </div>

                <div className="border border-zinc-800 bg-zinc-950 px-8 py-6 min-w-[180px]">
                  <h3 className="text-4xl font-bold text-gold-500 mb-2">
                    3000+
                  </h3>
                  <p className="text-zinc-400 uppercase tracking-wide text-sm">
                    Happy Customers
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="group relative overflow-hidden border border-gold-500 px-8 py-4 text-gold-500 hover:text-black transition-all duration-500">
                <span className="relative z-10 flex items-center gap-3">
                  Explore Now!
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>

                {/* Hover Fill */}
                <div className="absolute inset-0 bg-gold-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              {/* Border Frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border border-gold-500/30" />

              {/* Main Image */}
              <div className="relative overflow-hidden">
                <img
                  src="/images/image3.webp"
                  alt="PBD Highlights"
                  className="w-full h-[650px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md border border-gold-500/30 px-8 py-5">
                <h3 className="text-gold-500 text-3xl font-bold mb-1">20+</h3>

                <p className="text-zinc-300 uppercase tracking-[3px] text-xs">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Highlights;

