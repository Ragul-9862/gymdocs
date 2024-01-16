import React, { useState } from "react";
import { FiAlignCenter, FiX } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import Backtotopbutton from "../Backtotopbutton/Backtotopbutton";

export default function Tito() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
    <nav className={`navbar navbar-expand-lg ${toggle ? "" : "navbar-expanded"} fixed-top navbar-no-bg`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            F7
          </a>
          <button
            onClick={handleToggle}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {toggle ? (
              <FiAlignCenter className="icon-toggle" />
            ) : (
              <FiX className="icon-toggle" />
            )}
          </button>
          <div className={`collapse navbar-collapse ${toggle ? "" : "show"}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="ms-auto">
              <a className="icon-main nav-link" href="#">
                BECOME A MEMBER
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section id="hero" class="d-flex align-items-center justify-content-center">
    <div class="container" data-aos="fade-up">

      <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div class="col-xl-8 col-lg-7">
          <div className="hero__caption">
          <span>with patrick potter</span>
          <h1>Build Perfect body Shape for good and Healthy life.</h1>
          <a className='icon-main-intro nav-link'>  BECOME A MEMBER</a>
          </div>
        
        </div>
        <div className="col-xl-4 col-lg-5 d-flex justify-content-center">
        <a className='icon-play' href="https://www.youtube.com/watch?v=up68UAfH0d0">< FaPlay /></a>
        </div>
      </div>
    </div>
  </section>
  <Backtotopbutton/>
    </div>
  );
}
