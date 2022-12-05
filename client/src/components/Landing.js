import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { WOW } from "wowjs";
import * as actions from "../actions";
import "../css/common.css";

class Landing extends Component {
  componentDidMount() {
    const slider = document.querySelector(".slider");
    M.Slider.init(slider, {
      indicators: false,
      transition: 500,
      interval: 6000,
      height: 530,
    });

    const mb = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(mb, {});

    new WOW().init();
  }

  render() {
    return (
      <div>
        <section
          className="slider"
          style={{ marginTop: "-23px", zIndex: -999 }}
        >
          <ul className="slides">
            <li>
              <img
                style={{ opacity: 0.8 }}
                src={require("../images/notebook-and-coffee.jpg")}
                alt="resort"
              />
              <div className="caption right-align">
                <h3 style={{ fontFamily: "cursive", color: "gold" }}>
                  Do More with Less.
                </h3>
                <h5
                  className="light text-lighten-3 hide-on-small-only"
                  style={{ fontFamily: "'Open Sans', sans serif" }}
                >
                  {" "}
                  Treat your subject line like the movie trailer – give a
                  preview so they know what to expect.{" "}
                </h5>
              </div>
            </li>

            <li>
              <img
                style={{ opacity: 0.7 }}
                src={require("../images/email-4284157_1280.png")}
                alt="resort"
              />
              <div className="caption center-align">
                <h3 style={{ fontFamily: "cursive", color: "gold" }}>
                  Collect feedback from your users.
                </h3>
                <h5
                  className="light text-lighten-3 hide-on-small-only"
                  style={{ fontFamily: "'Open Sans', sans serif" }}
                >
                  Make the customer the hero of your story.
                </h5>
                <h5
                  className="light text-lighten-3 hide-on-small-only"
                  style={{ fontFamily: "'Open Sans', sans serif" }}
                >
                  People don’t buy what you do, they buy why you do it.
                </h5>
              </div>
            </li>

            <li>
              <img src={require("../images/slider2.jpg")} alt="resort" />
              <div className="caption left-align">
                <h3 style={{ fontFamily: "cursive", color: "gold" }}>
                  The best marketing doesn’t feel like marketing.
                </h3>
                <h5
                  className="light grey-text text-lighten-3 hide-on-small-only"
                  style={{ fontFamily: "'Open Sans', sans serif" }}
                >
                  Good Marketing makes the company look smart. Great Marketing
                  makes the customer feel smart.
                </h5>
              </div>
            </li>
          </ul>
        </section>
        <section id="popular" className="section section-popular">
          <div className="container">
            <div className="row">
              <h4 className="center">
                <span className="indigo-text text-darken-1">Emaily</span> Guides
              </h4>
              <div className="col s12 m4 wow zoomIn">
                <div className="card z-depth-4">
                  <div className="card-image">
                    <img
                      src={require("../images/laptop-from-above.jpg")}
                      alt="sunset"
                    />
                  </div>

                  <div className="card-content">
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: "bold",
                      }}
                    >
                      Now a simple email can deliver the same personalized
                      experience to the user that he had while browsing your
                      site. Make the most of every email and increase click
                      through rates with in-built A/B testing and integrated
                      predictive intelligence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col s12 m4 wow zoomIn">
                <div className="card z-depth-4">
                  <div className="card-image">
                    <img
                      src={require("../images/macbook-air-on-desk.jpg")}
                      alt="sunset"
                    />
                  </div>

