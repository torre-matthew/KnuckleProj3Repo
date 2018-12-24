import React from "react";
import "./style.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">☰</button>
            <a className="navbar-brand" href="#home">
              <img src="img/logo.png" alt="" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav menu navbar-nav ml-auto">
              <li className="nav-item current-menu-item"><a href="#home" className="nav-link">Home</a>
              </li>
              <li className="nav-item"><a href="#about" className="nav-link">About</a>
              </li>
              <li className="nav-item"><a href="#product" className="nav-link">products</a>
              </li>
              <li className="nav-item"><a href="#prices" className="nav-link">prices</a>
              </li>
              <li className="nav-item"><a href="#gallery" className="nav-link">gallery</a>
              </li>
              <li className="nav-item"><a href="#faq" className="nav-link">FAQ´s</a>
              </li>
              <li className="nav-item"><a href="#testimonials" className="nav-link">Testimonials</a>
              </li>
              <li className="nav-item"><a href="#app" className="nav-link">App</a>
              </li>
              <li className="nav-item"><a href="#contact" className="nav-link"><span className="fa fa-pencil-square-o"></span></a>
              </li>
            </ul>
          </div>
          </div>
        
    </nav>
  );
}

export default Header;
