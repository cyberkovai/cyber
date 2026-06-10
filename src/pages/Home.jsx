import staricon from  "../assets/images/star-icon.svg";
import logoone from "../assets/images/company-logo-1.svg";
import logotwo from "../assets/images/company-logo-3.svg";
import abouticon from "../assets/images/icon-about-item-1.svg";
import abouticontwo from "../assets/images/icon-about-item-2.svg";
import service1 from "../assets/images/icon-service-1.svg";
import service2 from "../assets/images/icon-service-2.svg";
import specialitiesone from "../assets/images/icon-specialties-item-1.svg";
import specialitiestwo from "../assets/images/icon-specialties-item-2.svg";
import specialitiesthree from "../assets/images/icon-specialties-item-3.svg";
import specialitiesfour from "../assets/images/icon-specialties-item-4.svg";
import bgimage1 from "../assets/images/intro-bg-image.jpg";
import post1 from "../assets/images/post-1.jpg";
import post2 from "../assets/images/post-2.jpg";
import post3 from "../assets/images/post-3.jpg";
import faqimg from "../assets/images/faqs-image.jpg";
import mailicon from "../assets/images/icon-mail.svg";
import sidebarctaimg from "../assets/images/sidebar-cta-img.svg";
import testimoniallogo from "../assets/images/icon-testimonial-logo.svg";
import factsimage from "../assets/images/facts-image.jpg";
import aboutuscircle from "../assets/images/about-us-circle.png";
import iconwhychooseitem1 from "../assets/images/icon-why-choose-item-1.svg";
import iconwhychooseitem2 from "../assets/images/icon-why-choose-item-2.svg";
import iconwhychooseitem3 from "../assets/images/icon-why-choose-item-3.svg";
import casestudyimg1 from "../assets/images/case-study-image-1.jpg";
import casestudyimg2 from "../assets/images/case-study-image-2.jpg";
import casestudyimg3 from "../assets/images/case-study-image-3.jpg";
import arrowwhite from "../assets/images/arrow-white.svg";
import iconfeaturesitem1 from "../assets/images/icon-features-item-1.svg";
import iconfeaturesitem2 from "../assets/images/icon-features-item-2.svg";
import iconfeaturesitem3 from "../assets/images/icon-features-item-3.svg";
import iconfeaturesitem4 from "../assets/images/icon-features-item-4.svg";
import iconpricingbenifit1 from "../assets/images/icon-pricing-benefit-1.svg";
import iconpricingbenifit2 from "../assets/images/icon-pricing-benefit-2.svg";
import iconpricingbenifit3 from "../assets/images/icon-pricing-benefit-3.svg";
import author1 from "../assets/images/author-1.jpg";
import author2 from "../assets/images/author-2.jpg";
import author3 from "../assets/images/author-3.jpg";
import author4 from "../assets/images/author-4.jpg";
import author5 from "../assets/images/author-5.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import  serviceImg1 from "../assets/images/panel_1.png";
import  serviceImg2 from "../assets/images/reimage_2.png";

import  serviceImg3 from "../assets/images/panel_3.png";
import  serviceImg4 from "../assets/images/reimage_4.webp";
import  serviceImg5 from "../assets/images/reimage_5.png";
import  serviceImg6 from "../assets/images/reimage_6.webp";
import  serviceImg7 from "../assets/images/reimage_7.webp";


import aboutVideo from "../assets/videos/about-video-1.mp4"; // video path
import aboutVideo1 from "../assets/videos/about-video-2.mp4"; // video path
import aboutVideo2 from "../assets/videos/about-video-3.mp4"; // video path

