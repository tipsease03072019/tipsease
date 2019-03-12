import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import loginIllustrations from "../assets/login.svg";

class LoginPage extends Component {
  state = {
    inputs: {
      username: "",
      password: ""
    }
  };

  // Handle updating state on typing
  typeHandler = e => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [e.target.name]: e.target.value
      }
    });
  };

  // Handle form submit
  submitHandler = e => {
    e.preventDefault();
    axios
      .post("https://tipsease.herokuapp.com/api/login", this.state.inputs)
      .then(arr => {
        console.log(arr.data);
        // this.props.loginHandler(arr.data);
        // // Redirect after login
        // if(arr.data.account_type === "employee"){
        //   this.props.history.push("/wallet")
        // }
        // else{
        //   this.props.history.push("/pay")
        // }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          {/* Commented out until styled */}
          {/* <img src={loginIllustrations} alt="" /> */}
          <input
            type="text"
            required
            placeholder="Username"
            name="username"
            value={this.state.inputs.username}
            onChange={this.typeHandler}
          />
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            value={this.state.inputs.password}
            onChange={this.typeHandler}
          />
          <button type="submit">Login</button>
          <Link to="/signup">Sign Up</Link>
        </form>
      </>
    );
  }
}

export default LoginPage;
