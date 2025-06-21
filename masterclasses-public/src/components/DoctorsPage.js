import "../styles/doctor.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import FooterSelection from "./Footer";
import { useState, useEffect } from "react";


const getImageFromName = (name) => {
    return `http://localhost:8080/api/doctor/image/${name}`;
}

const DoctorsPage = () => {
  const [lecturers, setLecturers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/doctor/list");
        const data = await response.json();
        console.log(data);
        setLecturers(data);
      } catch (error) {
        console.error("Error fetching masterclasses:", error);
        setLecturers([]);
      }
    };

    fetchData();
  }, []);


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
                    ჩვენი ფაკულტეტის წევრები
                </h1>
                <p className="doctors-hero-subtitle">
                    ისწავლეთ მსოფლიოში სახელგანთქმული პროფესიონალებისგან, რომლებიც 
                    გთავაზობენ ათწლეულების ცოდნას, კლინიკურ გამოცდილებას, ექსპერტიზაც ჩვენს მასტერკლასებში
                    
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* Doctors Grid Section */}
        <section id="doctors-grid" className="doctors-section">
            <div className="container">
            <h2 className="section-title">გუნდის წევრები</h2>
            <div className="row">
                {lecturers.map(lecturer => (
                <div className="col-lg-4 col-md-6">
                    <div className="doctor-card">
                    <img src={getImageFromName(lecturer.imagePath)} className="doctor-img" />
                    <div className="doctor-body">
                        <h3 className="doctor-name">{lecturer.firstName} {lecturer.lastName}</h3>
                        <p className="doctor-specialty">{lecturer.specialty}</p>
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