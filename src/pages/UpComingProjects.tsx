import UpcomingHero from "../components/upcoming/UpcomingHero";
import OverView from "../components/upcoming/OverView";
import Specifications from "../components/upcoming/Specifications";
import Monument from "../components/upcoming/Monument";
// import MapAndGallery from "../components/upcoming/MapAndGallery";
import Parallax from "../components/upcoming/Parallax";
import { useLocation } from "react-router-dom";

const UpComingProjects = () => {
  const location = useLocation();

  const upcomingProjects = location.state?.project;

  console.log(upcomingProjects, "upcomingProjects");

  const specifications =
    upcomingProjects?.flatMap((item) => item?.specifications || []) || [];

  const specificationImages =
    upcomingProjects?.flatMap((item) => item?.specification_images || []) || [];

  const overView =
    upcomingProjects?.flatMap((item) => item?.overview || []) || [];

  const overviewImages =
    upcomingProjects?.flatMap((item) => item?.images || []) || [];

  const structures =
    upcomingProjects?.flatMap((item) => item?.structure || []) || [];

  return (
    <div>
      <UpcomingHero />

      <div className="bg-white">
        <OverView overView={overView} overviewImages={overviewImages} />
        <Monument structures={structures} />
      </div>

      {/* <MapAndGallery /> */}

      <Specifications
        specifications={specifications}
        specificationImages={specificationImages}
      />

      <Parallax />
    </div>
  );
};

export default UpComingProjects;
