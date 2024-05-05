import React from 'react'
import './navbar.css'
import logo from '../images/logo.png'

import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg">
        <div className="container-xl container-lg">
          <Link className="navbar-brand" to="/">
            <img src={logo} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/packages">Packages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/members">Members</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/success-stories">Success Stories</Link>
              </li>
            </ul>
          </div>
          <div className="large-screen-contact-us">
            <Link className="nav-link" to="/contact-us">
              <button>CONTACT US</button>
            </Link>
          </div>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link nav-link-small-screen" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-small-screen" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-small-screen" to="/packages">Package</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-small-screen" to="/members">Members</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link nav-link-small-screen" to="/success-stories">Success Stories</Link>

                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-small-screen" to="/contact-us">
                    <button>CONTACT US</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  

    </div>
  )
}

export default Navbar

