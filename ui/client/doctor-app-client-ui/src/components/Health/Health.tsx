import React from "react";
import "./Health.scss";

function Health() {
  return (
    <div>
      <section className="container-fluid health-problems" >
        <div className=" container common-health-problems">
          <div className="common-health-heading">
            <div className="common-health-header">
              <h1>Common Health Concerns</h1>
              <p>Consult a doctor online for any health issue</p>
            </div>
            <div className="common-health-button">
              <button>See all Symptoms</button>
            </div>
          </div>

          <div className="common-health-body">
            <div className="row">
              <div className="col-md-3">
                <div className="problems">
                  <div className="problems-logo">
                    <img
                      className="problemslogo1"
                      src="https://imageio.forbes.com/specials-images/imageserve/64f566db8de76dab531e813e/The-stress-and-tension-are-becoming-too-much-to-handle/960x0.jpg?format=jpg&width=960"
                      alt=""
                    />
                  </div>
                  <div className="problems-desc">
                    <h5>Depression or anxiety?</h5>
                    <p>Rs 499</p>
                  </div>
                  <div className="problems-contact-btn">
                    <button>Consult now</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="problems">
                  <div className="problems-logo">
                    <img
                      className="problemslogo1"
                      src="https://images.news18.com/ibnlive/uploads/2021/10/shutterstock_1220319118-1-16336959583x2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="problems-desc">
                    <h5>Want to lose weight?</h5>
                    <p>Rs 350</p>
                  </div>
                  <div className="problems-contact-btn ">
                    <button>Consult now</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="problems">
                  <div className="problems-logo">
                    <img
                      className="problemslogo1"
                      src="https://static.foxnews.com/foxnews.com/content/uploads/2018/09/55e25426-394_Stomachache.jpg"
                      alt=""
                    />
                  </div>
                  <div className="problems-desc">
                    <h5>Stomach issues?</h5>
                    <p>Rs 399</p>
                  </div>
                  <div className="problems-contact-btn">
                    <button>Consult now</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="problems">
                  <div className="problems-logo">
                    <img
                      className="problemslogo1"
                      src="https://dermatologyandlasergroup.com/wp-content/uploads/2018/06/skin-disorders-600x400.jpg"
                      alt=""
                    />
                  </div>
                  <div className="problems-desc">
                    <h5>Skin problems?</h5>
                    <p>Rs 449</p>
                  </div>
                  <div className="problems-contact-btn">
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

export default Health;
