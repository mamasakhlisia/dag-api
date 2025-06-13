import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';
import { MasterclassAPI } from '../../api';
import { useNavigate } from 'react-router-dom';

const MasterclassesList = () => {
  const [masterclasses, setMasterclasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMasterclasses = async () => {
      try {
        const data = await MasterclassAPI.getAllMasterclasses();
        console.log(data);
        setMasterclasses(data);
      } catch (error) {
        console.error('Error fetching masterclasses:', error);
      }
    };

    fetchMasterclasses();
  }, []);


  const clickHandler = (slug) =>{
    // navigate(`/masterclass/${slug}`);
  }

  return (
    <>
      <Helmet>
        <title>Dental Excellence Masterclasses</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
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
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" id="masterclassesDropdown" role="button" data-bs-toggle="dropdown">
                  Masterclasses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../Home/index.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../Home/index.html">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../Home/index.html">Contact</a>
              </li>
            </ul>
            <a href="#registration" className="btn btn-primary ms-lg-4">Register Now</a>
          </div>
        </div>
      </nav>

      {/* Masterclasses Section */}
      <section id="masterclass-list" className="py-5 mt-5">
        <div className="container">
          <h2 className="text-center mb-4">All courses</h2>
          <div className="search-bar mb-4">
            <input type="text" placeholder="Search" />
            <span className="search-icon">🔍</span>
          </div>

          <h4 className="mb-3">JUNE 2025</h4>

          {/* Masterclass Items from Database */}
          {masterclasses.map(masterclass => (
            <div onClick={clickHandler(masterclass.slug)} key={masterclass.id} className="masterclass-item"
                style={{marginLeft: masterclass.happening === false ? '50px' : '0'
    }}>
              <div className="date-block">
                <span className="date-range">
                  {new Date(masterclass.date).getDate()}
                </span>
                <span className="month">
                  {new Date(masterclass.date).toLocaleString('default', { month: 'short' }).toUpperCase()}
                </span>
                <span className="location">📍 Tbilisi</span>
              </div>
              <div className="details-block">
                <h5>{masterclass.template?.title || masterclass.slug}</h5>
                <p className="type">{masterclass.template.shortDescription}</p>
                <p className="lecturer">{masterclass.template.lecturer.firstName} {masterclass.template.lecturer.lastName}</p>
                <p className="audience">{masterclass.template.fullDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scripts */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    </>
  );
};

export default MasterclassesList;