function Home() {

        useEffect(() => {
            window.scrollTo(0, 0);
          }, []);

useEffect(() => {

    if (window.Swiper) {

        new window.Swiper(".testimonial-slider .swiper", {

            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,

            speed: 1000,

            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            navigation: {
                nextEl: ".testimonial-button-next",
                prevEl: ".testimonial-button-prev",
            },

            breakpoints: {
                768: {
                    slidesPerView: 2,
                },

                1024: {
                    slidesPerView: 2,
                },
            },

        });

    }

}, []);

const servicesData = [
  {
    id: 1,
    title: "Cybercrime Victim Assistance & Account Recovery",
    image : serviceImg1,
    description: "Support for individuals affected by account hacking, online fraud, phishing, impersonation, and cyber extortion incidents. We assist with incident assessment, evidence preservation, recovery guidance, and strengthening account security to prevent future attacks.",
  },
  {
    id: 2,
    title: "Digital Investigations & OSINT",
        image : serviceImg2,

    description: "Comprehensive digital investigations using Open-Source Intelligence (OSINT) techniques to uncover online footprints, verify identities, and assess potential risks. Our reports provide actionable insights for personal, legal, and business decision-making.",
  },
  {
    id: 3,
    title: "Social Media Investigations & Impersonation Removal",
        image : serviceImg3,

    description: "Identify and investigate fake profiles, impersonation attempts, account takeovers, and unauthorized content usage across major social media platforms. We help document evidence and support platform reporting and removal processes.",
  },
  {
    id: 4,
    title: "Cyber Fraud Investigation Support",
        image : serviceImg4,

    description: "Professional investigation support for financial scams, investment fraud, crypto fraud, romance scams, and online marketplace deception. We analyze digital evidence, trace fraud indicators, and prepare detailed reports suitable for law enforcement review.",
  },
  {
    id: 5,
    title: "Digital Evidence Preservation & Forensics",
        image : serviceImg5,

    description: "Secure collection, preservation, and analysis of digital evidence from devices, emails, screenshots, and online accounts. Our forensic documentation helps maintain evidence integrity for investigations, disputes, and legal proceedings.",
  },
  {
    id: 6,
    title: "Executive & Family Digital Protection",
        image : serviceImg6,

    description: "Proactive cybersecurity services designed to protect business leaders, public figures, families, and high-profile individuals from digital threats. We assess security risks, improve privacy controls, and strengthen account and device protection.",
  },
  {
    id: 7,
    title: "Cybersecurity Awareness & LEA Training",
        image : serviceImg7,

    description: "Specialized training programs for law enforcement agencies, educational institutions, NGOs, and corporate teams on cybercrime prevention and investigation techniques. Sessions focus on practical skills, digital evidence handling, fraud awareness, and incident response readiness.",
  }
];


  return <>
    <div className="hero banner">
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
                        className="banner-video"
                    >
                        <source src={aboutVideo2} type="video/mp4" />
                    </video> */}
                {/* <div className="banner-video-overlay"></div> */}
        
        
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="hero-content">
                        <div className="section-title section-title-center">
                            <h3 className="wow fadeInUp">Trusted Private Investigation Services</h3>

                            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                                Professional Investigation Solutions by <span>CyberKovai</span>
                             </h1>
                            <p className="wow fadeInUp" data-wow-delay="0.4s">
                                CyberKovai delivers confidential and result-oriented investigation services for individuals, families, and businesses. Our experienced investigators provide accurate reports, discreet operations, and trusted support across matrimonial, employment, fraud, and cyber investigations.
                            </p>                        
                        </div>

                        
                        <div className="hero-btn wow fadeInUp" data-wow-delay="0.6s">
                            <a href="tel:+91 70946 20896" className="btn-default btn-highlighted">Get Consultation</a>
                            <Link to="/services" className="btn-default">View Services</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="hero-company-slider">
                        <p>We are trusted by to <span className="counter">100</span>+ clients</p>

                         <h2>Cyber Kovai</h2>
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

        <div className="about-us position-relative overflow-hidden">
       {/* <video
                autoPlay
                muted
                loop
                playsInline
                className="about-bg-video"
            >
                <source src={aboutVideo} type="video/mp4" />
            </video>
        <div className="about-video-overlay"></div> */}

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

    <div className="our-services">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-lg-6">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">Our services</h3>
                        <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                            Professional investigation services designed to uncover the <span>truth with accuracy</span></h2>
                    </div>
                </div>
                
                <div className="col-lg-6">
                    <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                        <Link to="/services" className="btn-default">view all services</Link>
                    </div>
                </div>
            </div>

            <div className="row">
      {servicesData.map((item) => (

                  <div className="col-lg-4 col-md-6" key={item.id}>
                    <div className="service-item wow fadeInUp">
                     
                     <div className="img-box">
              <img src={item.image} alt={item.title} />


                     </div>
                       
                  <div className="service-item-content mt-4">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
                       {/* <div className="service-btn">
              <Link to={`/service/${item.slug}`} className="readmore-btn">
                    read more
              </Link>
            </div> */}

                    </div>
                </div>
                
                    ))}

                
                               
            </div>
        </div>
    </div>

<div className="our-specialties position-relative overflow-hidden">
       {/* <video
                autoPlay
                muted
                loop
                playsInline
                className="our-specialties-video"
            >
                <source src={aboutVideo1} type="video/mp4" />
            </video>
        <div className="our-specialties-video-overlay"></div> */}

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


