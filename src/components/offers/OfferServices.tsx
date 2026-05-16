import OfferServiceCard from "./OfferServiceCard";
import SectionHeading from "./SectionHeading";
import FadeIn from "../shared/FadeIn";

const services = [
  {
    title: "Houses, Flats & Villa Projects",
    image: "/images/image1.webp",
    description:
      "Premium houses, flats, and villa projects designed with modern architecture, quality construction, and future-ready living spaces.",
  },
  {
    title: "Commercial & Heavy Projects",
    image: "/images/image2.webp",
    description:
      "Commercial complexes, IT parks, campuses, malls, and large-scale infrastructure developments built with precision and durability.",
  },
  {
    title: "Hotels & Resorts Projects",
    image: "/images/image3.webp",
    description:
      "Luxury hospitality developments crafted with elegance, comfort, premium amenities, and sustainable construction.",
  },
  {
    title: "Land Procurement & Plot Developments",
    image: "/images/image1.webp",
    description:
      "Strategic land procurement and plotted development solutions with infrastructure planning and investment value.",
  },
  {
    title: "Marketing & Sales",
    image: "/images/image2.webp",
    description:
      "Professional real estate marketing and sales solutions focused on customer engagement and brand visibility.",
  },
  {
    title: "Project & Facility Management",
    image: "/images/image3.webp",
    description:
      "Efficient project operations, maintenance, and management services ensuring long-term asset value and reliability.",
  },
];

const OffersServices = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeading
            title="Premium Development Services"
            subtitle="Professional project development, construction, infrastructure, and management solutions tailored for modern Kerala."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
              <OfferServiceCard {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersServices;

