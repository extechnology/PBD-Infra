
import FadeIn from "../shared/FadeIn";

const Hero = () => {
  return (
    <FadeIn direction="none" duration={1500}>
      <section className="relative h-[65vh] w-full overflow-hidden">
        <img
          src="/images/image1.webp"
          alt="Our Journey Hero Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </section>
    </FadeIn>
  );
};

export default Hero;