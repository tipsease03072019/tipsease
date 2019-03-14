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
    loggedIn: false,
    accountType: null,
    userId: null,
    profileImg: null,
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
        this.setState({
          profileImg: user.photoURL,
          userId: user.uid,
        });
        // TODO: Get request to pull account type and profile code
      } else {
        this.props.cookies.remove("_uat");
        this.props.cookies.remove("_uid");
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
  };

  logoutHandler = () => {
    firebase.auth().signOut();
    console.log("you are logged out");
    this.props.cookies.remove("_uat");
    this.props.cookies.remove("_uid");
    this.setState({
      ...this.state,
      accountType: null,
      userId: null,
      profileImg: null,
      profileCode: null,
    });
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
          render={props => (
            <Profile {...props} cookies={this.props.cookies.getAll()} />
          )}
        />
        <Route exact path="/select-payment" render={props => <SelectPaymentMethod {...props} />} />
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
