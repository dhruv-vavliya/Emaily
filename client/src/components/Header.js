import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import "../css/common.css";
import brand_logo from "../images/brand-logo-original.png";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  componentDidMount() {
    const sidenav = document.querySelector("#slide_out");
    M.Sidenav.init(sidenav, {});
  }

  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <div className="col s12">
              <a
                className="oauth-container btn darken-4 white black-text waves-effect waves-orange"
                href="/auth/google"
              >
                <div className="left">
                  <img
                    width="20px"
                    style={{ marginTop: 8, marginRight: 8 }}
                    alt="Google sign-in"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                  />
                </div>
                Login with Google
              </a>
            </div>
          </li>
        );
      default:
        return [
          <li key="0">
            <div className="col s12">
              <Link
                to="/surveys"
                style={{
                  background: "linear-gradient(to right ,#fc00ff , #00dbde",
                  marginTop: "3px",
                }}
                className="oauth-container btn darken-4 light-blue white-text waves-effect waves-ripple"
              >
                Dashboard
              </Link>
            </div>
          </li>,
          <li key="1">
            <Payments />
          </li>,
          <li
            key="2"
            style={{
              marginLeft: "35px",
              fontFamily: '"Open Sans", sans-serif',
            }}
          >
            Credits : {this.props.auth.credits}
          </li>,
          <li key="3">
            <div className="col s12">
              <a
                style={{
                  background: "linear-gradient(to right ,#fc00ff , #00dbde",
                }}
                className="oauth-container btn darken-4 light-blue white-text waves-effect waves-ripple"
                href="/api/logout"
              >
                Logout
              </a>
            </div>
          </li>,
        ];
    }
  };

  render() {
    return (
      <nav style={{ marginBottom: 10, height: 70 }} className="z-depth-3">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="brand-logo"
            id="logo_item"
            style={{ paddingLeft: 20, paddingTop: 5 }}
          >
            <img src={brand_logo} alt="Emily" width="120" height="60" />
          </Link>
          <a href="#" className="sidenav-trigger" data-target="slide_out">
            <i className="hide-on-large-only material-icons" id="menubtn">
              menu
            </i>
          </a>
          <ul
            className="right hide-on-med-and-down"
            style={{ marginRight: 30 }}
          >
            {this.renderContent()}
          </ul>
        </div>
        <ul className="sidenav" id="slide_out">
          <li>
            <img
              src={brand_logo}
              alt="Emily"
              width="90"
              height="45"
              style={{ marginLeft: 35, marginTop: 10 }}
            />
          </li>
          {this.renderContent()}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Header);

// const mapStateToProps = (state) => {
//     return {
//         auth: state.auth
//     }
// }
