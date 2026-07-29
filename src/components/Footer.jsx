import logo from "../assets/images/footer-logo.svg";
import { Link } from "react-router-dom";
import mainlogo1 from "../assets/images/main-logo-1.png";

function Footer() {

  const servicesData = [
    { id: 1,  title: "Cybercrime Victim Assistance & Account Recovery"},
    { id: 2,  title: "Digital Investigations & OSINT" },
    { id: 3,  title: "Social Media Investigations & Impersonation Removal" },
    { id: 4,  title: "Cyber Fraud Investigation Support" },
    { id: 5,  title: "Digital Evidence Preservation & Forensics" },
    { id: 6,  title: "Executive & Family Digital Protection" },
    { id: 7,  title: "Cybersecurity Awareness & LEA Training" },
  ];
    

  return <>
      <footer className="main-footer">
        <div className="container">
            <div className="row">                
                <div className="col-lg-4 col-md-12">
                  
                    <div className="about-footer">
                      
                        <div className="footer-logo">
                 <img src={mainlogo1} alt="Logo" />					
                        </div>
                    
                        <div className="about-footer-content">
                            <p>Your trusted partner in cybersecurity, offering cutting-edge solutions to defend against evolving threats.</p>
                        </div>           
                     
                        <div className="footer-social-links">
                            <ul>
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-2 col-md-3">
                    <div className="footer-links">
                        <h3>quick links</h3>
                        <ul>
                           
                             <li className="nav-item"><Link to="/">Home</Link>
                                </li>                                
                                <li className="nav-item"><Link  to="/about">About Us</Link></li>
                                <li className="nav-item"><Link  to="/services">Services</Link></li>
                                <li className="nav-item"><Link  to="/testimonial">Testimonial</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4">
                    <div className="footer-links">
                        <h3>Our Services</h3>
                        <ul>
                                  {servicesData.map((item) => (

                            <li><Link>{item.title}</Link></li>
                         
                                  ))}

                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-5">
                    <div className="footer-links">
                        <h3>Contact Information</h3>
                        <div className="footer-contact-item">
                            <div className="icon-box">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="footer-contact-content">
                                <p>Coimbatore - 641 017.</p>
                            </div>
                        </div>

                        <div className="footer-contact-item">
                            <div className="icon-box">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="footer-contact-content">
                                <p><a href="tel:+917094620896">+91 63820 19821</a></p>
                            </div>
                        </div>
                        
                        <div className="footer-contact-item">
                            <div className="icon-box">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="footer-contact-content">
                                <p><a href="mailto:info@cyberkovai.com">info@cyberkovai.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="footer-copyright-text">
                        <p>Copyright © 2026 All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  </>;
}

export default Footer;
