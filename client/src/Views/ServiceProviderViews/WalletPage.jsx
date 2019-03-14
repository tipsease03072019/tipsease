import React, {Component} from "react";
import * as moment from "moment";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import WalletHistoryLoad from "../../Components/WalletHistoryLoad";
import WalletHistory from "../../Components/WalletHistory";

class WalletPage extends Component {
  state = {
    isLoading: true,
    balance: null,
    username: null,
    showUsername: false,
    transactions: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://tipsease.herokuapp.com/api/transactions/${
          this.props.cookies._uid
        }`,
        {
          headers: {
            token: this.props.cookies._uat,
          },
        },
      )
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          isLoading: false,
          balance: 0,
          transactions: [],
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  tipHandler = () => {
    this.props.history.push("/tip");
  };

  showCodeHandler = () => {
    this.setState({
      ...this.state,
      showUsername: !this.state.showUsername,
    });
  };

  render() {
    // Empty Array, signifying previous transactions. To be used to `map()` below.
    const transactions = [
      {
        receivedOrSent: "received",
        amount: 69,
        sender: "Isaac Aszimov",
        timeStamp: "2019-03-12 01:06:39",
      },
      {
        receivedOrSent: "received",
        amount: 52,
        sender: "William Jones",
        timeStamp: "2019-03-12 01:06:39",
      },
      {
        receivedOrSent: "received",
        amount: 46,
        sender: "Isaac Henry",
        timeStamp: "2019-03-12 01:06:39",
      },
    ];
    const testUser = [
      {
        name: "John",
        balance: 50,
      },
    ];
    return (
      <section className="view">
        <section className="wallet-top">
          <h2>Welcome</h2>
          <div className="card full-width">
            <p>Your Current Tipsease Balance is:</p>
            {this.state.isLoading && <Skeleton width={100} height={70} />}
            {this.state.balance && (
              <div className="balance-container">
                <span>$</span>
                <h1>{this.state.balance}</h1>
              </div>
            )}
          </div>

          <button onClick={this.tipHandler}>Tip Someone</button>
        </section>

        <section className="card wallet-bottom full-width">
          <h4>Latest Transactions:</h4>
          {this.state.isLoading && <WalletHistoryLoad />}
          {/* {!this.state.isLoading && transactions.map((transaction, idx) => (
            <WalletHistory senderImg />
          ))} */}
          {this.state.isLoading && (
            <button className="secondary">
              <Skeleton />
            </button>
          )}
          {!this.state.isLoading && (
            <button className="secondary" onClick={this.showCodeHandler}>
              {this.state.showUsername
                ? `@${this.state.username}`
                : "Show Code"}
            </button>
          )}
        </section>
      </section>
    );
  }
}

export default WalletPage;
