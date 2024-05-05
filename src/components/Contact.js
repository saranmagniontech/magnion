import React from 'react';
import './contact.css'
import intro from '../images/intro_element.png'
import fb from '../images/fb_meta.png'
import x from '../images/x_twitter.png'
import linkedin from '../images/linkedin.png'
import insta from '../images/instagram.png'
import layer from '../images/layer_hn.png'
import call from '../images/call.png'
import envelope from '../images/envelope.png'



function Contact() {
  return (
    <div>
<section className="bg_kjjh1">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="card">
                <span className="kjjh1_m"><img src={layer} alt="icon" /></span>
                <h3>Regional Office</h3>
                <p>139, 3rd floor, Arihant V.T.N Presidency, N Usman Rd, T. Nagar, Chennai</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card">
              <span className="kjjh1_m"><img src={layer} alt="icon" /></span>
                <h3>Corporate Office</h3>
                <p>139, 1st floor, Arihant V.T.N Presidency, N Usman Rd, T. Nagar, Chennai</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card">
                <span className="kjjh1_m"><img src={layer} alt="icon" /></span>
                <h3>Branch Office 1</h3>
                <p>1A, Adithya building, 3rd floor, Taramani link road, Velacherry, Chennai</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card">
            <span className="kjjh1_m"><img src={layer} alt="icon" /></span>
                <h3>Branch Office 2</h3>
                <p>2/150, Trunk road, Mount poonamalle road, Kattupakkam, Chennai</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg_kjh">
        <div className="card">
          <h2 className="bullet text-center"><img src={intro} alt="intro-img" /><span className="cty1_tle bullet">Get In Touch</span></h2>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Enter Your Name" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Enter Your Age" />
              </div>
            </div>
            <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12">
              <div className="row">
                <div className="col-md-6 col-xl-6 col-sm-12">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Email Id" />
                  </div>
                </div>
                <div className="col-md-6 col-xl-6 col-sm-12">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Mobile No" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-12">
              <div className="mb-3">
                <textarea name="message" id cols="30" rows="5" className="form-control" placeholder="Leave A Message"></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mt-2 text-center">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container-xl erhgijmw">
          <div className="foot1">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xl-6">
                <div className="stylecnt">
                  <h3 className="headw">
                    <span className="roundyn">
                      <img src={intro} alt="intro-img" />
                    </span>
                    <span className="childhd bullet">Get Update & More</span>
                  </h3>
                  <h6>Thoughtful thoughts to your inbox</h6>
                </div>
              </div>
              <div className="col-md-6  col-sm- col-xl-5">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Enter email address" />
                  <div className="input-group-append">
                    <span className="input-group-text">SUBSCRIBE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="foot2">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <h2>Contact</h2>
                <a href="about-us.html"><p>About Us</p></a>
                <a href="success-story.html"><p>Testimonials</p></a>
                <a href="packages.html"><p>Packages</p></a>
                <a href="members.html"><p>Members</p></a>
              </div>
              <div className="col-md-4 n2g col-sm-6">
                <h2>Entire city of choice</h2>
                <a href="view-package.html"><p>Ooty</p></a>
                <a href="view-package.html"><p>Kodaikanal</p></a>
                <a href="view-package.html"><p>Yercaud</p></a>
                <a href="view-package.html"><p>Mahabalipuram</p></a>
              </div>
              <div className="col-md-4 n3g col-sm-6">
                <h2>Support</h2>
                <a href="contact-us.html"><p>FAQ</p></a>
                <a href="contact-us.html"><p>Contact</p></a>
                <a href="contact-us.html"><p>Privacy Policy</p></a>
              </div>
            </div>
          </div>
          <div className="foot3">
            <div className="row">
              <div className="col-md-4 col-xl-3 col-sm-7 col-lg-2 align-self-center">
                <h3 className="headw">
                  <span className="roundyn">
                    <img src={intro} alt="intro-img" />
                  </span>
                  <span className="childhd">For enquiry</span>
                </h3>
              </div>
              <div className="col-md-4 col-xl-3 col-sm-5 col-lg-3">
                <div className="copyrght">
                  <p><img src={call} alt="call-icon" /> Call us</p>
                  <a href="tel:+1800 121 3457">1800 121 3457</a>
                </div>
              </div>
              <div className="col-md-4 col-xl-4 col-sm-7 col-lg-4">
                <div className="copyrght">
                  <p><img src={envelope} alt="email-icon" /> Email us</p>
                  <a href="mailto:info@prestigevacations.in">info@prestigevacations.in</a>
                </div>
              </div>
              <div className="col-md-4 col-xl-2 col-sm-5 col-lg-3">
                <div className="social_ftr">
                  <p>Follow Us</p>
                  <div>
                    <span>
                      <a href="#"><img src={fb} alt="facebook" /></a>
                    </span>
                    <span>
                      <a href="#"><img src={insta} alt="instagram" /></a>
                    </span>
                    <span>
                      <a href="#"><img src={linkedin} alt="linkedin" /></a>
                    </span>
                    <span>
                      <a href="#"><img src={x} alt="twitter" /></a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pb-4">
            <small>Copyright © 2022 <span className="text-warning">Prestige Clubs and Resorts</span></small>
          </div>
        </div>
      </footer>
    </div>





    
  );
}

export default Contact;
