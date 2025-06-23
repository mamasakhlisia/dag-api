import { useState, useEffect } from "react";
import { fetchHomeContent } from "../api/homeApi";

const FeatureSection = () => {
  const [cards, setCards] = useState([]);

  
  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await fetchHomeContent();
        setCards(data.cards || []); // Fallback to empty array if no data
      } catch (error) {
        console.error("Failed to load about content:", error);
        setCards([]); // Set empty array on error
      }
    };
    
    loadContent();
  }, []);
  return (
    <section className="features-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="section-title center">
              რატომ ჩვენი მასტერკლასები?
            </h2>
          </div>
        </div>
        <div className="row">
          {cards.map(item => (
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <h3 className="feature-title">{item.title}</h3>
                <p>
                  {item.info}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
