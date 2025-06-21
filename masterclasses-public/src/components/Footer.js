const FooterSelection = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="footer-title">Dental Excellence</h4>
            <p>
              Providing world-class dental education since 2010. Our
              masterclasses are designed to help dental professionals achieve
              clinical excellence.
            </p>
            <div className="social-links mt-4">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <a href="#">Home</a>
              <a href="#masterclasses">Masterclasses</a>
              <a href="#about">About</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <p>
                <i className="fas fa-map-marker-alt"></i> 123 Dental Avenue,
                Suite 400 Boston, MA 02115
              </p>
              <p>
                <i className="fas fa-phone"></i> +1 (617) 555-0123
              </p>
              <p>
                <i className="fas fa-envelope"></i>{" "}
                education@dentalexcellence.com
              </p>
              <p>
                <i className="fas fa-clock"></i> Mon-Fri: 9AM - 5PM EST
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">Newsletter</h4>
            <p>
              Subscribe to receive updates on upcoming masterclasses and dental
              education news.
            </p>
            <form className="mt-3">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <p>
              &copy; 2023 Dental Excellence Masterclasses. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSelection;
