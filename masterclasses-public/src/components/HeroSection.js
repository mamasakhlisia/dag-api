const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-content">
              <h1 className="hero-title">
                Advance Your Dental Practice With Our Expert-Led Masterclasses
              </h1>
              <p className="hero-subtitle">
                Learn cutting-edge techniques from world-renowned dental
                professionals and take your skills to the next level.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="/masterclasses" className="btn btn-primary">
                  View Masterclasses
                </a>
                <a href="#registration" className="btn btn-outline">
                  Register Now
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
