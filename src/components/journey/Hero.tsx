
import FadeIn from "../shared/FadeIn";
import useBanners from "../../features/banners/hooks/useBanners";

const Hero = () => {
  const { data: bannersData } = useBanners();


  const journeyBanner = bannersData?.filter((banner: any) => banner.section === "journey");
  const journeyBannerImage = journeyBanner?.[0]?.image;

  return (
    <FadeIn direction="none" duration={1500}>
      <section className="relative h-[65vh] w-full overflow-hidden">
        <img
          src={journeyBannerImage}
          alt="Our Journey Hero Image"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
      </section>
    </FadeIn>
  );
};

export default Hero;
