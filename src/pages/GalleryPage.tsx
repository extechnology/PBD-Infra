import GalleryHero from "../components/gallery/GalleryHero";
import GalleryCard from "../components/gallery/GalleryCard";


const GalleryPage = () => {

  return (
    <div className=""> 
      <div>
        <GalleryHero />
      </div>
      <div className="max-w-7xl mx-auto">
        <GalleryCard />
      </div>
    </div>
  );
};

export default GalleryPage;
