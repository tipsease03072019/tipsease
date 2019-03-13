import React, { Component } from "react";
import axios from "axios";

class SetupAccount extends Component {
  state = {
    inputs: {
      username: '',
      accountType: '',
    }
  }

  componentDidMount(){
    axios
      .get('',this.props.cookies._uat)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render(){
    return (
      <form onSubmit="">
        <h3>Few More Questions</h3>
        <input type="text" placeholder="Username" />
      </form>
    );
  }
};

export default SetupAccount;