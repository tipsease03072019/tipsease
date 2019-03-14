import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";

class PaymentSuccess extends Component {
  state = {
    isLoading: false,
    isSuccessful: false,
    hasFailed: false,
    sendData: {
      users_id: this.props.data.user_id,
      tip: this.props.data.tip,
    },
  };

  sendTip = () => {
    console.log(this.state.sendData);
    this.setState({
      isLoading: true,
    })
    axios
      .post(
        `https://tipsease.herokuapp.com/api/transactions/${
          this.state.sendData.users_id
        }`,
        this.state.sendData,
      )
      .then(res => {
        console.log(res);
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
        <>
          <h2>Send Successfully</h2>
          <Link to="/">Send Again</Link>
        </>
      );
    }
    if (this.state.hasFailed) {
      return (
        <>
          <h2>Send Failed</h2>
          <Link to="/"><button>Try Again</button></Link>
        </>
      );
    }
    if (username && tip) {
      return (
        <>
          <h2>${tip}</h2>
          <h2>@{username}</h2>
          <Link to="/find">
            <button>Back</button>
          </Link>
          <button onClick={this.sendTip}>Correct</button>
        </>
      );
    }
    return <Redirect to="/" />;
  }
}

export default PaymentSuccess;
