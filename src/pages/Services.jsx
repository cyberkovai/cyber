import staricon from  "../assets/images/star-icon.svg";
import icon1 from "../assets/images/icon-service-1.svg";
import icon2 from "../assets/images/icon-service-1.svg";
import icon3 from "../assets/images/icon-service-1.svg";
import icon4 from "../assets/images/icon-service-1.svg";
import icon5 from "../assets/images/icon-service-1.svg";
import icon6 from "../assets/images/icon-service-1.svg";
import icon7 from "../assets/images/icon-service-1.svg";
import icon8 from "../assets/images/icon-service-1.svg";
import icon9 from "../assets/images/icon-service-1.svg";
import icon10 from "../assets/images/icon-service-1.svg";
import icon11 from "../assets/images/icon-service-1.svg";
import icon12 from "../assets/images/icon-service-1.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import  serviceImg1 from "../assets/images/panel_1.png";
import  serviceImg2 from "../assets/images/reimage_2.png";

import  serviceImg3 from "../assets/images/panel_3.png";
import  serviceImg4 from "../assets/images/reimage_4.webp";
import  serviceImg5 from "../assets/images/reimage_5.png";
import  serviceImg6 from "../assets/images/reimage_6.webp";
import  serviceImg7 from "../assets/images/reimage_7.webp";


function Services() {

      useEffect(() => {
          window.scrollTo(0, 0);
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
						<h1 className="wow fadeInUp" data-cursor="-opaque">Our <span>services</span></h1>
						<nav className="wow fadeInUp" data-wow-delay="0.2s">
                            <ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to='/'>home</Link></li>
								<li className="breadcrumb-item active" aria-current="page">services</li>
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

<div className="page-services">
  <div className="container">
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



  </>;
}

export default Services;