import React from "react";
import axios from "axios";
import {withCookies} from "react-cookie";

axios.defaults.baseURL = "http://localhost:3300/api";
axios.interceptors.request.use(
  function(options) {
    options.headers.authorization = localStorage.getItem("jwt");

    return options;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const Auth = (Component) => {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem("jwt");
      const notLoggedIn = (
        <div>
          <h1>To see the jokes, please log in or register.</h1>
        </div>
      );

      return <> {token ? <Component {...this.props} /> : notLoggedIn} </>;
    }
  };
}

export default withCookies(Auth);