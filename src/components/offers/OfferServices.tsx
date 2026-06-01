import OfferServiceCard from "./OfferServiceCard";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../shared/FadeIn";
import useOfferCategories from "../../features/offer/hooks/useOfferCategories";


const OffersServices = () => {

  const {data:categories} = useOfferCategories();

  const services = categories?.map((service: any) => service)

  return (
    <section className="py-10 px-3 md:px-0">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeading
            title="Premium Development Services"
            subtitle="Professional project development, construction, infrastructure, and management solutions tailored for modern Kerala."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services?.map((service: any) => (
            <OfferServiceCard {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersServices;
