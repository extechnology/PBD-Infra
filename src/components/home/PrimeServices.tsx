import FadeIn from "../shared/FadeIn";

const PrimeServices = () => {
  return (
    <div className="py-10 text-white bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <FadeIn delay={0.2}>
          <div>
            <img
              src="/images/image3.webp"
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
          </div>
        </FadeIn>
        <div className="content-center">
          <FadeIn delay={0.2}>
            <h1>Our Prime Services</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              We offer comprehensive construction and real estate solutions
              backed by over 20 years of industry expertise. Our prime services
              include residential construction, commercial development,
              industrial infrastructure projects, project management,
              contracting services, and real estate development. We focus on
              delivering high-quality, durable, and future-ready spaces with
              professional execution, modern engineering practices, and timely
              project completion{" "}
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default PrimeServices;
