const UpcomingHero = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/image3.webp"
          alt="Upcoming Projects"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-medium text-white leading-tight">
            Future Projects
          </h1>
          <p className="text-gray-300 text-lg mt-2">
            Discover the next generation of infrastructure and real estate
            developments by PBD.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingHero;
