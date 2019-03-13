import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";

export default function(Component, requireType) {
  return class Authenticated extends Component {
    // ? Just adds tokens not actual check?
    // authLogin = token => {
    //   console.log(token);
    //   axios.defaults.baseURL = "https://tipsease.herokuapp.com/api";
    //   axios.interceptors.request.use(
    //     function(options) {
    //       options.headers.authorization = token;
    //       console.log(options);
    //       return options;
    //     },
    //     function(error) {
    //       console.log(error);
    //       return Promise.reject(error);
    //     },
    //   );
    // };
    render() {
      //// this.authLogin(this.props.cookies.token);
      if (this.props.cookies.token && this.props.cookies.userId) {
        return <Component {...this.props} />;
      }
      return <Redirect to="/login" />;
    }
  };
}
