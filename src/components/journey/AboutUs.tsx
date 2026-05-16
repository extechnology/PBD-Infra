import FadeIn from "../shared/FadeIn";
import CurtainReveal from "../ui/ImageReveal";

const AboutUs = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-20">
        <FadeIn delay={0.2}>
          <div>
            <CurtainReveal src="/images/image1.webp" alt="no image" className="" />
          </div>
        </FadeIn>
        <div className="content-center">
          <FadeIn delay={0.4}>
            <h1 className="text-2xl font-medium text-gold-500">About Us</h1>
            <p className="pt-3 font-medium">
              Delivering Landmark Projects with Precision & Care
            </p>
            <p className="py-3 text-sm text-justify">
              PBD is one of Calicut’s reputed construction and development
              companies, delivering high-quality residential, commercial, and
              industrial projects for over two decades. With 200+ completed
              projects and hundreds of happy clients, we are known for reliable
              execution, modern construction practices, timely completion, and
              customer-focused service. Our experienced engineering team,
              skilled professionals, and advanced equipment enable us to handle
              projects of every scale with precision and excellence.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
