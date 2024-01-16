import React, { useState } from "react";
import { FiAlignCenter } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);
  const handletoggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand mb-4" href="#">
            F7
          </a>
          <button
            onClick={handletoggle}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {toggle ? (
              <FiAlignCenter className="icon-toggle" />
            ) : (
              <FiX className="icon-toggle" />
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  GALLERY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  EVENTS
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <div className="icon-main">BECOME A MEMBER</div>
            </div>
          </div>
        </div>
      </nav>
      <section className=" d-flex justify-content-center align-items-center " id="hero">
        <div className="container">
          <div className="row justify-content-center align-items-center ">
            <div className="col-xl-8 col-lg-6 col-md-5 col-sm-12"></div>
            <div className="col-xl-4 col-lg-6 col-md-3 col-sm-12"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
