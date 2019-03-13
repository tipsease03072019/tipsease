import React,{ Component } from "react";
import {Link} from "react-router-dom";

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      showNav: false,
    };
  };
  toggleNav = () => {
    this.setState({showNav:!this.state.showNav});
  };

  render() {
    return this.state.showNav ?
      (
      <div className="nav">
        <button onClick={this.toggleNav}>Profile</button>
        
        <nav className="card">
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
          
          <button className="transparent" onClick={this.props.logOut}>Sign Out</button>
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

export default Nav;
