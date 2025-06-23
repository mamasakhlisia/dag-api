import { useState, useEffect } from "react";
import { fetchHomeContent } from "../api/homeApi";

const TestimonialMapSelection = () => {
  const [ratings, setRatings] = useState([]);
    useEffect(() =>{
      const loadContent = async () => {
        try {
          const data = await fetchHomeContent();
          setRatings(data.ratings || []); 
        } catch (error) {
          console.error("Failed to load about content:", error);
        }
      };
    
      loadContent();
    }, []);
  return (
    <section className="card-section">
      <div className="container">
        <div className="row g-4">
          {/* Testimonials Card */}
          <div className="col-lg-6">
            <div className="card-style testimonial-card">
              <h3 className="section-title">შეფასებები</h3>
              {ratings.map(item => (
                <div className="single-testimonial">
                  <div className="testimonial-author d-flex align-items-center gap-3 mt-3">
                  <div>
                      <h4 className="author-name mb-0">{item.title}</h4>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      {item.info}
                    </p>
                  </div>
                </div>
              ))}

            </div>
            
          </div>

          {/* Map Card */}
          <div className="col-lg-6">
            <div className="card-style map-card">
              <h3 className="section-title">ადგილმდებარეობა</h3>
              <iframe
                title="Training Center Map"
                src="https://maps.google.com/maps?q=41.804895138712396%2C%2044.77288312471491&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                allowFullScreen
                loading="lazy"
                style={{ width: "100%", height: "250px", border: 0 }}
              ></iframe>
              <div className="map-info mt-3">
                <p>
                  <i className="fas fa-map-marker-alt"></i> ქ.შარაშიძის ქუჩა N14
                  <br />
                  თბილისი
                </p>
                <p>
                  <i className="fas fa-phone"></i>(+995) 595 15 02 99
                </p>
                <p>
                  <i className="fas fa-envelope"></i>{" "}
                  info@dag.ge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialMapSelection;
