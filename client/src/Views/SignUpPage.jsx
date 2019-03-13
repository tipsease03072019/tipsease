import React, {Component} from "react";
import axios from "axios";
import {Link, Redirect} from "react-router-dom";
import { withCookies } from 'react-cookie';

class SignUpPage extends Component {
  state = {
    inputs: {
      username: "",
      password: "",
      isServiceProvider: false,
      email: "",
    },
  };

  // Handle updating state on typing
  typeHandler = e => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Toggle handler
  // If anyone can update it to be part of type handler and still reliable please do
  isProviderToggle = e => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        isServiceProvider: !this.state.inputs.isServiceProvider,
      },
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
        : "customer",
    };
    axios
      .post("https://tipsease.herokuapp.com/api/users/register", data)
      .then(res => {
        this.props.loginHandler(res.data);
        // Redirect after login
        if (res.data.account_type === "employee") {
          this.props.history.push("/wallet");
        } else {
          this.props.history.push("/tip");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // Issue with props
    if (this.props.cookies.get("userId")&& this.props.cookies.get("token")) {
      if (this.props.accountType === "employee") {
        return <Redirect to="/wallet" />;
      } else {
        return <Redirect to="/tip" />;
      }
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

export default withCookies(SignUpPage);
