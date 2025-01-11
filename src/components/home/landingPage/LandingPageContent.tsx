import Faqs from "./Faqs/Faqs";
import Features from "./Features";
import Heroarea from "./Heroarea";
import Portfolio from "./Portfolio";
import Process from "./process/Process";
import Services from "./Services";
import Testimonial from "./testimonial/Testimonial";

const LandingPageContent = () => {
  return (
    <div className="w-full flex flex-col overflow-hidden">
      <Heroarea />
      <Portfolio />
      <Features />
      <Services />
      <Testimonial />
      <Process />
      <Faqs />
    </div>
  );
};

export default LandingPageContent;
