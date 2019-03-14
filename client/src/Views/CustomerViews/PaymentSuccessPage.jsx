import React, {Component} from "react";
import {Link} from 'react-router-dom'

class PaymentSuccess extends Component {
  state = {
    isLoading: true,
    isSuccessful: false,
    hasFailed: false,
  };
  render() {
    console.log(this.props);
    return (
      <>
        <h2>${this.props.data.tip}</h2>
        <h2>{this.props.data.username}</h2>
        <Link to="/find">
          <button>Back</button>
        </Link>
        <button>Correct</button>
      </>
    );
  }
}

export default PaymentSuccess;
