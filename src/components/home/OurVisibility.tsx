import FadeIn from "../shared/FadeIn";

const OurVisibility = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div>
        <FadeIn delay={0.2}>
          <h1 className="text-center text-2xl font-bold text-black pb-8">
            Our Visibility
          </h1>
        </FadeIn>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <FadeIn delay={0.2}>
          <div>
            <img
              src="/images/image1.webp"
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
            <p>Residential</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div>
            <img
              src="/images/image2.webp"
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
            <p>Commercial</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div>
            <img
              src="/images/image2.webp"
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
            <p>Industrial</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.5}>
          <div>
            <img
              src="/images/image2.webp"
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
            <p>Infrastructure</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default OurVisibility;
