import React from "react";
import "./Specialist.scss";

function Specialist() {
  return (
    <div>
      <section className="container">
        <div className="specialist">
          <div className="specialist-heading">
            <div className="s-header">
              <h1>25+ Specialities</h1>
              <p>Consult with top doctors across specialities</p>
            </div>
            <div className="s-button">
              <button>See all Specialities</button>
            </div>
          </div>
          <div className="specialist-body">
            <div className="row">
              <div className="col-md-2">
                <div className="gynace card">
                  <div className="specialist-logo">
                    <img
                      className="specialistlogo1"
                      src="https://www.ehnote.com/images/inner-pages/gynaecology-1.png"
                      alt=""
                    />
                  </div>
                  <div className="specialist-desc">
                    <h5>Gynaecology</h5>
                    <p>Rs 499</p>

                  </div>
                  <div className=" specialist-contact-btn">
                    <button>Consult now</button>

                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="gynace card">
                  <div className="specialist-logo">
                    <img
                      className="specialistlogo1"
                      src="https://www.drnaveenprakashverma.com/drlogo.png"
                      alt=""
                    />
                  </div>
                  <div className="specialist-desc">
                    <h5>physician</h5>
                    <p>Rs 499</p>

                  </div>
                  <div className=" specialist-contact-btn">
                    <button>Consult now</button>

                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="gynace card">
                  <div className="specialist-logo">
                    <img
                      className="specialistlogo1"
                      src="https://zolieskinclinic.com/wp-content/uploads/2014/04/cosmetic-dermatology.png"
                      alt=""
                    />
                  </div>
                  <div className="specialist-desc">
                    <h5>Dermatology</h5>
                    <p>Rs 499</p>

                  </div>
                  <div className=" specialist-contact-btn">
                    <button>Consult now</button>

                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="gynace card">
                  <div className="specialist-logo">
                    <img
                      className="specialistlogo1"
                      src="https://www.metropeds.com/wp-content/uploads/MetroPeds_Icons-08-1-600x300.png"
                      alt=""
                    />
                  </div>
                  <div className="specialist-desc">
                    <h5>Pediatrics</h5>
                    <p>Rs 499</p>

                  </div>
                  <div className=" specialist-contact-btn">
                    <button>Consult now</button>

                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="gynace card">
                  <div className="specialist-logo">
                    <img
                      className="specialistlogo1"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-digestion-stomach-getroenterology-organ-healthcare-medical-gestro-7-20150.png"
                      alt=""
                    />
                  </div>
                  <div className="specialist-desc">
                    <h5>Stomach </h5>
                    <p>Rs 399</p>

                  </div>
                  <div className=" specialist-contact-btn">
                    <button >Consult now</button>

                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="gynace card">
                  <div className="specialist-logo">
                    <img
                      className="specialistlogo1"
                      src="https://static.wixstatic.com/media/6c72f1_da7fdcc54cbd4a4fa2499b103a3cdcde~mv2.png/v1/fill/w_340,h_340,al_c,lg_1,q_85,enc_auto/urology-icon-c.png"
                      alt=""
                    />
                  </div>
                  <div className="specialist-desc">
                    <h5>Urology</h5>
                    <p>Rs 499</p>

                  </div>
                  <div className=" specialist-contact-btn">
                    <button>Consult now</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Specialist;
