import React,{ Component } from "react";
import {Link} from "react-router-dom";
import { withCookies } from 'react-cookie';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      showNav: false,
    };
  };

  // Sets showNav to the opposite of it's current state.
  toggleNav = () => {
    this.setState({showNav:!this.state.showNav});
  };

  render() {
    return this.state.showNav ?
      (
      <div className="nav">
        <button onClick={this.toggleNav}>Profile</button>
        <img />
        <nav className="card">
          {/* Depending on the accountType found in App.js' state, render a Link to wallet. Reason being is that normal users have no need for a link to their non-existent wallet */}
          {this.props.accountType === "employee" ? (
            <Link to="/wallet">
              <button className="transparent">
                My Wallet
              </button>
            </Link>
          ):null}

          <Link to="/profile">
            <button className="transparent">
              Update Profile
            </button>
          </Link>
          <button className="transparent" onClick={this.props.logoutHandler}>Sign Out</button>
        </nav>
      </div>)
    :
    (
      <div className="nav">
        <button onClick={this.toggleNav}>Profile</button>
      </div>
    )
  };
}

export default withCookies(Nav);
