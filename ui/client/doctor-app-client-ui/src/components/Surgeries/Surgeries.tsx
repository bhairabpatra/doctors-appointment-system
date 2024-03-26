import React from "react";
import "./Surgeries.scss";
function Surgeries() {
  return (
    <div>
      <div className="section ">
        <div className="surgeries">
          <div className="surgeries-banner">
            <div className="row">
              <div className="col-md-6">
                <div className="surgeries-banneer-img">
                  <img
                    className="surgeries-bannerimg1"
                    src="https://www.practostatic.com/practo-care/brand_page/images/dweb_doctor_banner.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="surgeries-banner-text">
                  <h1>
                    <b>
                      End to end care from Top Surgeons
                      <br />
                      at our Practo Care Clinics
                    </b>
                  </h1>
                  <p>
                    Talk to our care expert today to book your consultation.
                  </p>
                  <p>All insurance accepted & No-cost EMI available.</p>

                  <div className="icons">
                    <li>Reach out to us on | 08045685554</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Surgeries;
