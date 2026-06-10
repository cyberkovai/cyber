import logo from "../assets/images/footer-logo.svg";
import { Link } from "react-router-dom";
import mainlogo1 from "../assets/images/main-logo-1.png";

function Footer() {

  const servicesData = [
    { id: 1, slug:'pre-matrimonial-screening', title: "Pre Matrimonial Screening", description: "Verify personal background, habits, financial status, and social reputation before marriage decisions." },
    { id: 2, slug:'post-matrimonial-disputes', title: "Post Matrimonial Disputes", description: "Professional investigation support for marital disputes, hidden affairs, and family conflicts." },
    { id: 3, slug:'character-report', title: "Character Report", description: "Get confidential reports about an individual's behavior, reputation, and personal background." },
    { id: 4, slug:'pre-employment-verification', title: "Pre-Employment Verification", description: "Verify employee credentials, address, work history, and criminal background before hiring." },
    { id: 5, slug:'post-employment-investigation', title: "Post-Employment Investigation", description: "Investigate employee misconduct, information leakage, fraud, or policy violations." },
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

                            <li><Link to={`/service/${item.slug}`}>{item.title}</Link></li>
                         
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
                                <p><a href="tel:+917094620896">+91 70946 20896</a></p>
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