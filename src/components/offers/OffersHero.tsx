import FadeIn from "../shared/FadeIn";

const OffersHero = () => {
  return (
    <FadeIn direction="none" duration={1500}>
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/image2.webp"
            alt="Offers Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Gold Glow */}
        <div className="absolute w-[500px] h-[500px] bg-gold-500/10 blur-[140px] rounded-full top-20 left-20" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            We <span className="text-gold-500">Offer</span>
          </h1>

          {/* <p className="max-w-3xl mx-auto text-zinc-300 text-lg leading-8">
          Delivering high-quality residential, commercial, and industrial
          developments with modern engineering practices, strategic planning,
          and future-ready execution.
        </p> */}

          {/* <button className="mt-10 px-8 py-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black transition-all duration-500">
          Explore Services
        </button> */}
        </div>
      </section>
    </FadeIn>
  );
};

export default OffersHero;

