import React, {Component} from "react";
import axios from "axios";
import firebase from "../config/fire";

class SetupAccount extends Component {
  state = {
    inputs: {
      username: "",
      accountType: "",
    },
  };

  componentDidMount() {
    console.log(this.props.cookies);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.cookies.set("_uat", user._lat);
        this.props.cookies.set("_uid", user.uid);
        axios
          .get("", this.props.cookies._uat)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  }

  render() {
    return (
      <form onSubmit="">
        <h3>Few More Questions</h3>
        <input type="text" placeholder="Username" />
      </form>
    );
  }
}

export default SetupAccount;
