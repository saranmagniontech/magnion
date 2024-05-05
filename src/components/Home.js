import React from 'react';
import './home.css';
import deals from '../images/deals.png'
import img1 from '../images/img1_lt.png'
import img2 from '../images/img2_lt.png'
import img3 from '../images/img3_lt.png'
import img4 from '../images/img4_lt.png'
import img5 from '../images/img5_lt.png'
import intoelemnt from '../images/intro_element.png'
import Call from '../images/call.png'
import envelope from '../images/envelope.png'
import fb from '../images/fb_meta.png'
import x from '../images/x_twitter.png'
import linkedin from '../images/linkedin.png'
import insta from '../images/instagram.png'
import cityintro from '../images/city_intro.png'
import youtube from '../images/youtube_hm.png'

function Home() {
  return (
    <div>
      <div className="page-container">
        <section className="ejit3_bgf1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 order-2 col-lg-12 col-xl-2 order-xl-1 col-lg-2">
                <div className="mobile_uhg jkhycm1">
                  <div className="homemobile-carousal">
                    <div className="owl-carousel owl-theme">
                      <div className="item">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="img_w">
                              <img src="images/home/WP-1.svg" alt="slider-image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Repeat similar structure for other carousel items */}
                    </div>
                  </div>
                  <div className="homeslide-carousal">
                    <div className="owl-carousel owl-theme">
                      <div className="item">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="img_w">
                              <img src="images/home/WP-5.svg" alt="slider-image" />
                            </div>
                          </div>
                          {/* Repeat similar structure for other carousel items */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-xl-8 order-1 col-lg-12 order-lg-1 col-xl-2">
                <div className="ejit3_f1t1">
                  <h1 className="bullet">Explore the <span className="clrt1">world</span> together</h1>
                </div>
                <div className="ejit3_f1t2">
                  <h2>Stress free Holidays with <strong>Prestige</strong> Clubs and Resorts</h2>
                </div>
                <div className="ejit3_f1bt">
                  <a className="nav-link nav-link-small-screen" href="contact-us.html">
                    <button>Get Membership</button>
                  </a>
                </div>
                <div className="detl_bgf1 card">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="chdw_bgf1">
                        <span>Name *</span>
                        <input type="text" placeholder="Enter Your Name" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="chdw_bgf1">
                        <span>From </span>
                        <input type="text" placeholder="Enter Boarding Place" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="chdw_bgf1">
                        <span>Journey Date</span>
                        <input type="date" placeholder="Choose Journey Date" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="chdw_bgf1">
                        <span>Mobile Number *</span>
                        <input type="text" placeholder="Enter Your Mobile Number" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="chdw_bgf1">
                        <span>To </span>
                        <input type="text" placeholder="Enter Destination Place" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="chdw_bgf1">
                        <span>Passengers Count</span>
                        <input type="text" placeholder="Enter Passengers Count" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="text-center">
                        <button>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-xl-2 order-3 order-lg-2 order-xl-3">
                <div className="ejit3_bgsl">
                  <p><a href="#"><img src={fb} alt="facebook" /></a></p>
                  <p><a href="#"><img src={insta} alt="instagram" /></a></p>
                  <p className="ytubm"><a href="#"><img src={youtube} alt="youtube" /></a></p>
                  <p className="bullet">Social media</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="ejit3_dels1" data-aos="fade-right">
  <img src={deals} alt="deals" />
  <div className="prent_memb">
    <a className="nav-link nav-link-small-screen" href="contact-us.html">
      <button className="membershp">
        Get Membership
      </button>
    </a>
  </div>
</section>


<section className="ejit3_revw">
      <div className="clr6bm"></div>
      <div className="child_rew">
        <div className="row">
          <div className="col-md-12 col-xl-6 align-self-center">
            <div className="types_rew" data-aos="fade-up-right">
              <div className="clrrn1"></div>
              <h2>
                <span className="testim_t1m">
                  <img src={cityintro} alt="intro-image" />
                </span>
                <span className="testim_t2m bullet">Client Reviews</span>
              </h2>
              <h5>Stress free Holidays with <strong>Prestige</strong> Clubs and Resorts</h5>
            </div>
          </div>
          <div className="col-md-12 col-xl-6">
            <div className="clrrn2"></div>
            <div className="review-carousal cmgjy" data-aos="fade-up-left">
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <div className="row">
                    <div className="col-md-12 col-xl-4">
                      <div className="card">
                        <div className="card-body">
                          <img src="images/home/Mr.Muthukumar.svg" alt="review1" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-xl-8">
                      <div className="card">
                        <div className="card-body">
                          <h2 className="bullet">Mr. Muthu Kumar </h2>
                          <p>Place and swimming pool was good. Best thing was we got a best deal with prestige Clubs and Resorts.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repeat similar structure for other review items */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>







    <section className="ejit3_partns">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-xl-7 align-self-center">
            <div className="row">
              <div className="col col-6 col-md text-center">
                <img src={img1} alt="image-1" />
              </div>
              <div className="col col-6 col-md text-center">
                <img src={img2} alt="image-2" />
              </div>
              <div className="col col-6 col-md text-center">
                <img src={img3} alt="image-3" />
              </div>
              <div className="col col-6 col-md text-center">
                <img src={img4} alt="image-4" />
              </div>
              <div className="col col-12 col-md text-center">
                <img src={img5} alt="image-5" />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-5 text-center">
            <h2>
              <span>
                <img src={cityintro} alt="intro-image" />
              </span>
              <span className="cty1_tle bullet">Our Partners</span>
            </h2>
            <h5 className="cty1_tle1">Stress free Holidays with <strong>Prestige</strong> Clubs and Resorts</h5>
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
                    <img src={intoelemnt} alt="intro-img" />
                  </span>
                  <span className="childhd bullet">Get Update & More</span>
                </h3>
                <h6>Thoughtful thoughts to your inbox</h6>
              </div>
            </div>
            <div className="col-md-6 col-sm col-xl-5">
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
                  <img src={intoelemnt} alt="intro-img" />
                </span>
                <span className="childhd">For enquiry</span>
              </h3>
            </div>
            <div className="col-md-4 col-xl-3 col-sm-5 col-lg-3">
              <div className="copyrght">
                <p><img src={Call} alt="call-icon" /> Call us</p>
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
                  <span><a href="#"><img src={fb} alt="facebook" /></a></span>
                  <span><a href="#"><img src={insta} alt="instagram" /></a></span>
                  <span><a href="#"><img src={linkedin} alt="linkedin" /></a></span>
                  <span><a href="#"><img src={x} alt="twitter" /></a></span>
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

export default Home;
