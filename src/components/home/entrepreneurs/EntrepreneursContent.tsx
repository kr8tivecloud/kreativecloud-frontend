import Features from "./Features";
import Heroarea from "./Heroarea";
import PastFeatures from "./PastFeatures";

const EntrepreneursContent = () => {
  return (
    <div className="w-full flex flex-col overflow-hidden">
      <Heroarea />
      <Features />
      <PastFeatures />
    </div>
  );
};

export default EntrepreneursContent;
