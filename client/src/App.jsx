import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import {loadProgressBar} from "axios-progress-bar";
import axios from "axios";

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
  //! Data does not pursist on reloads
  state = {
    loggedIn: false,
    accountType: null,
    userId: null,
    payFlow: {
      tip: 5,
    },
  };

  componentDidMount() {
    
    if(sessionStorage.getItem('payFlow')){
      this.setState({
        ...this.state,
        payFlow: {
          ...sessionStorage.getItem('payFlow')
        }
      })
    }
    if (localStorage.getItem("userId") && localStorage.getItem("token")) {
      axios.defaults.headers.common["Authorization"] = localStorage.getItem(
        "token",
      );
      const userId = localStorage.getItem("userId");
      axios
        .get(`https://tipsease.herokuapp.com/api/users/${userId}`)
        .then(res => {
          this.setState({
            ...this.state,
            loggedIn: true,
            accountType: res.data.account_type,
            userId: res.data.id,
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  updateSessionFlow = updateValue => {
    sessionStorage.setItem('payFlow', updateValue)
  }

  loginHandler = data => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.id);
    this.setState({
      loggedIn: true,
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
    sessionStorage.setItem('payFlow', {...this.state.payFlow, tip})
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
            <WalletPage {...props} user={this.state.employeeUser} />
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
        <PrivateRoute
          exact
          path="/profile"
          component={props => <Profile {...props} userId={this.state.userId} />}
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

export default App;
