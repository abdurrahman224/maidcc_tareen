import Faq from "../../../Components/common/Faq";
import HowItWorks from "../../../Components/common/HowItWorks";
import MapSection from "../../../Components/common/MapSection";
import Review from "../../../Components/common/Review";
import About from "./components/About";
import Category from "./components/Category";
import Hero from "./components/Hero";

const HomeView = () => {
  return (
    <div>
      <Hero />
      <Category />
      <HowItWorks />
      <About />
      <Review />
      <Faq />
      <MapSection />
    </div>
  );
};

export default HomeView;
