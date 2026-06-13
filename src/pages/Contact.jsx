import iconphone from "../assets/images/icon-phone.svg";
import iconemail from "../assets/images/icon-mail.svg";
import iconlocation from "../assets/images/icon-location.svg";
import staricon from  "../assets/images/star-icon.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {

    
          useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const form = useRef();

  const recaptchaRef = useRef();

   const [captchaVerified, setCaptchaVerified] = useState(false);
   const [loading, setLoading] = useState(false);

    const handleCaptcha = (value) => {
        if (value) {
            setCaptchaVerified(true);
        }
    };


  const sendEmail = (e) => {
    e.preventDefault();


        // Check captcha
        if (!captchaVerified) {
            alert("Please verify Google reCAPTCHA");
            return;
        }

                setLoading(true);



		emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
      .then(
        (result) => {
          alert("Mail Sent Successfully");
          form.current.reset();
          setCaptchaValue(null);
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send mail");
          console.log(error.text);
        }
      );
  };

  return <>
	<div className="page-header">
        <div className="grid-lines">
            <div className="grid-line-1"></div>
            <div className="grid-line-2"></div>
            <div className="grid-line-3"></div>
            <div className="grid-line-4"></div>
            <div className="grid-line-5"></div>
        </div>
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-12">
					<div className="page-header-box">
						<h1 className="wow fadeInUp" data-cursor="-opaque">Contact <span>us</span></h1>
						<nav className="wow fadeInUp" data-wow-delay="0.2s">
                            <ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to='/'>home</Link></li>
								<li className="breadcrumb-item active" aria-current="page">contact us</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>

    <div className="our-scrolling-ticker">
        <div className="scrolling-ticker-box">
            <div className="scrolling-content">
                <span><img src={staricon} alt=""/>Healthcare</span>
                <span><img src={staricon} alt=""/>Finance and Banking</span>
                <span><img src={staricon} alt=""/>Legal and Law Firms</span>
                <span><img src={staricon} alt=""/>Government and Public Sector</span>
                <span><img src={staricon} alt=""/>Technology and Software</span>
                <span><img src={staricon} alt=""/>Healthcare</span>
                <span><img src={staricon} alt=""/>Finance and Banking</span>
                <span><img src={staricon} alt=""/>Legal and Law Firms</span>
                <span><img src={staricon} alt=""/>Government and Public Sector</span>
                <span><img src={staricon} alt=""/>Technology and Software</span>
            </div>

            <div className="scrolling-content">
                <span><img src={staricon} alt=""/>Healthcare</span>
                <span><img src={staricon} alt=""/>Finance and Banking</span>
                <span><img src={staricon} alt=""/>Legal and Law Firms</span>
                <span><img src={staricon} alt=""/>Government and Public Sector</span>
                <span><img src={staricon} alt=""/>Technology and Software</span>
                <span><img src={staricon} alt=""/>Healthcare</span>
                <span><img src={staricon} alt=""/>Finance and Banking</span>
                <span><img src={staricon} alt=""/>Legal and Law Firms</span>
                <span><img src={staricon} alt=""/>Government and Public Sector</span>
                <span><img src={staricon} alt=""/>Technology and Software</span>
            </div>
        </div>
    </div>
  
    <div className="page-contact-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="contact-us-form">
                        <div className="section-title">
                            <h2 className="wow fadeInUp" data-cursor="-opaque">Get in <span>Touch Now!</span></h2>
                        </div>
                    
                        <div className="contact-form">
                            <form id="contactForm" ref={form} onSubmit={sendEmail} data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.2s">
                                <div className="row">                                
                                    <div className="form-group col-md-6 mb-4">
                                        <input type="text" name="fname" className="form-control" id="fname" placeholder="Enter Your First Name" required=""/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                        
                                    <div className="form-group col-md-6 mb-4">
                                        <input type="text" name="lname" className="form-control" id="lname" placeholder="Enter Your Last Name" required=""/>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Enter Your Phone Number" required=""/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                        
                                    <div className="form-group col-md-6 mb-4">
                                        <input type="email" name="email" className="form-control" id="email" placeholder="Enter Your Email" required=""/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                        
                                    <div className="form-group col-md-12 mb-5">
                                        <textarea name="message" className="form-control" id="message" rows="6" placeholder="Enter Your Message"></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>


                                             <div className="form-group col-md-12 mb-4">
                                                <ReCAPTCHA
                                                    ref={recaptchaRef}
													sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                                    onChange={handleCaptcha}
                                                />
                                            </div>
                        
                                    <div className="col-md-12">
                                        <button type="submit" className="btn-default">Send Message</button>
                                        <div id="msgSubmit" className="h3 hidden"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="contact-us-content">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Contact With Us</h3>
                            <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Get in touch with your digital <span>growth partners</span></h2>
                        </div>

                        <div className="contact-info-list">
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    <img src={iconphone} alt=""/>
                                </div>

                                <div className="contact-item-content">
                                    <p>contact us</p>
                                    <h3><a href="tel:+91 70946 20896">+91 70946 20896</a></h3>
                                </div>
                            </div>

                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="icon-box">
                                    <img src={iconemail} alt=""/>
                                </div>

                                <div className="contact-item-content">
                                    <p>email us at</p>
                                    <h3><a href="mailto:info@domain.com">info@cyberkovai.com</a></h3>
                                </div>
                            </div>

                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.8s">
                                <div className="icon-box">
                                    <img src={iconlocation} alt=""/>
                                </div>

                                <div className="contact-item-content">
                                    <p>location</p>
                                    <h3>Coimbatore - 641 001.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="google-map-iframe">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4239645431385!2d77.01483067363849!3d11.006783154905294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857de33aa90db%3A0x898640eeee45d752!2sDigital%20Teenz%20-Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1778252104873!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="our-scrolling-ticker footer-scrolling-ticker">
    <div className="scrolling-ticker-box">

        <div className="scrolling-content">
            <span><a href="javascript:void(0);">Confidential Investigation Services</a></span>
            <span><a href="javascript:void(0);">Trusted Private Detectives</a></span>
            <span><a href="javascript:void(0);">Professional Background Verification</a></span>
            <span><a href="javascript:void(0);">Cyber Crime Investigation Experts</a></span>
        </div>

        <div className="scrolling-content">
            <span><a href="javascript:void(0);">Matrimonial Investigation Services</a></span>
            <span><a href="javascript:void(0);">Corporate Fraud Investigation</a></span>
            <span><a href="javascript:void(0);">Reliable Detective Agency</a></span>
            <span><a href="javascript:void(0);">Contact CyberKovai Today</a></span>
        </div>

    </div>
</div>
  </>;
}

export default Contact;
