import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types';

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
    console.log(this.state.inputs)
    axios
      .post("https://tipsease.herokuapp.com/api/users/login", this.state.inputs)
      .then(res => {
        console.log(res.data);
        this.props.loginHandler(res.data);
        // Redirect after login
        if(res.data.account_type === "employee"){
          this.props.history.push("/wallet")
        }
        else{
          this.props.history.push("/tip")
        }
      })
      .catch(err => {
        console.log(err.response.data.message)
      });
  }

  render() {
    if (localStorage.getItem("token") && localStorage.getItem('userId')) {
      if(this.props.accountType === "employee"){
        return <Redirect to="/wallet" />
      }
      else {
        return <Redirect to="/tip" />
      }
    }
    return (
      <>
        <form onSubmit={this.submitHandler}>
          {/* //TODO: Style Illustration */}
          {/* <img src={loginIllustrations} alt="" />  */} 
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

LoginPage.propTypes = {
  setTipHelper: PropTypes.func.isRequired,
}

export default LoginPage;
