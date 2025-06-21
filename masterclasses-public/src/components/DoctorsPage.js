import "../styles/doctor.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import FooterSelection from "./Footer";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Prosthodontics Specialist",
    bio: "With over 15 years of experience in cosmetic dentistry and full-mouth rehabilitation.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
];

const DoctorsPage = () => {
  return (
    <>
      <Navbar />
      {/* Doctors Hero Section */}
      <div class="doctors-page-only">
        <section className="doctors-hero">
            <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto text-center">
                <h1 className="doctors-hero-title">
                    Our Esteemed Faculty Members
                </h1>
                <p className="doctors-hero-subtitle">
                    Learn from world-renowned dental professionals who bring decades
                    of clinical expertise and teaching excellence to our
                    masterclasses.
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* Doctors Grid Section */}
        <section id="doctors-grid" className="doctors-section">
            <div className="container">
            <h2 className="section-title">Meet Our Expert Faculty</h2>
            <div className="row">
                {doctors.map((doc, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                    <div className="doctor-card">
                    <img src={doc.img} alt={doc.name} className="doctor-img" />
                    <div className="doctor-body">
                        <h3 className="doctor-name">{doc.name}</h3>
                        <p className="doctor-specialty">{doc.specialty}</p>
                        <p className="doctor-bio">{doc.bio}</p>
                        <div className="doctor-social">
                        <a href={doc.social.linkedin}>
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href={doc.social.twitter}>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={doc.social.email}>
                            <i className="fas fa-envelope"></i>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
      </div>
      <FooterSelection />
    </>
  );
};

export default DoctorsPage;