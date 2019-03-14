import React from "react";
import { Link } from "react-router-dom";
import { useInput } from "../../Hooks/input";
import axios from 'axios';
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

  selectUser = uid => {
    console.log(uid);
    this.props.setUserHelper(uid);
    this.props.history.push("/payment");
  }

changeHandler = e => {
  this.setState({
    ...this.state,
    search: e.target.value
  })
}

selectUser = uid => {
  console.log(uid);
}

render() {
    return (
    <div className="search-provider view-background full-width">
      <section className="view search-provider">
        <div className="balance-container">
          <span>$</span>
          <h2>{props.selectedTip}</h2>
        </div>
        <h4>Enter a service provider's TipsEase ID</h4>
        <input
          type="text"
          placeholder="⨉⨉⨉⨉⨉⨉⨉"
          value={sendTipTo.value}
          onChange={sendTipTo.updateValue}
          className="text-centered"
        />
        {(this.state.filtered ? this.state.filtered : this.state.servers).map(server => (
          <Card username={server.username} key={server.uid} uid={server.uid} selectUser={this.selectUser} />
        ))}
       <div className="">
          <Link to="/">
            <button className="transparent">Prev</button>
          </Link>
          <Link to="/">
            <button className="transparent next-btn">Next</button>
          </Link>
        </div>
      </section>
    </div>
    );
  }
}

export default SearchServiceProviderPage;
