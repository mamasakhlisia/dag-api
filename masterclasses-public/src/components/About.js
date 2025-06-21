import { useNavigate, useLocation } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleExploreClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/masterclasses") {
      navigate("/masterclasses");
    } else {
      // If already on /masterclasses, you can scroll if needed (optional)
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
            <h2 className="section-title">About Our Masterclasses</h2>
            <p>
              Dental Excellence Masterclasses are intensive, hands-on training
              programs designed for dental professionals who want to refine
              their skills and stay at the forefront of modern dentistry.
            </p>
            <p>
              Our programs are led by internationally recognized instructors who
              bring decades of clinical experience and teaching expertise to
              each session. We focus on practical, immediately applicable
              techniques that you can implement in your practice right away.
            </p>
            <p>
              With small class sizes and state-of-the-art facilities, we ensure
              personalized attention and optimal learning conditions for all
              participants.
            </p>
            <div className="mt-4">
              <button onClick={handleExploreClick} className="btn btn-primary">
                Explore Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