<div className="our-facts">
    <div className="container">
        <div className="row align-items-center">

            <div className="col-lg-6">
                <div className="our-facts-content">

                    <div className="section-title">
                        <h3 className="wow fadeInUp">Our Key Facts</h3>

                        <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                            Delivering reliable and result-oriented <span>investigation services</span>
                        </h2>

                        <p className="wow fadeInUp" data-wow-delay="0.4s">
                            CyberKovai has built a reputation for providing trusted private investigation services with professionalism, confidentiality, and accurate reporting.
                        </p>

                        <p className="wow fadeInUp" data-wow-delay="0.6s">
                            From matrimonial investigations to fraud detection and employee verification, we help clients uncover the truth with confidence.
                        </p>
                    </div>
                    
                    <div className="our-facts-btn wow fadeInUp" data-wow-delay="0.8s">
                        <Link to='/contact' className="btn-default">Learn More</Link>
                    </div>
                    
                    <div className="facts-counter-box">

                        <div className="facts-counter-item">
                            <h2><span className="counter">100</span>+</h2>
                            <p>Successful Investigation Cases</p>
                        </div>
                        
                        <div className="facts-counter-item">
                            <h2><span className="counter">98</span>%</h2>
                            <p>Client Satisfaction Rate</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="facts-image-box">

                    <div className="facts-image">
                        <figure className="image-anime">
                            <img src={factsimage} alt="" />
                        </figure>

                        <div className="award-box">
                            <h2><span className="counter">10</span>+</h2>
                            <p>Years of Investigation Experience</p>
                        </div>
                        
                        <div className="facts-video-content">

                            <div className="video-play-button">
                                <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                                    <i className="fa-solid fa-play"></i>
                                </a>
                            </div>

                            <h3>Professional Investigation Solutions</h3>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>
    
        <div className="why-choose-us position-relative overflow-hidden">
       {/* <video
                autoPlay
                muted
                loop
                playsInline
                className="why-choose-us-video"
            >
                <source src={aboutVideo2} type="video/mp4" />
            </video>
        <div className="why-choose-us-video-overlay"></div> */}

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="why-choose-box">
                        <div className="row section-row align-items-center">
                            <div className="col-lg-7 col-md-9">
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">Why Choose Us</h3>
                                    <h2 className="wow fadeInUp" data-wow-delay="0.2s">
    Reliable investigation experts committed to delivering <span>truth and transparency</span>
</h2>

                                </div>
                            </div>
                            
                            <div className="col-lg-5 col-md-3">
                                <div className="about-us-circle">
                                       <Link to='/about'>
                                         <img src={aboutuscircle} alt=""/> 
                                        </Link>
                                </div>
                            </div>
                        </div>
            
                        <div className="why-choose-item-list">
                            <div className="why-choose-item wow fadeInUp">
                                <div className="icon-box">
                                     <img src={iconwhychooseitem1} alt=""/> 
                                </div>
                                <div className="why-choose-item-content">
    <h3>Confidential Investigations</h3>
    <p>We ensure complete privacy and discretion in every investigation case we handle.</p>
                                </div>
                            </div>

                            <div className="why-choose-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-box">
                                     <img src={iconwhychooseitem2} alt=""/> 
                                </div>
                                <div className="why-choose-item-content">
    <h3>Experienced Detectives</h3>
    <p>Our professional investigators use modern techniques and field expertise for accurate results.</p>
                                </div>
                            </div>
                        
                            <div className="why-choose-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                     <img src={iconwhychooseitem3} alt=""/> 
                                </div>
                                <div className="why-choose-item-content">
    <h3>Detailed Reporting</h3>
    <p>Receive clear, evidence-based reports to support personal, legal, or business decisions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="section-footer-text wow fadeInUp" data-wow-delay="0.6s">
                            <p><span>Free</span>Let's make something great work together. - <Link to='/contact'>Get Free Quote</Link></p>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>

 

<div className="our-features">
    <div className="container">

        <div className="row section-row align-items-center">

            <div className="col-lg-6">
                <div className="section-title">

                    <h3 className="wow fadeInUp">Our Features</h3>

                    <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                        Professional investigation services designed for <span>accurate and confidential results</span>
                    </h2>

                </div>
            </div>

            <div className="col-lg-6">
                <div className="section-title-content wow fadeInUp" data-wow-delay="0.4s">
                    <p>
                        CyberKovai combines modern investigation techniques, experienced detectives, and confidential operations to deliver reliable and evidence-based investigation solutions.
                    </p>
                </div>
            </div>

        </div>

        <div className="row">

            <div className="col-lg-3 col-md-6">
                <div className="features-item wow fadeInUp">

                    <div className="icon-box">
                        <img src={iconfeaturesitem1} alt=""/>
                    </div>

                    <div className="features-item-content">
                        <h3>Confidential Operations</h3>
                        <p>
                            Every investigation is handled discreetly to ensure complete privacy and client confidentiality.
                        </p>
                    </div>

                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="features-item wow fadeInUp" data-wow-delay="0.2s">

                    <div className="icon-box">
                        <img src={iconfeaturesitem2} alt=""/>
                    </div>

                    <div className="features-item-content">
                        <h3>Accurate Reporting</h3>
                        <p>
                            We provide detailed evidence-based reports that help clients make informed decisions.
                        </p>
                    </div>

                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="features-item wow fadeInUp" data-wow-delay="0.4s">

                    <div className="icon-box">
                        <img src={iconfeaturesitem3} alt=""/>
                    </div>

                    <div className="features-item-content">
                        <h3>Advanced Surveillance</h3>
                        <p>
                            Modern surveillance methods and cyber investigation tools ensure reliable investigation results.
                        </p>
                    </div>

                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="features-item wow fadeInUp" data-wow-delay="0.6s">

                    <div className="icon-box">
                        <img src={iconfeaturesitem4} alt=""/>
                    </div>

                    <div className="features-item-content">
                        <h3>Experienced Detectives</h3>
                        <p>
                            Our skilled investigators handle matrimonial, corporate, fraud, and cyber crime cases professionally.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>
    
    


