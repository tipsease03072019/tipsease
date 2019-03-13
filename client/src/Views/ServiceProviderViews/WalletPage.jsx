import React, {Component} from "react";
import PropTypes from "prop-types";
import * as moment from "moment";
import Auth from "../../HOC/Auth";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import { Link } from 'react-router-dom';

class WalletPage extends Component {
  state = {
    isLoading: false,
    balance: null,
  };

  componentDidMount() {
    const userId = this.props.cookies.userId;
    axios.defaults.headers.common["Authorization"] = this.props.cookies.token;
    axios
      .get(`https://tipsease.herokuapp.com/api/transactions/${userId}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  tipHandler = () => {
    this.props.history.push("/tip");
  };

  showCodeHandler = () => {
    this.props.history.push("/wallet/code");
  };

  render() {
    if (this.state.isLoading) {
      return <div />;
    }
    return (
      <>
        {/* Upper Half, containing balance */}
        <Link to='/profile'>To Profile</Link>
        <section className="wallet-top">
          <p>Your Current Tipsease Balance is:</p>
          <div className="balance-container">
            {/* {this.props.user.balance} */}
          </div>

          <button onClick={this.tipHandler}>Tip Someone</button>
        </section>

        {/* Lower Half, containing latest transactions and an absolute-positioned button to show the code */}
        <section className="wallet-bottom">
          <p>Latest Transactions:</p>

          {/* Button positioned absolutely */}
          <button onClick={this.showCodeHandler}>Show Your Code</button>
        </section>
      </>
    );
  }
}

// WalletPage.propTypes = {
//   match: PropTypes.object.isRequired,
//   location: PropTypes.object.isRequired,
//   history: PropTypes.object.isRequired,
//   user: PropTypes.object.isRequired,
// }

export default Auth(WalletPage, "employee");
