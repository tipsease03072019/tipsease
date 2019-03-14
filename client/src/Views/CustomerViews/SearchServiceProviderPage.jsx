import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Card from '../../Components/Card';

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
        console.log(res);
        this.setState({
          ...this.state,
          servers: res.data,
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
  

  changeHandler = e => {
    this.setState({
      ...this.state,
      search: e.target.value
    })
  }

  selectUser = uid => {
    console.log(uid);
    this.props.setUserHelper(uid);
    this.props.history.push("/payment");
  }

  render() {
    return (
      <>
        <h2>${this.props.selectedTip}</h2>
        <p>Type in the worker's username</p>
        <input
          type="text"
          placeholder="Servers Username"
          value={this.state.search}
          onChange={this.changeHandler}
        />
        <Link to="/">
          <button>Back</button>
        </Link>
        {(this.state.filtered ? this.state.filtered : this.state.servers).map(server => (
          <Card username={server.username} key={server.uid} uid={server.uid} selectUser={this.selectUser} />
        ))}
      </>
    );
  }
}

export default SearchServiceProviderPage;
