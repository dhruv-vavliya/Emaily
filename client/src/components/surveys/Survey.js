import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurvey } from "../../actions";
import { withRouter } from "react-router";

class Survey extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderComponent(survey) {
    return survey.map((survey, i) => {
      return (
        <div className="row" key={i} style={{ marginBottom: "-10px" }}>
          <div className="col s12 m12">
            <div className="card white z-depth-4" style={{ borderRadius: 8 }}>
              <div className="card-content">
                <span
                  className="card-title black-text center"
                  style={{
                    fontWeight: "bold",
                    fontFamily: "'Open Sans', sans serif",
                  }}
                >
                  {survey.title}
                </span>
                <div
                  style={{
                    fontFamily: "'Open Sans', sans serif",
                    fontSize: 16,
                    fontWeight: 600,
                    marginBottom: 40,
                    height: "300px",
                    marginTop: 10,
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
                    style={{ fontFamily: "cursive", color: "green" }}
                  >
                    Sent On : {new Date(survey.dateSent).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    let filteringSurvey = this.props.surveys.surveysList.filter((survey) => {
      return survey._id === this.props.match.params.id;
    });

    return (
      <div className="container">
        {this.renderComponent(filteringSurvey)}
        <div className="center">
          <button
            className="yellow darken-3 white-text btn-flat"
            onClick={() => this.props.history.push("/surveys")}
            style={{ marginTop: "20px" }}
          >
            Cancel
            <i className="material-icons right">cancel</i>
          </button>
          <button
            className="green btn-flat white-text"
            onClick={() =>
              this.props.deleteSurvey(filteringSurvey[0], this.props.history)
            }
            style={{ marginTop: "20px" }}
          >
            Delete
            <i className="fa fa-trash right"></i>
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return {
    surveys,
  };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  withRouter(Survey)
);
