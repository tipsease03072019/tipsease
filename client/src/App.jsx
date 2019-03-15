// Account types
// Employee => f5c3522b165b1589a6cb5a2aee1da7f7
// Customer => 1c5bc292728db250bf56c216870babab

import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import {loadProgressBar} from "axios-progress-bar";
import axios from "axios";
import firebase from "./config/fire";
import {withCookies} from "react-cookie";

// View imports
import SignUpPage from "./Views/SignUpPage";
import WalletPage from "./Views/ServiceProviderViews/WalletPage";
import TipPage from "./Views/CustomerViews/TipPage";
import Profile from "./Views/ProfilePage";
import Payment from "./Views/CustomerViews/PaymentSuccessPage";
import SelectPaymentMethod from "./Views/CustomerViews/SelectPaymentMethod";
import SearchServiceProviderPage from "./Views/CustomerViews/SearchServiceProviderPage";

// CSS imports
import "axios-progress-bar/dist/nprogress.css";

class App extends Component {
  state = {
    payFlow: {
      tip: 5,
      user_id: "",
      username: "",
    },
  };

  componentDidMount() {
    this.loginHandler();
  }

  loginHandler = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.cookies.set("_uat", user._lat);
        this.props.cookies.set("_uid", user.uid);
        this.props.cookies.set("_uli", "573c9f471261114c1ccb0daba919cdd9");
        axios
          .get(
            `https://tipsease.herokuapp.com/api/users/${
              user.uid
            }`,
            {
              headers: {
                token: user._lat,
              },
            },
          )
          .then(res => {
            this.props.cookies.set("_ula", res.data.account_type);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.props.cookies.remove("_uat");
        this.props.cookies.remove("_uid");
        this.props.cookies.remove("_uli");
        this.props.cookies.remove("_ula");
      }
    });
  };

  updateSessionFlow = updateValue => {
    sessionStorage.setItem("payFlow", updateValue);
  };

  setLogin = ({uid, profileImg, token}) => {
    this.setState({
      ...this.state,
      loggedIn: true,
      userId: uid,
      profileImg: profileImg,
    });
    this.props.cookies.set("_uat", token);
    this.props.cookies.set("_uid", uid);
    this.props.cookies.set("_uli", "573c9f471261114c1ccb0daba919cdd9");
  };

  setTipHelper = tip => {
    this.setState({
      ...this.state,
      payFlow: {
        ...this.state.payFlow,
        tip,
      },
    });
    sessionStorage.setItem("payFlow", {...this.state.payFlow, tip});
  };

  setUserHelper = (uid, username) => {
    this.setState({
      ...this.state,
      payFlow: {
        ...this.state.payFlow,
        user_id: uid,
        username: username,
      },
    });
    sessionStorage.setItem("payFlow", {
      ...this.state.payFlow,
      user_id: uid,
      username: username,
    });
  };

  render() {
    loadProgressBar();
    return (
      <Switch>
        <Route
          exact
          path="/login"
          render={props => (
            <SignUpPage
              {...props}
              loginHandler={this.loginHandler}
              accountType={this.state.accountType}
              cookies={this.props.cookies.getAll()}
              setLogin={this.setLogin}
            />
          )}
        />
        <Route
          exact
          path="/wallet"
          render={props => (
            <WalletPage
              {...props}
              uid={this.state.userId}
              cookies={this.props.cookies.getAll()}
            />
          )}
        />
        <Route
          exact
          path="/payment"
          render={props => <Payment data={this.state.payFlow} />}
        />
        <Route
          exact
          path="/profile"
          render={props => <Profile {...props} cookies={this.props.cookies.getAll()} />}
        />
        <Route
          exact
          path="/select-payment"
          render={props => <SelectPaymentMethod {...props} />}
        />
        <Route
          exact
          path="/find"
          render={props => (
            <SearchServiceProviderPage
              {...props}
              selectedTip={this.state.payFlow.tip}
              setUserHelper={this.setUserHelper}
            />
          )}
        />
        {/* Default Route */}
        <Route
          render={props => (
            <TipPage
              {...props}
              tip={this.state.payFlow.tip}
              setTipHelper={this.setTipHelper}
              logOut={this.logoutHandler}
            />
          )}
        />
      </Switch>
    );
  }
}

export default withCookies(App);
