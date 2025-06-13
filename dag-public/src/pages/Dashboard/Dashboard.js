import React from 'react';
import './styles.css';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dental Excellence Masterclasses</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="https://via.placeholder.com/40x40/2E8B57/FFFFFF?text=DE" alt="Logo" />
            <span>Dental</span>Excellence
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/masterclasses">Masterclasses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <a href="#registration" className="btn btn-primary ms-lg-4">Register Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content">
                <h1 className="hero-title">Advance Your Dental Practice With Our Expert-Led Masterclasses</h1>
                <p className="hero-subtitle">Learn cutting-edge techniques from world-renowned dental professionals and take your skills to the next level.</p>
                <div className="d-flex flex-wrap gap-3">
                  <a href="#masterclasses" className="btn btn-primary">View Masterclasses</a>
                  <a href="#registration" className="btn btn-outline">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Dental Masterclass" className="img-fluid about-img" />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">About Our Masterclasses</h2>
              <p>Dental Excellence Masterclasses are intensive, hands-on training programs designed for dental professionals who want to refine their skills and stay at the forefront of modern dentistry.</p>
              <p>Our programs are led by internationally recognized instructors who bring decades of clinical experience and teaching expertise to each session. We focus on practical, immediately applicable techniques that you can implement in your practice right away.</p>
              <p>With small class sizes and state-of-the-art facilities, we ensure personalized attention and optimal learning conditions for all participants.</p>
              <div className="mt-4">
                <a href="#masterclasses" className="btn btn-primary">Explore Programs</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h2 className="section-title center">Why Choose Our Masterclasses</h2>
              <p className="lead">What makes our programs stand out from the rest</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-user-md"></i>
                </div>
                <h3 className="feature-title">World-Class Instructors</h3>
                <p>Learn from internationally recognized experts with decades of clinical and teaching experience.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-laptop-medical"></i>
                </div>
                <h3 className="feature-title">Hands-On Training</h3>
                <p>Practical sessions with live demonstrations and supervised practice on state-of-the-art equipment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3 className="feature-title">CE Credits</h3>
                <p>Earn continuing education credits recognized by dental associations worldwide.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="feature-title">Small Class Sizes</h3>
                <p>Limited enrollment ensures personalized attention and optimal learning conditions.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-clinic-medical"></i>
                </div>
                <h3 className="feature-title">Modern Facilities</h3>
                <p>Train in our fully equipped simulation labs with the latest dental technology.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-network-wired"></i>
                </div>
                <h3 className="feature-title">Professional Network</h3>
                <p>Connect with peers and build relationships with dental professionals from around the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="registration" className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="cta-title">Ready to Transform Your Practice?</h2>
              <p className="cta-text">Join hundreds of dental professionals who have elevated their skills through our masterclasses. Spaces are limited to ensure quality instruction.</p>
              <a href="#" className="btn btn-light btn-lg px-5">Register Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Map Section */}
      <section className="card-section">
        <div className="container">
          <div className="row g-4">
            {/* Testimonials Card */}
            <div className="col-lg-6">
              <div className="card-style testimonial-card">
                <h3 className="section-title">What Our Alumni Say</h3>
                <div className="testimonial-content">
                  <p>The Advanced Implantology masterclass completely changed my approach to implant placement. The hands-on training was exceptional, and I've already implemented several techniques that have improved my success rates.</p>
                </div>
                <div className="testimonial-author">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. James Wilson" />
                  <div>
                    <h4 className="author-name">Dr. James Wilson</h4>
                    <p className="author-title">General Dentist, Miami</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Card */}
            <div className="col-lg-6">
              <div className="card-style map-card">
                <h3 className="section-title">Visit Our Training Center</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.665575273758!2d-71.08408348454403!3d42.34997997918783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a0e8c5535ef%3A0xa3a5e1f511238472!2s123%20Dental%20Ave%2C%20Boston%2C%20MA%2002115%2C%20USA!5e0!3m2!1sen!2s!4v1623861234567!5m2!1sen!2s" allowFullScreen="" loading="lazy"></iframe>
                <div className="map-info">
                  <p><i className="fas fa-map-marker-alt"></i> 123 Dental Avenue, Suite 400<br />Boston, MA 02115</p>
                  <p><i className="fas fa-phone"></i> +1 (617) 555-0123</p>
                  <p><i className="fas fa-envelope"></i> education@dentalexcellence.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="footer-title">Dental Excellence</h4>
              <p>Providing world-class dental education since 2010. Our masterclasses are designed to help dental professionals achieve clinical excellence.</p>
              <div className="social-links mt-4">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
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
                <p><i className="fas fa-map-marker-alt"></i> 123 Dental Avenue, Suite 400 Boston, MA 02115</p>
                <p><i className="fas fa-phone"></i> +1 (617) 555-0123</p>
                <p><i className="fas fa-envelope"></i> education@dentalexcellence.com</p>
                <p><i className="fas fa-clock"></i> Mon-Fri: 9AM - 5PM EST</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-title">Newsletter</h4>
              <p>Subscribe to receive updates on upcoming masterclasses and dental education news.</p>
              <form className="mt-3">
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" />
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <p>&copy; 2023 Dental Excellence Masterclasses. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Dashboard;