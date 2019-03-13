import React, {Component} from "react";
import axios from "axios";
import {Link, Redirect} from "react-router-dom";
import fire from "../config/fire";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class SignUpPage extends Component {
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      fire.auth.GoogleAuthProvider.PROVIDER_ID,
      fire.auth.FacebookAuthProvider.PROVIDER_ID,
      fire.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: "/setup-account"
  };

  render() {
    const { cookies, accountType } = this.props;
    if (cookies._uid && cookies._uat) {
      return <Redirect to="/tip" />;
    }
    return (
      <>
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={fire.auth()}
        />
        <Link to="/login">Login</Link>
      </>
    );
  }
}

export default SignUpPage;
