import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

class SignUpPage extends Component {
  state = {
    inputs: {
      username: "",
      password: "",
      isServiceProvider: false,
      email: "",
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

  // Toggle handler
  // If anyone can update it to be part of type handler and still reliable please do
  isProviderToggle = e => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        isServiceProvider: !this.state.inputs.isServiceProvider
      }
    });
  };

  // Handle form submit
  submitHandler = e => {
    e.preventDefault();
    const data = {
      username: this.state.inputs.username,
      password: this.state.inputs.password,
      email: this.state.inputs.email,
      account_type: this.state.inputs.isServiceProvider
        ? "employee"
        : "customer"
    };
    axios
      .post("https://tipsease.herokuapp.com/api/users/register", data)
      .then(arr => {
        this.props.loginHandler(arr.data);
        // Redirect after login
        if (arr.data.account_type === "employee") {
          this.props.history.push("/wallet");
        } else {
          this.props.history.push("/pay");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props);
    // Issue with props
    if (localStorage.getItem("token")) {
      // <Redirect to />
      console.log(this.props)
      // if(this.props.accountType === 'employee'){
      //   return <Redirect to="/wallet" />
      // }
      // return <Redirect to="/pay" />
    }
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Username"
            required
            value={this.state.inputs.username}
            name="username"
            onChange={this.typeHandler}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={this.state.inputs.password}
            name="password"
            onChange={this.typeHandler}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={this.state.inputs.email}
            name="email"
            onChange={this.typeHandler}
          />
          <input
            type="checkbox"
            name="provider"
            onChange={this.isProviderToggle}
            checked={this.state.inputs.isServiceProvider}
          />
          <label htmlFor="checkbox">Are you a Provider?</label>
          <button type="submit">Create Account</button>
          <Link to="/login">Login</Link>
        </form>
      </>
    );
  }
}

export default SignUpPage;