<div className="our-faqs">
    <div className="container">
        <div className="row">

            <div className="col-lg-6">
                <div className="faqs-content">

                    <div className="section-title">
                        <h3 className="wow fadeInUp">
                            Frequently Asked Questions
                        </h3>

                        <h2
                            className="wow fadeInUp"
                            data-wow-delay="0.2s"
                            data-cursor="-opaque"
                        >
                            Your complete FAQ guide to
                            <span> cybersecurity solutions</span>
                        </h2>
                    </div>

                    <div className="faqs-contact-box">

                        <div
                            className="faqs-contact-item wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <div className="icon-box">
                                <img src={sidebarctaimg} alt="" />
                            </div>

                            <div className="faqs-contact-item-content">
                                <h3>24/7 Customer Care</h3>

                                <p>
                                    <a href="tel:+917094620896">
                                        +91 70946 20896
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div
                            className="faqs-contact-item wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            <div className="icon-box">
                                <img src={mailicon} alt="" />
                            </div>

                            <div className="faqs-contact-item-content">
                                <h3>Technical Issues</h3>

                                <p>
                                    <a href="mailto:info@cyberkovai.com">
                                        info@cyberkovai.com
                                    </a>
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="faqs-image">
                        <figure className="image-anime">
                            <img src={faqimg} alt="" />
                        </figure>
                    </div>

                </div>
            </div>

            <div className="col-lg-6">

                {/* IMPORTANT */}
                <div className="accordion faq-accordion" id="faqaccordion">

                    {/* ITEM 1 */}
                    <div className="accordion-item wow fadeInUp">

                        <h2 className="accordion-header" id="heading1">

                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse1"
                                aria-expanded="true"
                                aria-controls="collapse1"
                            >
                                What types of investigation services do you provide?
                            </button>

                        </h2>

                        <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#faqaccordion"
                        >

                            <div className="accordion-body">
                                <p>
                                    We provide matrimonial investigation,
                                    corporate investigation, cyber crime
                                    investigation, employee verification,
                                    fraud investigation, and background
                                    screening services.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* ITEM 2 */}
                    <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="0.2s"
                    >

                        <h2 className="accordion-header" id="heading2">

                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2"
                                aria-expanded="false"
                                aria-controls="collapse2"
                            >
                                Do you provide corporate investigation services?
                            </button>

                        </h2>

                        <div
                            id="collapse2"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading2"
                            data-bs-parent="#faqaccordion"
                        >

                            <div className="accordion-body">
                                <p>
                                    Yes, we offer corporate investigations
                                    including employee verification,
                                    fraud detection, and business
                                    background checks.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* ITEM 3 */}
                    <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="0.4s"
                    >

                        <h2 className="accordion-header" id="heading3">

                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3"
                                aria-expanded="false"
                                aria-controls="collapse3"
                            >
                                How long does an investigation take?
                            </button>

                        </h2>

                        <div
                            id="collapse3"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading3"
                            data-bs-parent="#faqaccordion"
                        >

                            <div className="accordion-body">
                                <p>
                                    Investigation duration depends on the
                                    complexity of the case and evidence
                                    collection requirements.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>
    
   
    <div className="cta-box">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="cta-box-content">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Contact CyberKovai</h3>
                            <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">    Need confidential investigation support? <span>We're here to help</span>
</h2>
    <p className="wow fadeInUp" data-wow-delay="0.4s">
    Speak with our professional investigation team today for trusted and confidential detective services.
</p>
                        </div>

                        <div className="cta-box-list wow fadeInUp" data-wow-delay="0.6s">
                            <ul>
                                <li>Dedicated Support Team</li>
                                <li>Fast and Reliable Assistance</li>
                                <li>Multiple Ways to Reach Us</li>
                            </ul>
                        </div>

                        <div className="subscribe-form wow fadeInUp" data-wow-delay="0.8s">
                            <form id="newsletterForm" action="#" method="POST">
                                <div className="form-group">
                                    <Link to="/contact"  className="btn-default">Contact Us</Link>
                                </div>
                            </form>
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

export default Home;