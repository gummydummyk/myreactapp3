import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <section className="hero section">
          <div className="divider svg_white">
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
            </svg>
          </div>
        </section>
        <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src={require('../../assets/images/abt-left-thumb.jpg')} alt="Image1" />
                </div>
                <div className="col-md-6">
                  <div className="section-title">
                      <h2>About Us</h2>
                  </div>
                  <p className="section-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.</p>

                  <div className="progress-title">PHOTOSHOP - <span>90%</span></div>
                  <div className="progress custom-progress">
                    <div className="progress-bar progress-bar-black" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>

                  <div className="progress-title">FINAL CUT - <span>80%</span></div>
                  <div className="progress custom-progress">
                    <div className="progress-bar progress-bar-black" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>

                  <div className="progress-title">STUDIO PHOTOGRAPHY - <span>70%</span></div>
                  <div className="progress custom-progress">
                    <div className="progress-bar progress-bar-black" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>

                  <div className="progress-title">MOTION VIDEO - <span>90%</span></div>
                  <div className="progress custom-progress">
                    <div className="progress-bar progress-bar-black" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>

                </div>
              </div>   
            </div>
        </section>

        <section className="section" style={{paddingBottom: "200px"}}>
            <div className="container">
                <div className="section-title section-title-center">
                  <h2>Services</h2>
                  <p>awesome features</p>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="col-wrapper">
                      <div className="col-content service">
                          <i className="fa fa-laptop" aria-hidden="true"></i>
                          <h4>Portraits</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="col-wrapper">
                      <div className="col-content service">
                          <i className="fa fa-laptop" aria-hidden="true"></i>
                          <h4>Portraits</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="col-wrapper">
                      <div className="col-content service">
                          <i className="fa fa-laptop" aria-hidden="true"></i>
                          <h4>Portraits</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's.</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-100 mb-1"></div>
                  <div className="col-md-4">
                    <div className="col-wrapper">
                      <div className="col-content service">
                          <i className="fa fa-laptop" aria-hidden="true"></i>
                          <h4>Portraits</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="col-wrapper">
                      <div className="col-content service">
                          <i className="fa fa-laptop" aria-hidden="true"></i>
                          <h4>Portraits</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="col-wrapper">
                      <div className="col-content service">
                          <i className="fa fa-laptop" aria-hidden="true"></i>
                          <h4>Portraits</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="divider svg_gray">
              <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                  <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
              </svg>
            </div>
        </section>
        <section className="section bg-gray" style={{paddingBottom: "200px"}}>
          <div className="container">
            <div className="section-title section-title-center">
              <h2 className="text-grey">Our Works</h2>
              <p>see what we have done for our happy clients</p>
            </div>
            
            <div className="row">
              <div className="col-md-4">
                  <div className="testimonials">
                    <img src={require('../../assets/images/img3.jpg')} alt="Logo1" />
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="testimonials">
                    <img src={require('../../assets/images/img3.jpg')} alt="Logo2" />
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="testimonials">
                    <img src={require('../../assets/images/img3.jpg')} alt="Logo3" />
                  </div>
              </div>
            </div>
            <div className="divider svg_white">
              <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                  <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
              </svg>
            </div>
          </div>
        </section>

        <section className="section" style={{paddingBottom: "200px"}}>
          <div className="container">
            <div className="section-title section-title-center">
              <h2>Packages</h2>
              <p>our pricing & plans</p>
            </div>

            <div className="row">
              <div className="col-md-4 price-table">
                <div className="price-box">
                  <h5>Growth</h5>
                  <h1><sup>$</sup>19</h1>
                  <div className="price-features">
                    <p className="lead">75,000 Visits</p>
                    <p>Email Support</p>
                    <p>24/7 Free Support</p>
                    <p>5GB Bandwidth</p>
                  </div>
                  <a href="/contact" className="btn btn-appear">Sign Up Now</a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="price-box shadow">
                  <h5>Growth</h5>
                  <h1><sup>$</sup>19</h1>
                  <div className="price-features">
                    <p className="lead">75,000 Visits</p>
                    <p>Email Support</p>
                    <p>24/7 Free Support</p>
                    <p>5GB Bandwidth</p>
                  </div>
                  <a href="/contact" className="btn btn-appear">Sign Up Now</a>
                </div>
              </div>

              <div className="col-md-4 price-table">
                <div className="price-box">
                <h5>Growth</h5>
                <h1><sup>$</sup>19</h1>
                <div className="price-features">
                  <p className="lead">75,000 Visits</p>
                  <p>Email Support</p>
                  <p>24/7 Free Support</p>
                  <p>5GB Bandwidth</p>
                </div>
                <a href="/contact" className="btn btn-appear">Sign Up Now</a>
                </div>
              </div>

            </div>
            <div className="divider svg_gray">
              <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                  <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
              </svg>
            </div>
          </div>
        </section>

        <section className="section bg-gray" style={{paddingBottom: "200px"}}>
          <div className="container">
            <div className="section-title section-title-center">
              <h2 className="text-grey">Testimonials</h2>
              <p>what people says about us</p>
            </div>

            <div className="quote">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
            </div>  
          </div>

          <div className="divider svg_white">
              <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                  <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
              </svg>
          </div>
        </section>

        <section className="section" style={{paddingBottom: "200px"}}>
          <div className="container">
            <div className="section-title section-title-center">
              <h2>Contact Us</h2>
              <p>get in touch</p>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="col-wrapper">
                  <div className="col-content">
                      <i className="fa fa-mobile" aria-hidden="true"></i>
                      <h4>Portraits</h4>
                      <p>+91 (000) 123 123</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-wrapper">
                  <div className="col-content">
                      <i className="fa fa-mobile" aria-hidden="true"></i>
                      <h4>Portraits</h4>
                      <p>+91 (000) 123 123</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-wrapper">
                  <div className="col-content">
                      <i className="fa fa-mobile" aria-hidden="true"></i>
                      <h4>Portraits</h4>
                      <p>+91 (000) 123 123</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Contact;
