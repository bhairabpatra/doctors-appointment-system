import React from "react";
import "./Common.scss";

function Header() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid navbar-color">
          <a className="navbar-brand" href="#">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/en/6/64/Practo_new_logo.png"
              alt=""
            />
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Find Doctors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Video Consult
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Medicines
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-color" href="#">
                Lab Tests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-color" href="#">
                Surgeries
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
