import UpcomingHero from "../components/upcoming/UpcomingHero";
import OverView from "../components/upcoming/OverView";
import Specifications from "../components/upcoming/Specifications";
import Monument from "../components/upcoming/Monument";
import MapAndGallery from "../components/upcoming/MapAndGallery";
import Parallax from "../components/upcoming/Parallax";

const UpComingProjects = () => {
  return (
    <div>
      <div>
        <UpcomingHero />
      </div>
      <div className="bg-white">
        <OverView />
        <Monument />
      </div>
      <MapAndGallery />
      <Specifications />
      <Parallax />
    </div>
  );
};

export default UpComingProjects;
