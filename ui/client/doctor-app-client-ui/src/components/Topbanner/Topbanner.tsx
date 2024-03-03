import React from "react";
import "./Topbanner.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Topbanner() {
  return (
    <div>
      <section>
        <div className="banner">
          <div className="banneer-img">
            <img
              className="bannerimg1"
              src="https://www.practo.com/consult/static/images/homepage-hero-image-mweb-v1.png"
              alt=""
            />
          </div>
          <div className="banner-text">
            <h2>
              Skip the travel! <br />
              Take Online Doctor Consultation
            </h2>
            <p>Private consultation + Audio call · Starts at just ₹199</p>
            <button className="btn btn-lg">
              <b>Consult Now</b>
            </button>
            <div className="icons">
            <ul>
               <li>{/*<FontAwesomeIcon icon="fa-solid fa-badge-check" />*/}Verified Doctors</li> 
              <li>Digital Prescription</li>
              <li>Free Followup</li>
            </ul>
          </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Topbanner;
