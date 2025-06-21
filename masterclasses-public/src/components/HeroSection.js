import { useEffect, useState } from "react";
import { fetchHomeContent } from "../api/homeApi";

const HeroSection = () => {
const [header, setHeader] = useState([]);
const [paragraph, setParagraph] = useState([]);


useEffect(() =>{
  const loadContent = async () => {
    try {
      const data = await fetchHomeContent();
      console.log(data);
      setHeader(data.navHeader || []); 
      setParagraph(data.navParagraph || []);
    } catch (error) {
      console.error("Failed to load about content:", error);
    }
  };

  loadContent();
}, []);
 
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-content">
              <h1 className="hero-title">
                {header}
              </h1>
              <p className="hero-subtitle">
                {paragraph}
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="/masterclasses" className="btn btn-primary">
                  ყველა მასტერკლასი
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
