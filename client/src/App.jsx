import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import {loadProgressBar} from "axios-progress-bar";
import axios from "axios";
import {withCookies} from "react-cookie";
import moment from "moment";

// HOC Imports
import PrivateRoute from "./HOC/PrivateRoute";

// View imports
import LoginPage from "./Views/LoginPage";
import SignUpPage from "./Views/SignUpPage";
import WalletPage from "./Views/ServiceProviderViews/WalletPage";
import ShowCodePage from "./Views/ServiceProviderViews/ShowCodePage";
import TipPage from "./Views/CustomerViews/TipPage";
import Profile from "./Views/ProfilePage";
import SearchServiceProviderPage from "./Views/CustomerViews/SearchServiceProviderPage";

// CSS imports
import "axios-progress-bar/dist/nprogress.css";

class App extends Component {
  state = {
    accountType: null,
    userId: null,
    profileImg: null,
    payFlow: {
      tip: 5,
      payToUser: "",
    },
  };

  componentDidMount() {
    if (this.props.cookies.get("userId") && this.props.cookies.get("token")) {
      axios.defaults.headers.common["Authorization"] = this.props.cookies.get(
        "token",
      );
      const userId = this.props.cookies.get("userId");
      axios
        .get(`https://tipsease.herokuapp.com/api/users/${userId}`)
        .then(res => {
          this.setState({
            ...this.state,
            accountType: res.data.account_type,
            userId: res.data.id,
            profileImg: res.data.img_url,
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (sessionStorage.getItem("payFlow")) {
      this.setState({
        ...this.state,
        payFlow: {
          ...JSON.parse(sessionStorage.getItem("payFlow")),
        },
      });
    }
  }

  updateSessionFlow = update => {
    sessionStorage.setItem("payFlow", JSON.stringify(update));
  };

  loginHandler = data => {
    const tokenOptions = {
      expire: moment().add(1, "days"),
      secure: true,
    };
    this.props.cookies.set("token", data.token);
    this.props.cookies.set("userId", data.id);
    this.setState({
      accountType: data.account_type,
      userId: data.id,
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
    this.updateSessionFlow({...this.state.payFlow, tip});
  };

  render() {
    loadProgressBar();
    return (
      <Switch>
        <Route
          exact
          path="/login"
          render={props => (
            <LoginPage {...props} loginHandler={this.loginHandler} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={props => (
            <SignUpPage
              {...props}
              loginHandler={this.loginHandler}
              accountType={this.state.accountType}
            />
          )}
        />
        <Route
          exact
          path="/wallet"
          render={props => (
            <WalletPage
              {...props}
              user={this.state.employeeUser}
              cookies={this.props.cookies.getAll()}
            />
          )}
        />
        {/* <PrivateRoute exact path /> */}
        <Route
          exact
          path="/wallet/code"
          render={props => (
            <ShowCodePage
              {...props}
              user={this.state.employeeUser}
              code={"AN18"}
            />
          )}
        />
        {/* <PrivateRoute
          exact
          path="/profile"
          component={props => <Profile {...props} userId={this.state.userId} />}
        /> */}
        <Route
          exact
          path="/profile"
          render={props => (
            <Profile {...props} cookies={this.props.cookies.getAll()} />
          )}
        />
        <Route
          exact
          path="/find"
          render={props => (
            <SearchServiceProviderPage
              {...props}
              user={this.state.normalUser}
              selectedTip={this.state.payFlow.tip}
            />
          )}
        />
        <Route
          render={props => (
            <TipPage
              {...props}
              tip={this.state.payFlow.tip}
              setTipHelper={this.setTipHelper}
            />
          )}
        />
      </Switch>
    );
  }
}

export default withCookies(App);
