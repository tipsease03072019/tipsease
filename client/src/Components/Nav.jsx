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
      (<div className="nav">
        <button onClick={this.toggleNav}>Profile</button>
        <nav className="card">
          <Link to="/wallet">My Wallet</Link>
          <Link to="/profile">Update Profile</Link>
          {/* Have to add Sign Out Method */}
          <Link to="/">Sign Out</Link>
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
