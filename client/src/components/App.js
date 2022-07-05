import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Survey from "./surveys/Survey";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Landing} />
        {this.props.auth ? (
          <Route path="/surveys" exact component={Dashboard} />
        ) : (
          <Redirect to="/" from="/surveys" />
        )}
        <Route path="/survey/:id/:surveytitle" exact component={Survey} />
        <Route path="/surveys/new" component={SurveyNew} />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, actions)(App);

// {this.props.auth ? <Route path="/surveys" exact component={Dashboard} /> : <Redirect to="/" from="/surveys" /> }
