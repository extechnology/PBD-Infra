import UpcomingHero from "../components/upcoming/UpcomingHero";
import OverView from "../components/upcoming/OverView";
import Specifications from "../components/upcoming/Specifications";
import Monument from "../components/upcoming/Monument";
// import MapAndGallery from "../components/upcoming/MapAndGallery";
import Parallax from "../components/upcoming/Parallax";
import { useLocation } from "react-router-dom";

interface UpcomingProjects {
  name: string;
  title: string;
  images: string;
  location: string;
  specifications: string;
  specification_images: string;
  structure: string;
  overview: string;
}

const UpComingProjects = () => {
  const location = useLocation();

  const upcomingProjects = location.state?.project;

  // console.log(upcomingProjects, "upcomingProjects");

  const specifications =
    upcomingProjects?.flatMap(
      (item: UpcomingProjects) => item?.specifications || [],
    ) || [];

  const specificationImages =
    upcomingProjects?.flatMap(
      (item: UpcomingProjects) => item?.specification_images || [],
    ) || [];

  const overView =
    upcomingProjects?.flatMap(
      (item: UpcomingProjects) => item?.overview || [],
    ) || [];

  const overviewImages =
    upcomingProjects?.flatMap((item: UpcomingProjects) => item?.images || []) ||
    [];

  const structures =
    upcomingProjects?.flatMap(
      (item: UpcomingProjects) => item?.structure || [],
    ) || [];

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
