import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import { Link } from "react-router-dom";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderField = () => {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  };

  render() {
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
                    Blog
                  </span>
                  {/* handleSubmit is provided by reduxForm. */}
                  <form
                    onSubmit={this.props.handleSubmit(
                      this.props.onSurveySubmit
                    )}
                  >
                    {this.renderField()}
                    <div className="card-action" style={{ borderRadius: 8 }}>
                      <Link
                        to="/surveys"
                        className="red btn-flat left-0 white-text waves-effect waves-light"
                        style={{ marginLeft: 0 }}
                      >
                        Cancel
                      </Link>
                      <button
                        type="submit"
                        className="teal btn-flat right white-text waves-effect waves-light"
                      >
                        Next
                        <i className="material-icons right">done</i>
                      </button>
                    </div>
                  </form>
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
      </div>
    );
  }
}

// validate is provided by reduxForm.
function validate(values) {
  const errors = {};

  // Here always give the name which is given in the form.
  // Like name = recipients, then errors.recipients.
  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value !";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);

// we can write () => this.props.onSurveySubmit() instead of this.props.onSurveySubmit
