import React from 'react'

export default function Margin() {
  return (
    <div>
     <header id="header" className="fixed-top ">
  <div className="container d-flex align-items-center justify-content-lg-between">
    <h1 className="logo me-auto me-lg-0"><a href="index.html">Gp<span>.</span></a></h1>
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a className="nav-link scrollto" href="#about">About</a></li>
        <li><a className="nav-link scrollto" href="#services">Services</a></li>
        <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
        <li><a className="nav-link scrollto" href="#team">Team</a></li>
        <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 2</a></li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
          </ul>
        </li>
        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
    <a href="#about" className="get-started-btn scrollto">Get Started</a>
  </div>
</header>

    </div>
  )
}
