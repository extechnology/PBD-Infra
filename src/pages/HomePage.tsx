import Hero from "../components/home/Hero";
import PrimeServices from "../components/home/PrimeServices";
import OurGoal from "../components/home/OurGoal";
import OurCommitment from "../components/home/OurCommitment";
import OurVisibility from "../components/home/OurVisibility";

const HomePage = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <OurCommitment />
      </div>
      <div>
        <OurGoal />
      </div>
      <div>
        <OurVisibility />
      </div>
      <div>
        <PrimeServices />
      </div>
    </div>
  );
};

export default HomePage;
