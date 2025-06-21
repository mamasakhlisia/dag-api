const FeatureSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="section-title center">
              რატომ ჩვენი მასტერკლასები?
            </h2>
            <p className="lead">
              რა ქმნის ჩვენს პროგრამებს განსხვავებულს
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <h3 className="feature-title">მსოფლიო კლასის ინსტრუქტორები</h3>
              <p>
                ისწავლე მსოფლიოში აღიარებული ექსპერტებისგან. გაიზიარე მათი ათწლეულების განმავლობაში დაგროვებული ცოდნა
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-laptop-medical"></i>
              </div>
              <h3 className="feature-title">პრაქტიკული ტრენინგები</h3>
              <p>
                პრაქტიკული ტრენინგები ცოცხალი დემონსტრაციებით და დავალებები უახლესი ტექნოლოგიებით
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-clinic-medical"></i>
              </div>
              <h3 className="feature-title">თანამედროვე აპარატურა</h3>
              <p>
                ისწავლე საუკეთესოდ ეკიპირებული აპარატურით და უახლესი ტექნოლოგიებით
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3 className="feature-title">პროფესიონალური ქსელი</h3>
              <p>
                დაუკავშირდი კოლეგებს და გაიცანი ახალი კოლეგები, ორთოდონტიის პროფესიონალები
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
