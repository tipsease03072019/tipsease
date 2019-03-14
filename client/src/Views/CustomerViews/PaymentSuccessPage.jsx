import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";

class PaymentSuccess extends Component {
  state = {
    isLoading: false,
    isSuccessful: false,
    hasFailed: false,
  };

  sendTip = () => {
    this.setState({
      isLoading: true,
    });
    console.log({tip:this.props.data.tip});
    axios
      .post(
        `https://tipsease.herokuapp.com/api/transactions/${
          this.props.data.user_id
        }`,
        {uid:this.props.data.user_id ,tip:this.props.data.tip},
      )
      .then(res => {
        this.setState({
          ...this.state,
          isSuccessful: true,
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          ...this.state,
          hasFailed: true,
        });
      });
  };

  render() {
    const {tip, username} = this.props.data;
    if (this.state.isSuccessful) {
      return (
        <div className="view-background payment-success">
          <section className="view payment">
            <h2>Payment Sent Successfully</h2>
            <p>@{this.props.data.username} is very grateful... We think.</p>
            <Link to="/">
              <button className="send-again-btn">Home</button>
            </Link>
          </section>
        </div>
      );
    }
    if (this.state.hasFailed) {
      return (
        <div className="view-background payment-failure">
          <section className="view payment">
            <h2>Send Failed</h2>
            <p>Either you are broke or we messed up.</p>
            <button onClick={this.sendTip}>Try Again</button>
          </section>
        </div>
      );
    }
    if(this.state.isLoading){
      return(
        <section className="view payment">
          <h2 className="send-amount">
            Sending <span>${tip}</span>
          </h2>
          <h4>to</h4>
          <h2 className="username">@{username}</h2>
        </section>
      )
    }
    if (username && tip) {
      return (
        <section className="view payment">
          <h2 className="send-amount">
            Send <span>${tip}</span>
          </h2>
          <h4>to</h4>
          <h2 className="username">@{username}</h2>
          <button onClick={this.sendTip} className="secondary">
            Confirm
          </button>
          <Link to="/find">
            <button className="transparent">Cancel</button>
          </Link>
        </section>
      );
    }
    return <Redirect to="/" />;
  }
}

export default PaymentSuccess;