                  <div className="card-content">
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: "bold",
                      }}
                    >
                      How can you optimize something you can't measure? With
                      Emaily, enjoy heat maps to know precisely where your
                      contacts click, geographic reporting, know exactly what
                      contacts opened, clicked or interacted with your emails.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col s12 m4 wow zoomIn">
                <div className="card z-depth-4">
                  <div className="card-image">
                    <img
                      src={require("../images/photography-product-download.jpg")}
                      alt="sunset"
                    />
                  </div>

                  <div className="card-content">
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: "bold",
                      }}
                    >
                      Our customers have experienced a growth of over 30% by
                      optimizing their campaigns to be delivered during the
                      user’s moments of influence. <br />
                      Our Performance Tracking technique is very useful for
                      sending E-mail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-follow indigo darken-1 white-text center">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h4>Follow Emaily</h4>
                <p
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: "bold",
                  }}
                >
                  Follow us on social media for other Guides
                </p>
                <a href="#" className="white-text">
                  <i className="fab fa-facebook fa-4x"></i>
                </a>
                <a href="#" className="white-text">
                  <i className="fab fa-twitter fa-4x"></i>
                </a>
                <a href="#" className="white-text">
                  <i className="fab fa-instagram fa-4x"></i>
                </a>
                <a href="#" className="white-text hide-on-small-only">
                  <i className="fab fa-google-plus fa-4x"></i>
                </a>
                <a href="#" className="white-text">
                  <i className="fab fa-pinterest fa-4x"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="section section-gallery">
          <div className="container">
            <h4 className="center">
              <span className="indigo-text text-darken-1">Photo</span> Gallery
            </h4>
            <br />
            <div className="row wow fadeInUp">
              <div
                className="col s12 m6"
                style={{ padding: "0 0.75rem 0.75rem 0.75rem" }}
              >
                <img
                  src={require("../images/2.png")}
                  className="materialboxed responsive-img z-depth-3"
                />
              </div>

              <div className="col sm12 m6">
                <img
                  src={require("../images/Email-Marketing-Apps-2020.png")}
                  className="materialboxed responsive-img z-depth-3"
                />
              </div>
            </div>
            <div className="row wow fadeInUp">
              <div
                className="col s12 m6"
                style={{ padding: "0 0.75rem 0.75rem 0.75rem" }}
              >
                <img
                  src={require("../images/1.jpg")}
                  className="materialboxed responsive-img z-depth-3"
                />
              </div>

              <div className="col sm12 m6">
                <img
                  src={require("../images/emailmarketingguide.png")}
                  className="materialboxed responsive-img z-depth-3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section section-testimonial grey lighten-4 center">
          <div className="container">
            <h4 className="center">
              <span className="indigo-text text-darken-1">User</span>{" "}
              Testimonials
            </h4>
            <br />
            <div className="row">
              <div className="col s12 m4 wow zoomIn">
                <div className="card-panel z-depth-3">
                  <img
                    src={require("../images/customer-1.jpg")}
                    className="responsive-img circle z-depth-2"
                    alt="customer"
                  />
                  <h6>
                    <b>Happy Customer</b>
                  </h6>
                  <p style={{ fontFamily: "cursive", fontWeight: "bold" }}>
                    <i className="fas fa-quote-left"></i> Emaily allows you to
                    approach the review process more like an outbound marketing
                    tactic. You don't have to be pushy and annoying. You can,
                    however, use email to get review forms in front of your
                    customer's face at just the right time.
                  </p>
                  <i className="fa fa-star"> </i>
                  <i className="fa fa-star"> </i>
                  <i className="fa fa-star"> </i>
                  <i className="fa fa-star"> </i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>

              <div className="col s12 m4 wow zoomIn">
                <div className="card-panel z-depth-3">
                  <img
                    src={require("../images/Andre.jpeg")}
                    className="responsive-img circle z-depth-2"
                    alt="customer"
                  />
                  <h6>
                    <b>Happy Customer</b>
                  </h6>
                  <p style={{ fontFamily: "cursive", fontWeight: "bold" }}>
                    <i className="fas fa-quote-left"></i> Sending automated
                    emails based on custom events on third-party services. It's
                    amazing how you can trigger workflows via the API and it
                    makes it really easy to create automated workflows , which
                    saves a lot of time.
                  </p>
                  <i className="fa fa-star"> </i>
                  <i className="fa fa-star"> </i>
                  <i className="fa fa-star"> </i>
                  <i className="fa fa-star"> </i>
                  <i className="fa fa-star"> </i>
                </div>
              </div>

              <div className="col s12 m4 wow zoomIn">
                <div className="card-panel z-depth-3">
                  <img
                    src={require("../images/customer-3.jpg")}
                    className="responsive-img circle z-depth-2"
                    alt="customer"
                  />
                  <h6>
                    <b>Happy Customer</b>
                  </h6>
                  <p style={{ fontFamily: "cursive", fontWeight: "bold" }}>
                    <i className="fas fa-quote-left"></i> Emaily is good for
                    collecting reviews. We decided to automate our email
                    marketing efforts and after careful deliberations we chose
                    Emaily because its affordable, has a onboarding experience.
                    Setting & running campaigns is a breeze.
                  </p>
                  <i className="fa fa-star"> </i>
                  <i className="fa fa-star"> </i>
                  <i className="fa fa-star"> </i>
                  <i className="fa fa-star"> </i>
                  <i className="fa fa-star"> </i>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="col s12 m6">
              <img
                className="left responsive-image"
                style={{
                  width: "300px",
                  height: "auto",
                  marginRight: "40px",
                  marginBottom: "40px",
                  marginTop: "40px",
                }}
                src={require("../images/hero-lg2.png")}
                alt="image"
              />
              <div style={{ marginBottom: "100px", paddingTop: "50px" }}>
                <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                  📈 Advanced reporting
                </p>
                <p
                  style={{
                    fontFamily:
                      "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Get detailed reports of open rates, click rates, &
                  conversions. Optimize your email copy with click heatmaps &
                  improve your automation scenarios with detailed workflow
                  statistics.
                </p>

                <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                  📇 Unlimited contacts, unlimited contact attributes
                </p>
                <p
                  style={{
                    fontFamily:
                      "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Unlike most, Sendinblue allows you to store as many contacts
                  and as much information as you want, while helping you stay
                  GDPR compliant, for free! More data, more optimiization
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="black page-footer orange">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4">
                  We are a team of college students working on this project like
                  it's our full time job. Any amount would help support and
                  continue development on this project and is greatly
                  appreciated.
                </p>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Settings</h5>
                <ul>
                  <li>
                    <a className="white-text" href="/">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="white-text" href="/">
                      Survey New
                    </a>
                  </li>
                  <li>
                    <a className="white-text" href="/">
                      Survey Review
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li>
                    <a className="white-text" href="#!">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a className="white-text" href="#!">
                      Google
                    </a>
                  </li>
                  <li>
                    <a className="white-text" href="#!">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a className="white-text" href="#!">
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Made by
              <a
                className="orange-text text-lighten-3"
                href="http://materializecss.com"
              >
                {" "}
                Dhruv Vavliya{" "}
              </a>
            </div>
          </div>
        </footer>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script src="js/wow.js"></script>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, actions)(Landing);
