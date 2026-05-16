import Hero from "../components/journey/Hero";
import AboutUs from "../components/journey/AboutUs";
import OurJourney from "../components/journey/OurJourney";
import KeySteps from "../components/journey/KeySteps";
import HighLights from "../components/journey/HighLights";
import ValueGrowthSection from "../components/journey/ValueGrowthSection";

const OurJourneyPage = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <OurJourney />
      </div>
      <div>
        <ValueGrowthSection />
      </div>
      <div>
        <KeySteps />
      </div>
      <div>
        <HighLights />
      </div>
    </>
  );
};

export default OurJourneyPage;
