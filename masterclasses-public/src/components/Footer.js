import { useEffect, useState } from "react";
import { fetchHomeContent } from "../api/homeApi";

const FooterSelection = () => {
  const [text, setText] = useState([]);

  useEffect(() =>{
    const loadContent = async () => {
      try {
        const data = await fetchHomeContent();
        setText(data.footerText || []); 
      } catch (error) {
        console.error("Failed to load about content:", error);
      }
    };
  
    loadContent();
  }, []);

  return (
    <footer id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="footer-title">სიახლეები</h4>
            <p>
              გამოგვიწერეთ, რომ პირველებმა მიიღოთ ინფორმაცია ჩვენი უახლესი მასტერკლასების, ექსკლუზიური შეთავაზებებისა და სტომატოლოგიური სიახლეების შესახებ
            </p>
            <div className="social-links mt-4">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
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
            <h4 className="footer-title">სწრაფი წვდომა</h4>
            <div className="footer-links">
              <a href="#">მთავარი</a>
              <a href="/masterclasses">მასტერკლასები</a>
              <a href="#about">ჩვენს შესახებ</a>
              <a href="/doctors">ექიმეაბი</a>
              <a href="#contact">კონტაქტი</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <h4 className="footer-title">საკონტაქტო ინფორმაცია</h4>
            <div className="contact-info">
              <p>
                <i className="fas fa-map-marker-alt"></i> ქ.შარაშიძის ქუჩა N14
              </p>
              <p>
                <i className="fas fa-phone"></i> (+995) 595 15 02 99
              </p>
              <p>
                <i className="fas fa-envelope"></i>{" "}
                info@dag.ge
              </p>
              <p>
                <i className="fas fa-clock"></i> ორშ-შაბ: 9:00 - 18:00
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">Dental Academy Georgia</h4>
            <p>
              {text}
            </p>

          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <p>
              &copy; 2025 Dental Academy Georgia. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSelection;
