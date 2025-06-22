import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/single.css";
import FooterSelection from "./Footer.js";

const MasterclassDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [masterclass, setMasterclass] = useState(null); // Changed from [] to null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getDoctorImageUrl = (filename) => {
    if (!filename) return "https://via.placeholder.com/150";
    if (filename.startsWith('http')) return filename;
    return `http://localhost:8080/api/doctor/image/${filename}`;
  };



  const getTemplateImageUrl = (filename) => {
    if (!filename) return "https://via.placeholder.com/600x400";
    if (filename.startsWith('http')) return filename;
    return `http://localhost:8080/api/masterclass/templates/image/${filename}`;
  };


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleString('default', { month: 'short' }), 
      day: date.getDate(), // 25
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8080/api/masterclass/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setMasterclass(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching masterclasses:", error);
        setError(error.message);
        setMasterclass(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // Added id as dependency

  if (loading) {
    return (
      <div className="single">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading masterclass details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="single">
        <div className="error-container">
          <p>Error loading masterclass: {error}</p>
          <button onClick={() => navigate("/masterclasses")}>
            Back to Masterclasses
          </button>
        </div>
      </div>
    );
  }

  if (!masterclass) {
    return (
      <div className="single">
        <div className="error-container">
          <p>No masterclass data available</p>
          <button onClick={() => navigate("/masterclasses")}>
            Back to Masterclasses
          </button>
        </div>
      </div>
    );
  }
  const { month, day, time } = formatDate(masterclass.date);

  return (
    <div className="single">
      {/* Simple Header */}
      <header className="simple-header">
        <div className="container">
          <button
            className="back-link"
            onClick={() => navigate("/masterclasses")}
          >
            <i className="fas fa-arrow-left"></i> Back to Masterclasses
          </button>
        </div>
      </header>

      {/* Masterclass Hero */}
      <section className="masterclass-hero">
        <div className="container">
          <div className="hero-content">
            <h1>{masterclass.template.title}</h1>
            <p className="subtitle">
              {masterclass.template.shortDescription}
            </p>
            <div class="details-grid">
                    <div class="detail-item">
                        <i class="far fa-calendar-alt"></i>
                        <span>{month} {day}</span>
                    </div>
                    <div class="detail-item">
                        <i class="far fa-clock"></i>
                        <span>{time}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Tbilisi, GEO</span>
                    </div>
                </div>
          </div>
        </div>
      </section>

      {/* Lecturer Profile */}
      <section className="lecturer-profile">
        <div className="container">
          <div className="lecturer-card">
            <div className="lecturer-photo">
              <img
                src={getDoctorImageUrl(masterclass.template.lecturer?.imagePath)}
              />
            </div>
            <div className="lecturer-info">
              <h2>თქვენი ინსტრუქტორი</h2>
              <h3>{masterclass.template.lecturer.firstName + masterclass.template.lecturer.lastName}</h3>
              <p className="specialty">{masterclass.template.lecturer.specialty}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2>გალერეა</h2>
          <p className="section-subtitle">
            ფოტო მასალა ამ მასტერკლასის შესახებ
          </p>
          <div className="gallery-grid">
            {masterclass.template.imageUrls.map((img, idx) => (
              <div key={idx} className="gallery-item gallery-item-large">
                <img
                  src={getTemplateImageUrl(img)}
                  alt={img}
                />
                <div className="gallery-caption">Caption {idx + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Format */}
      <section className="masterclass-content">
        <div className="container">
          <div className="content-box">
            <h2>მასტერკლასის შესახებ</h2>
            <p>
              {masterclass.template.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-card">
            <h2>შემოგვიერთდი</h2>
            <div className="price">${masterclass.template.price}</div>
            <p className="price-note">ერთჯერადი გადასახადი მთლიანი მასტერკლასისთვის</p>
            <a href={masterclass.signupLink} className="register-btn">
              დარეგისტრირდი
            </a>
          </div>
        </div>
      </section>
      <FooterSelection />
    </div>
  );
};

export default MasterclassDetail;