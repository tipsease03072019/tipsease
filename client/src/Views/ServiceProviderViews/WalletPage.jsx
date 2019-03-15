import React, {Component} from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import WalletHistoryLoad from "../../Components/WalletHistoryLoad";
import WalletHistory from "../../Components/WalletHistory";

class WalletPage extends Component {
  state = {
    isLoading: true,
    isLoadingHistory: true,
    balance: null,
    username: null,
    showUsername: false,
    transactions: [],
  };

  componentDidMount() {
    axios
      .get(`https://tipsease.herokuapp.com/api/users/${
        this.props.cookies._uid
      }`,
      {
        headers: {
          token: this.props.cookies._uat,
        },
      },)
      .then(res => {
        this.setState({
          ...this.state,
          username: res.data.username,
          balance: res.data.balance,
          isLoading: false,
        });
      })
      .catch(err => {
        console.log(err);
      })
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
        this.setState({
          ...this.state,
          transactions: res.data,
          isLoadingHistory: false,
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
          {this.state.isLoadingHistory && <WalletHistoryLoad />}
          {this.state.transactions.map(el => (
            <WalletHistory tip={el.tip} date={el.created_at} />
          ))}
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
