import React, { Component } from "react";
// import { Link } from 'react-router-dom';

class SelectPaymentMethod extends Component {
  render () {
    return (
      <div className="view-background select-pay-method">
        <section className="view select-pay-method">
          <h3 className="text-centered">Select a Payment Method</h3>
          <div className="button-grid">
            {/* <Link to=""> */}
              <button>Card</button>
            {/* </Link> */}
            {/* <Link to=""> */}
              <button disabled={true}>PayPal</button>
            {/* </Link> */}
            {/* <Link to=""> */}
              <button disabled={true}>ApplePay</button>
            {/* </Link> */}
            {/* <Link to=""> */}
              <button disabled={true}>BTC</button>
            {/* </Link> */}
          </div>
        </section>
      </div>
    );
  }
}

export default SelectPaymentMethod;
