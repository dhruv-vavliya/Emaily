import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import "../css/common.css";
import { connect } from "react-redux";
import * as actions from "../actions/index";

// Amount in cents (1 Dollar = 500 cents)
class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="Pay $5 for getting 5 credits !!!"
        label="Add Credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="waves-effect waves-ripple btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
