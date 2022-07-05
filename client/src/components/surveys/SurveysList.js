import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, filterSurveys } from "../../actions";
import Style from "../../css/SurveysList.module.css";
import { Link } from "react-router-dom";

class SurveysList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    this.props.filterSurveys(event.target.value);
  };

  renderSurveys(surveys) {
    return surveys.length ? (
      surveys.reverse().map((survey, i) => {
        return (
          <div className="row" key={i} style={{ marginBottom: "-10px" }}>
            <div className="col s12 m12">
              <div
                className="card white z-depth-4"
                id={Style.card_hover}
                style={{ borderRadius: 8 }}
              >
                <div className="card-content">
                  <Link
                    to={`/survey/${survey._id}/${survey.title
                      .split(" ")
                      .join("-")
                      .split(":")
                      .join("")}`}
                  >
                    <i
                      id={Style.trashicon}
                      className="fa fa-trash right"
                      style={{ color: "grey" }}
                    ></i>
                  </Link>
                  <span
                    className="card-title black-text"
                    style={{
                      fontWeight: "bold",
                      fontFamily: "'Open Sans', sans serif",
                    }}
                  >
                    {survey.title}
                  </span>
                  <div
                    className="emailbody"
                    style={{
                      fontFamily: "'Open Sans', sans serif",
                      fontSize: 16,
                      fontWeight: 600,
                      marginBottom: 20,
                    }}
                  >
                    <p>{survey.body}</p>
                  </div>
                  <div
                    className="card-action"
                    style={{
                      borderRadius: 8,
                      fontWeight: "bold",
                      padding: "10px 0 0 20px",
                    }}
                  >
                    <a href="#yes" style={{ fontFamily: "cursive" }}>
                      Yes : {survey.yes}
                    </a>
                    <a href="#no" style={{ fontFamily: "cursive" }}>
                      No : {survey.no}
                    </a>
                    <p
                      className="right"
                      style={{ fontFamily: "cursive", color: "orange" }}
                    >
                      Sent On : {new Date(survey.dateSent).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 600 }}>
          Welcome to Emaily !
        </h2>
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          You have no surveys !
        </p>
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          You can create a new Survey using below create option.
        </p>
      </div>
    );
  }

  render() {
    let filteringSurveys = this.props.surveys.surveysList.filter((survey) => {
      return (
        survey.title.toLowerCase().indexOf(this.props.surveys.searchTerm) !== -1
      );
    });

    return (
      <div>
        <div className="row" style={{ marginBottom: "-20px" }}>
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="input-field col s12">
              <i className="material-icons prefix">search</i>
              <input
                onChange={this.handleChange}
                id="icon_prefix"
                type="text"
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontWeight: 600,
                }}
              />
              <label
                htmlFor="icon_prefix"
                style={{ fontFamily: '"Open Sans", sans-serif' }}
              >
                Search Your Blog Title . . .
              </label>
            </div>
          </form>
        </div>
        {this.renderSurveys(filteringSurveys)}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return {
    surveys,
  };
}

export default connect(mapStateToProps, { fetchSurveys, filterSurveys })(
  SurveysList
);
