const TestimonialMapSelection = () => {
  return (
    <section className="card-section">
      <div className="container">
        <div className="row g-4">
          {/* Testimonials Card */}
          <div className="col-lg-6">
            <div className="card-style testimonial-card">
              <h3 className="section-title">What Our Alumni Say</h3>
              <div className="testimonial-content">
                <p>
                  The Advanced Implantology masterclass completely changed my
                  approach to implant placement. The hands-on training was
                  exceptional, and I've already implemented several techniques
                  that have improved my success rates.
                </p>
              </div>
              <div className="testimonial-author d-flex align-items-center gap-3 mt-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Dr. James Wilson"
                  style={{ width: "60px", borderRadius: "50%" }}
                />
                <div>
                  <h4 className="author-name mb-0">Dr. James Wilson</h4>
                  <p className="author-title">General Dentist, Miami</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="col-lg-6">
            <div className="card-style map-card">
              <h3 className="section-title">Visit Our Training Center</h3>
              <iframe
                title="Training Center Map"
                src="https://maps.google.com/maps?q=41.804895138712396%2C%2044.77288312471491&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                allowFullScreen
                loading="lazy"
                style={{ width: "100%", height: "250px", border: 0 }}
              ></iframe>
              <div className="map-info mt-3">
                <p>
                  <i className="fas fa-map-marker-alt"></i> 123 Dental Avenue,
                  Suite 400
                  <br />
                  Boston, MA 02115
                </p>
                <p>
                  <i className="fas fa-phone"></i> +1 (617) 555-0123
                </p>
                <p>
                  <i className="fas fa-envelope"></i>{" "}
                  education@dentalexcellence.com
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
