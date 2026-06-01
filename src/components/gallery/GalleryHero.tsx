import useBanners from "../../features/banners/hooks/useBanners";


const GalleryHero = () => {
  const { data: bannersData } = useBanners();

  const journeyBanner = bannersData?.filter((banner: any) => banner.section === "projects");
  const journeyBannerImage = journeyBanner?.[0]?.image;

  return (
    <section>
      <div className="relative">
        <img src={journeyBannerImage} alt="" className="w-full h-[65vh]" />
      </div>
    </section>
  );
};

export default GalleryHero;