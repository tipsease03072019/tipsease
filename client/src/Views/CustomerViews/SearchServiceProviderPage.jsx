import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class SearchServiceProviderPage extends Component {
  state = {
    search: "",
    servers: [],
    filtered: null,
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    axios
      .get("https://tipsease.herokuapp.com/api/users")
      .then(res => {
        this.setState({
          ...this.state,
          servers: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  selectUser = (uid, username) => {
    this.props.setUserHelper(uid, username);
    this.props.history.push("/payment");
  };

  changeHandler = e => {
    const filtered = this.state.servers.filter(server =>
      server.username.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    this.setState({
      ...this.state,
      search: e.target.value,
      filtered: filtered,
    });
  };

  render() {
    console.log(this.state.servers)
    return (
      <div className="search-provider view-background full-width">
        <section className="view search-provider">
          <div className="balance-container">
            <span>$</span>
            <h2>{this.props.selectedTip}</h2>
          </div>
          <h4>Search for a servers username</h4>
          <input
            type="text"
            placeholder="⨉⨉⨉⨉⨉⨉⨉"
            value={this.state.search}
            onChange={this.changeHandler}
            className="text-centered"
          />
          <div className="">
            <Link to="/">
              <button className="transparent">Prev</button>
            </Link>
            {/* <Link to="/">
              <button className="transparent next-btn">Next</button>
            </Link> */}
          </div>
          {(this.state.filtered ? this.state.filtered : this.state.servers).map(
            server => (
              <button
                key={server.uid}
                onClick={() => this.selectUser(server.id, server.username)}
              >
                @{server.username}
              </button>
            ),
          )}
        </section>
      </div>
    );
  }
}

export default SearchServiceProviderPage;
