import staricon from  "../assets/images/star-icon.svg";
import iconabout1 from "../assets/images/icon-about-item-1.svg";
import iconabout2 from "../assets/images/icon-about-item-2.svg";
import potentialaccordionimg from "../assets/images/potential-accordion-img.jpg";
import faqsimage from "../assets/images/faqs-image.jpg";
import icontestimonial from "../assets/images/icon-testimonial-logo.svg";
import author1 from "../assets/images/author-1.jpg";
import author2 from "../assets/images/author-2.jpg";
import author3 from "../assets/images/author-3.jpg";
import author4 from "../assets/images/author-4.jpg";
import author5 from "../assets/images/author-5.jpg";
import potentialimage from "../assets/images/potential-image.jpg";
import whoweareimg1 from "../assets/images/who-we-are-img-1.jpg";
import whoweareimg2 from "../assets/images/who-we-are-img-2.jpg";
import readmoreimgcircle from "../assets/images/readmore-img-circle.svg";
import iconspecialities1 from "../assets/images/icon-specialties-item-1.svg";
import iconspecialities2 from "../assets/images/icon-specialties-item-2.svg";
import iconspecialities3 from "../assets/images/icon-specialties-item-3.svg";
import iconspecialities4 from "../assets/images/icon-specialties-item-4.svg";
import companylogo1 from "../assets/images/logo-1.png";
import companylogo2 from "../assets/images/logo-2.png";
import companylogo3 from "../assets/images/logo-3.png";
import companylogo4 from "../assets/images/logo-4.png";
import introbgimage from "../assets/images/intro-bg-image.jpg";
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
import iconsuccessitem1 from "../assets/images/icon-success-item-1.svg";
import iconsuccessitem2 from "../assets/images/icon-success-item-2.svg";
import iconsuccessitem3 from "../assets/images/icon-success-item-3.svg";
import successimg1 from "../assets/images/success-img-1.jpg";
import successimg2 from "../assets/images/success-img-2.jpg";
import sidebarctaimg from "../assets/images/sidebar-cta-img.svg";
import iconmail from "../assets/images/icon-mail.svg";
import abouticon from "../assets/images/icon-about-item-1.svg";
import abouticontwo from "../assets/images/icon-about-item-2.svg";
import specialitiesone from "../assets/images/icon-specialties-item-1.svg";
import specialitiestwo from "../assets/images/icon-specialties-item-2.svg";
import specialitiesthree from "../assets/images/icon-specialties-item-3.svg";
import specialitiesfour from "../assets/images/icon-specialties-item-4.svg";
import bgimage1 from "../assets/images/intro-bg-image.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import aboutVideo2 from "../assets/videos/about-video-3.mp4"; // video path


