// Account types
// Employee => f5c3522b165b1589a6cb5a2aee1da7f7
// Customer => 1c5bc292728db250bf56c216870babab

import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {loadProgressBar} from "axios-progress-bar";
import axios from "axios";
import firebase from "./config/fire";
import {withCookies} from "react-cookie";

// HOC Imports
import PrivateRoute from "./HOC/PrivateRoute";

// View imports
import SignUpPage from "./Views/SignUpPage";
import WalletPage from "./Views/ServiceProviderViews/WalletPage";
import ShowCodePage from "./Views/ServiceProviderViews/ShowCodePage";
import TipPage from "./Views/CustomerViews/TipPage";
import Profile from "./Views/ProfilePage";
import SearchServiceProviderPage from "./Views/CustomerViews/SearchServiceProviderPage";

// CSS imports
import "axios-progress-bar/dist/nprogress.css";
import PaymentSuccess from "./Views/CustomerViews/PaymentSuccessPage";

class App extends Component {
  state = {
    loggedIn: false,
    accountType: null,
    userId: null,
    profileImg: null,
    payFlow: {
      tip: 5,
      sendTipTo: "",
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

  setLogin = ({ uid, profileImg, token}) => {
    this.setState({
      ...this.state,
      loggedIn: true,
      userId: uid,
      profileImg: profileImg
    })
    this.props.cookies.set("_uat", token);
    this.props.cookies.set("_uid", uid);
  }

  logoutHandler = () => {
    firebase.auth().signOut();
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
            <WalletPage {...props} cookies={this.props.cookies.getAll()} />
          )}
        />
        <Route
          exact
          path="/wallet/code"
          render={props => <ShowCodePage {...props} />}
        />
        {/*
        //! Needs to be done with other hoc
        <PrivateRoute
          exact
          path="/profile"
          component={props => <Profile {...props} userId={this.state.userId} />}
        /> */}
        <Route
          exact
          path="/find"
          render={props => (
            <SearchServiceProviderPage
              {...props}
              user={this.state.normalUser}
              selectedTip={this.state.payFlow.tip}
              sendTipTo={this.state.sendTipTo}
            />
          )}
        />
        {/* <Route
          exact
          path="/success"
          render={props => <PaymentSuccess {...props} />}
        /> */}
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
