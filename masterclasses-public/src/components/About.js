import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchHomeContent } from "../api/homeApi";

const AboutSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [aboutContent, setAboutContent] = useState([]);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await fetchHomeContent();
        setAboutContent(data.about || []); // Fallback to empty array if no data
      } catch (error) {
        console.error("Failed to load about content:", error);
        setAboutContent([]); // Set empty array on error
      }
    };
    
    loadContent();
  }, []);

  const handleExploreClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/masterclasses") {
      navigate("/masterclasses");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Dental Masterclass"
              className="img-fluid about-img"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="section-title">ჩვენს შესახებ</h2>
            
            {aboutContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="mt-4">
              <button onClick={handleExploreClick} className="btn btn-primary">
                გაეცანი პროგრამებს
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;