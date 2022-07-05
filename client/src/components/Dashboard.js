import React from "react";
import { Link } from "react-router-dom";
import SurveysList from "../components/surveys/SurveysList";

const Dashboard = () => {
  return (
    <div className="container">
      <SurveysList />
      <div className="fixed-action-btn">
        <Link
          to="/surveys/new"
          className="btn-floating btn-large red waves-effect waves-light"
        >
          <i className="material-icons">create</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
