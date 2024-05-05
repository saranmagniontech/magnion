import React from 'react'
import './about.css'
import frst from '../images/frst_img.png'
import city from '../images/city_intro (1).png'
import mission from '../images/our_mission.png'
import vision from '../images/our_vision.png'
import cityintro from '../images/city_intro (1).png'

function About() {
  return (
    <div>
 <div className="page-container">
      <section className="home_bg1">
        <div className="card">
          <h2 className="bullet">We Ensure Luxury Travel Experience With Your Loved Ones</h2>
        </div>
      </section>
      <section className="we_bhtg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="phgv" data-aos="zoom-out-up">
                <h2>
                  <span>
                    <img src={city} alt="intro-image" />
                  </span>
                  <span className="cty1_tle bullet">Who We Are?</span>
                </h2>
                <p>
                  The Prestige Clubs & Resorts group is the India’s Leading<br />
                  Leisure hospitality group with core activities in scheduling a<br />
                  in flations free holidays,reliability and trust to its member<br />
                  through Prestige Clubs and Resorts. Property Service in continuing<br />
                  our legacy if innovation and we are creating opportunity<br />
                  through Prestige home and estate.
                </p>
              </div>
            </div>
            <div className="col-md-6 align-self-center text-center">
              <div className="we_nhucl"></div>
              <img src={frst} alt="who-we-are" className="banner_im" data-aos="zoom-in-up" />
            </div>
          </div>
        </div>
      </section>





      <div>
      <section className="we_hbmvac" data-aos="fade-up" data-aos-anchor-placement="top-center">
        <div className="container">
          <h2>
            <span>
              <img src={city} alt="intro-image" />
            </span>
            <span className="cty1_tle bullet">We Are Prestige Clubs and Resorts</span>
          </h2>
          <p>To be the company that best understands and satisfies the need of its members - globally.</p>
          <div className="row">
            <div className="col-md-3 col-6">
              <h2>14000+</h2>
              <p>Members</p>
            </div>
            <div className="col-md-3 col-6">
              <h2>1748</h2>
              <p>Listed Property</p>
            </div>
            <div className="col-md-3 col-6">
              <h2>4287</h2>
              <p>Destinations</p>
            </div>
            <div className="col-md-3 col-6">
              <h2>28457</h2>
              <p>Bookings</p>
            </div>
          </div>
        </div>
      </section>
      <section className="list_shgb" data-aos="fade-up" data-aos-anchor-placement="top-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="text-center">
                <img src={mission} alt="our-vision" />
                <h2 className="bullet">Our Vision</h2>
                <p>To be the company that best understands and satisfies the need of its members - globally.</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="text-center">
                <img src={vision} alt="our-mission" />
                <h2 className="bullet">Our Mission</h2>
                <p>Quality can compromise the price for our prestigious members. To provide the quality and prestigious holidays to our members</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="list_become">
      <div className="card" data-aos="zoom-in-up">
        <h2>
          <span>
            <img src={cityintro } alt="intro-image" />
          </span>
          <span className="cty1_tle bullet">Become A Franchisee</span>
        </h2>
        <p>We are Heartly welcome to Prestige Clubs & Resorts.. we invite you to join with us as a business partner. ” The prestige clubs and resorts key value is “we work together, we will grow together..</p>
        <div className="text-center">
          <a className="nav-link nav-link-small-screen" href="contact-us.html">
            <button>Lets Connect</button>
          </a>
        </div>
      </div>
    </section>
    </div>
    </div>




    </div>
  )
}

export default  About
