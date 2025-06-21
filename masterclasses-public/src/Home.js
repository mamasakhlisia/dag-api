import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import FeatureSection from "./components/Feature";
import CTASecton from "./components/CTA";
import FooterSelection from "./components/Footer";
import TestimonialMapSelection from "./components/TestimonialMap";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <CTASecton />
      <TestimonialMapSelection />
      <FooterSelection />
    </div>
  );
};

export default Home;
