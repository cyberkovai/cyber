import author1 from "../assets/images/author-1.jpg";
import icontestimonial from "../assets/images/icon-testimonial-logo.svg";
import aboutuscircle from "../assets/images/about-us-circle.png";
import faqimage from "../assets/images/faqs-image.jpg";
import iconmail from "../assets/images/icon-mail.svg";
import sidebarcta from "../assets/images/sidebar-cta-img.svg";
import whychooseitem1 from "../assets/images/icon-why-choose-item-1.svg";
import whychooseitem2 from "../assets/images/icon-why-choose-item-2.svg";
import whychooseitem3 from "../assets/images/icon-why-choose-item-3.svg";
import staricon from  "../assets/images/star-icon.svg";
import author2 from "../assets/images/man-icon.jfif";
import author3 from "../assets/images/women-icon.png";
import {Link} from "react-router-dom";
import { useEffect } from "react";
function Testimonial() {

        useEffect(() => {
            window.scrollTo(0, 0);
          }, []);

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
						<h1 className="wow fadeInUp" data-cursor="-opaque"><span>Testimonials</span></h1>
						<nav className="wow fadeInUp" data-wow-delay="0.2s">
                            <ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to='/'>home</Link></li>
								<li className="breadcrumb-item active" aria-current="page">Testimonials</li>
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

    <div className="page-testimonials">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="testimonial-item wow fadeInUp">
                        <div className="testimonial-rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="testimonial-content">
                            <p>CyberKovai handled our pre-matrimonial investigation professionally and confidentially. Their detailed report helped our family make the right decision with confidence.
</p>
                        </div>
                        <div className="testimonial-body">
                            <div className="testimonial-author-box">
                                <div className="author-image">
                                    <figure className="image-anime">
                                        <img src={author2} alt=""/>
                                    </figure>
                                </div>
                                <div className="author-content">
                                    <h3>Ar** kum**</h3>
                                    <p>Chennai</p>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="testimonial-item wow fadeInUp" data-wow-delay="0.2s">
                        <div className="testimonial-rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="testimonial-content">
  <p>
                                            We approached CyberKovai for employee background verification. Their investigation process was quick, accurate, and extremely reliable for our company hiring.
                                        </p>                        </div>
                        <div className="testimonial-body">
                            <div className="testimonial-author-box">
                                <div className="author-image">
                                    <figure className="image-anime">
                                        <img src={author2} alt=""/>
                                    </figure>
                                </div>
                               <div className="author-content">
                                            <h3>Raje** s*****</h3>

                                            <p>HR Manager, Bangalore</p>
                                        </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="testimonial-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="testimonial-rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="testimonial-content">
                                        <p>
                                            Their fraud investigation team provided clear evidence and complete support during our business dispute. Highly professional and trustworthy service.
                                        </p>                        </div>
                        <div className="testimonial-body">
                            <div className="testimonial-author-box">
                                <div className="author-image">
                                    <figure className="image-anime">
                                        <img src={author3} alt=""/>
                                    </figure>
                                </div>
                                        <div className="author-content">
                                            <h3>Vig**** r**</h3>
                                            <p>Business Owner, Coimbatore</p>
                                        </div>
                            </div>
                        
                        </div>
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
  </>
}

export default Testimonial
