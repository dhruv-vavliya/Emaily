import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions/index";
import { withRouter } from "react-router";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <div>
          <label style={{ fontWeight: 500, fontSize: 16, paddingBottom: 15 }}>
            {label}
          </label>
          <div
            style={{
              marginBottom: "15px",
              paddingBottom: "10px",
              paddingTop: "15px",
              fontFamily: "'Open Sans', sans serif",
              fontSize: 14,
              fontWeight: 600,
              borderBottom: "1px solid rgb(0, 128, 0)",
            }}
          >
            {formValues[name]}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12 m12">
            <div
              className="card white z-depth-5"
              style={{
                marginTop: "35px",
                borderRadius: 8,
                boxShadow:
                  "0 24px 38px 3px rgba(0,0,0,0.5), 0 9px 46px 8px rgba(0,0,0,0.5), 0 11px 15px -7px rgba(0,0,0,0.5)",
              }}
            >
              <div className="card-content">
                <span
                  className="card-title center black-text"
                  style={{
                    fontWeight: "bold",
                    fontFamily: "'Open Sans', sans serif",
                  }}
                >
                  Please confirm the Blog Entries !
                </span>
                {reviewFields}
                <div className="card-action" style={{ borderRadius: 8 }}>
                  <button
                    className="yellow darken-3 white-text btn-flat"
                    onClick={onCancel}
                    style={{ marginLeft: "0px", marginTop: "20px" }}
                  >
                    Back
                  </button>
                  <button
                    className="green btn-flat white-text right"
                    onClick={() => submitSurvey(formValues, history)}
                    style={{ marginTop: "20px" }}
                  >
                    Send Survey
                    <i className="material-icons right">email</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="black page-footer orange">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Company Bio</h5>
              <p className="grey-text text-lighten-4">
                We are a team of college students working on this project like
                it's our full time job. Any amount would help support and
                continue development on this project and is greatly appreciated.
              </p>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Settings</h5>
              <ul>
                <li>
                  <a className="white-text" href="#!">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Survey New
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
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
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

// withRouter is used for navigate from any component to any route.
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));

{
  /* <button className="green btn-flat white-text right" onClick = {() => submitSurvey(formValues, history)} style={{marginTop: '20px'}}>
Send Survey
<i className="material-icons right">email</i>
</button> */
}