function About() {

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

       {/* <video
                autoPlay
                muted
                loop
                playsInline
                className="breadcrumb-video"
            >
                <source src={aboutVideo2} type="video/mp4" />
            </video>
        <div className="breadcrumb-video-overlay"></div> */}


		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-12">
					<div className="page-header-box">
						<h1 className="wow fadeInUp" data-cursor="-opaque">About <span>us</span></h1>
						<nav className="wow fadeInUp" data-wow-delay="0.2s">
                            <ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to='/'>home</Link></li>
								<li className="breadcrumb-item active" aria-current="page">about us</li>
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
             <span><img src={staricon} alt=""/>Pre Matrimonial Screening</span>
             <span><img src={staricon} alt=""/>Post Matrimonial Disputes</span>
             <span><img src={staricon} alt=""/>Character Verification</span>
             <span><img src={staricon} alt=""/>Corporate Investigation</span>
             <span><img src={staricon} alt=""/>Fraud Investigation</span>
             <span><img src={staricon} alt=""/>Background Screening</span>
             <span><img src={staricon} alt=""/>Cyber Crime Investigation</span>
             <span><img src={staricon} alt=""/>Private Detective Services</span>
             <span><img src={staricon} alt=""/>Employment Verification</span>
             <span><img src={staricon} alt=""/>Missing Person Investigation</span>
         </div>
 
         <div className="scrolling-content">
             <span><img src={staricon} alt=""/>Pre Matrimonial Screening</span>
             <span><img src={staricon} alt=""/>Post Matrimonial Disputes</span>
             <span><img src={staricon} alt=""/>Character Verification</span>
             <span><img src={staricon} alt=""/>Corporate Investigation</span>
             <span><img src={staricon} alt=""/>Fraud Investigation</span>
             <span><img src={staricon} alt=""/>Background Screening</span>
             <span><img src={staricon} alt=""/>Cyber Crime Investigation</span>
             <span><img src={staricon} alt=""/>Private Detective Services</span>
             <span><img src={staricon} alt=""/>Employment Verification</span>
             <span><img src={staricon} alt=""/>Missing Person Investigation</span>
         </div>
 
     </div>
 </div>
    
    <div className="about-us">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-lg-12">
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">About CyberKovai</h3>

                        <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Trusted investigation agency delivering confidential and professional <span>detective services</span></h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <div className="about-counter-box">
                        <h2><span className="counter">10</span>+</h2>
                        <p>Years of work experience</p>
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="about-us-content">
                        <div className="about-us-list">
                            <div className="about-list-item wow fadeInUp">
                                <img src={abouticon} alt="fsds"/>
                                <h3>Our mission</h3>
                                <p>Our mission is to provide accurate, ethical, and confidential investigation services that help clients make informed decisions with confidence.</p>
                            </div>
                            
                            <div className="about-list-item wow fadeInUp" data-wow-delay="0.2s">
                                <img src={abouticontwo} alt=""/>
                                <h3>Our vision</h3>
                                <p>To become one of the most trusted investigation agencies in India by delivering professional, discreet, and technology-driven investigative solutions.</p>
                            </div>
                        </div>
                        
                        <div className="about-us-body wow fadeInUp" data-wow-delay="0.4s">
                            <p>CyberKovai is a professional private investigation agency offering reliable detective and verification services for individuals, families, corporates, and legal professionals. We specialize in matrimonial investigations, employee verification, cyber crime investigation, fraud detection, and background screening with complete confidentiality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
 <div className="our-potential">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-7">
                <div className="our-potential-content">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">Unlock Your Business Potential</h3>

                        <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                            Delivering innovative digital solutions to grow your <span>business successfully</span>
                        </h2>
                    </div>

                    <div className="potential-accordion" id="accordion">

<div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
    <h2 className="accordion-header" id="pheading1">
        <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#pcollapse1"
            aria-expanded="true"
            aria-controls="pcollapse1"
        >
            Confidential Investigation Approach
        </button>
    </h2>

    <div
        id="pcollapse1"
        className="accordion-collapse collapse show"
        aria-labelledby="pheading1"
        data-bs-parent="#accordion"
    >
        <div className="accordion-body">
            <div className="accordion-image">
                <figure>
                    <img src={potentialaccordionimg} alt="" />
                </figure>
            </div>

            <div className="accordion-item-content">
                <p>
                    Every investigation is handled with complete discretion,
                    professionalism, and strict confidentiality to protect
                    client privacy and sensitive information.
                </p>

                <ul>
                    <li>Secure & Confidential Investigations</li>
                    <li>Professional Evidence Collection</li>
                    <li>Trusted Client Support</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
    <h2 className="accordion-header" id="pheading2">
        <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#pcollapse2"
            aria-expanded="true"
            aria-controls="pcollapse2"
        >
            Advanced Investigation Methods
        </button>
    </h2>

    <div
        id="pcollapse2"
        className="accordion-collapse collapse"
        aria-labelledby="pheading2"
        data-bs-parent="#accordion"
    >
        <div className="accordion-body">
            <div className="accordion-image">
                <figure>
                    <img src={potentialaccordionimg} alt="" />
                </figure>
            </div>

            <div className="accordion-item-content">
                <p>
                    CyberKovai uses modern investigation techniques, cyber
                    intelligence tools, and professional field operations to
                    deliver accurate and reliable investigation results.
                </p>

                <ul>
                    <li>Technology-Driven Investigations</li>
                    <li>Cyber Crime & Fraud Analysis</li>
                    <li>Accurate Verification Process</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
    <h2 className="accordion-header" id="pheading3">
        <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#pcollapse3"
            aria-expanded="true"
            aria-controls="pcollapse3"
        >
            Expert Investigation Team
        </button>
    </h2>

    <div
        id="pcollapse3"
        className="accordion-collapse collapse"
        aria-labelledby="pheading3"
        data-bs-parent="#accordion"
    >
        <div className="accordion-body">
            <div className="accordion-image">
                <figure>
                    <img src={potentialaccordionimg} alt="" />
                </figure>
            </div>

            <div className="accordion-item-content">
                <p>
                    Our experienced investigators handle personal, corporate,
                    and cyber investigation cases with strategic planning,
                    detailed analysis, and professional reporting.
                </p>

                <ul>
                    <li>Experienced Detective Professionals</li>
                    <li>Corporate & Personal Investigation Expertise</li>
                    <li>Detailed Investigation Reporting</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div className="accordion-item wow fadeInUp" data-wow-delay="1s">
    <h2 className="accordion-header" id="pheading4">
        <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#pcollapse4"
            aria-expanded="true"
            aria-controls="pcollapse4"
        >
            Reliable Client Support
        </button>
    </h2>

    <div
        id="pcollapse4"
        className="accordion-collapse collapse"
        aria-labelledby="pheading4"
        data-bs-parent="#accordion"
    >
        <div className="accordion-body">
            <div className="accordion-image">
                <figure>
                    <img src={potentialaccordionimg} alt="" />
                </figure>
            </div>

            <div className="accordion-item-content">
                <p>
                    We focus on building trust with clients by offering honest
                    communication, timely updates, and dependable investigation
                    support throughout the process.
                </p>

                <ul>
                    <li>Transparent Investigation Process</li>
                    <li>Timely Case Updates</li>
                    <li>Client-Centered Service Approach</li>
                </ul>
            </div>
        </div>
    </div>
</div>

                    </div>
                </div>
            </div>

            <div className="col-lg-5">
                <div className="potential-image">
                    <figure className="image-anime">
                        <img src={potentialimage} alt=""/>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</div>
    
<div className="who-we-are">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="who-we-are-images">
                    <div className="who-we-img-box">

                        <div className="customer-review-box">


                            <div className="customer-review-content">
                                <p>
                                    <span className="counter">100</span>% confidential &
                                    licensed investigation services
                                </p>
                            </div>
                        </div>

                        <div className="who-we-are-img">
                            <figure className="image-anime">
                                <img src={whoweareimg1} alt="" />
                            </figure>
                        </div>
                    </div>

                    <div className="who-we-img-box">
                        <div className="who-we-are-img">
                            <figure className="image-anime">
                                <img src={whoweareimg2} alt="" />
                            </figure>
                        </div>
                    </div>

                    <div className="readmore-img-circle">
                        <Link to="/contact">
                            <img src={readmoreimgcircle} alt="" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="who-we-are-content mb-5">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">
                            Licensed Investigation Agency
                        </h3>

                        <h2
                            className="wow fadeInUp"
                            data-wow-delay="0.2s"
                            data-cursor="-opaque"
                        >
                            Trusted private detectives delivering
                            <span> confidential investigation services</span>
                        </h2>

                        <p
                            className="wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            CyberKovai is a professional licensed investigation
                            agency specializing in matrimonial investigations,
                            cyber crime investigations, employee verification,
                            fraud detection, background screening, and private
                            detective services for individuals and businesses.
                        </p>
                    </div>

                    <div className="who-we-are-counters">

                        <div className="who-we-counter-item">
                            <h2>
                                <span className="counter">10</span>+
                            </h2>

                            <p>
                                Years of experience handling confidential
                                investigation cases with professionalism,
                                accuracy, and complete client privacy.
                            </p>
                        </div>

                        <div className="who-we-counter-item">
                            <h2>
                                <span className="counter">500</span>+
                            </h2>

                            <p>
                                Successfully completed investigation and
                                verification cases for personal, corporate,
                                and legal clients across India.
                            </p>
                        </div>

                    </div>
                </div>

                        <div className="row mt-5">

                                <div className="col-3">
                                    <figure className="image-anime">
                                        <img src={companylogo1} alt="Licensed Investigation" />
                                    </figure>
                                </div>

                                <div className="col-3">
                                    <figure className="image-anime">
                                        <img src={companylogo2} alt="Private Detective Agency" />
                                    </figure>
                                </div>

                                <div className="col-3">
                                    <figure className="image-anime">
                                        <img src={companylogo3} alt="Cyber Investigation Services" />
                                    </figure>
                                </div>

                                <div className="col-3">
                                    <figure className="image-anime">
                                        <img src={companylogo4} alt="Professional Investigation" />
                                    </figure>
                                </div>

                        </div>
            </div>
        </div>
    </div>
</div>

<div className="our-specialties">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="our-specialties-content">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">Our Specialties</h3>
                        
                        <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                            Trusted investigation experts committed to uncovering the <span>truth with confidence</span>
                        </h2>

                        <p className="wow fadeInUp" data-wow-delay="0.4s">
                            CyberKovai provides professional and confidential investigation services for personal, matrimonial, corporate, and financial matters. Our experienced investigators use modern techniques and ethical practices to deliver accurate and reliable results.
                        </p>
                    </div>
                    
                    <div className="our-specialties-btn wow fadeInUp" data-wow-delay="0.6s">
                        <Link to='/contact' className="btn-default">Contact Now</Link>
                    </div>
                </div>                    
            </div>

            <div className="col-lg-6">
                <div className="specialties-item-box">

                    <div className="specialties-item wow fadeInUp">
                        <div className="icon-box">
                            <img src={specialitiesone} alt=""/>
                        </div>

                        <div className="specialties-item-content">
                            <h3>Confidential Investigation</h3>
                            <p>Every case is handled with complete privacy, professionalism, and discretion.</p>
                        </div>
                    </div>
                 
                    <div className="specialties-item wow fadeInUp" data-wow-delay="0.2s">
                        <div className="icon-box">
                            <img src={specialitiestwo} alt=""/>
                        </div>

                        <div className="specialties-item-content">
                            <h3>Advanced Investigation Methods</h3>
                            <p>We use modern tools, surveillance techniques, and detailed verification processes.</p>
                        </div>
                    </div>
                 
                    <div className="specialties-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="icon-box">
                            <img src={specialitiesthree} alt=""/>
                        </div>

                        <div className="specialties-item-content">
                            <h3>Professional Detectives</h3>
                            <p>Our skilled investigators deliver accurate reports backed by real evidence.</p>
                        </div>
                    </div>
                 
                    <div className="specialties-item wow fadeInUp" data-wow-delay="0.6s">
                        <div className="icon-box">
                            <img src={specialitiesfour} alt=""/>
                        </div>

                        <div className="specialties-item-content">
                            <h3>Trusted Investigation Support</h3>
                            <p>We support individuals, families, businesses, and legal professionals across India.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="col-lg-12">
                <div className="intro-video-box">
                    <div className="intro-bg-image">
                        <figure className="image-anime">
                            <img src={bgimage1} alt=""/>
                        </figure>
                    </div>

                    <div className="video-play-button">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                            <i className="fa-solid fa-play"></i>
                        </a>
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
  </>;
}

export default About;