import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withCookies} from "react-cookie";
import firebase from '../config/fire'

class Nav extends Component {
  state = {
    showNav: false,
  };

  // Sets showNav to the opposite of it's current state.
  toggleNav = () => {
    this.setState({showNav: !this.state.showNav});
  };

  logoutHandler = () => {
    firebase.auth().signOut();
    console.log("you are logged out");
    this.props.cookies.remove("_uat");
    this.props.cookies.remove("_uid");
    this.props.cookies.remove('_uli');
    this.props.cookies.remove('_lat');
  };

  render() {
    const {_uli} = this.props.cookies.cookies;
    if (_uli === "573c9f471261114c1ccb0daba919cdd9") {
      return this.state.showNav ? (
        <div className="nav active">
          <img />
          <nav className="card menu-card">
            {/* Depending on the accountType found in App.js' state, render a Link to wallet. Reason being is that normal users have no need for a link to their non-existent wallet */}
            {this.props.accountType === "employee" ? (
              <Link to="/wallet">
                <button className="transparent">My Wallet</button>
              </Link>
            ) : null}
            <Link to="/profile">
              <button className="transparent">Update Profile</button>
            </Link>
            <button className="transparent" onClick={this.logoutHandler}>
              Sign Out
            </button>
          </nav>
          <div className="popover-background" onClick={this.toggleNav} />
        </div>
      ) : (
        <div className="nav">
          <button className="small" onClick={this.toggleNav}>
            Profile
          </button>
        </div>
      );
    }
    return (
      <div className="nav">
        <Link to="/login">
          <button className="small">Login or Sign up</button>
        </Link>
      </div>
    );
  }
}

export default withCookies(Nav);
