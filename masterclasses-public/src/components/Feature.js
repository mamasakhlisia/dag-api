const FeatureSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="section-title center">
              Why Choose Our Masterclasses
            </h2>
            <p className="lead">
              What makes our programs stand out from the rest
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <h3 className="feature-title">World-Class Instructors</h3>
              <p>
                Learn from internationally recognized experts with decades of
                clinical and teaching experience.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-laptop-medical"></i>
              </div>
              <h3 className="feature-title">Hands-On Training</h3>
              <p>
                Practical sessions with live demonstrations and supervised
                practice on state-of-the-art equipment.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="feature-title">CE Credits</h3>
              <p>
                Earn continuing education credits recognized by dental
                associations worldwide.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="feature-title">Small Class Sizes</h3>
              <p>
                Limited enrollment ensures personalized attention and optimal
                learning conditions.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-clinic-medical"></i>
              </div>
              <h3 className="feature-title">Modern Facilities</h3>
              <p>
                Train in our fully equipped simulation labs with the latest
                dental technology.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3 className="feature-title">Professional Network</h3>
              <p>
                Connect with peers and build relationships with dental
                professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
