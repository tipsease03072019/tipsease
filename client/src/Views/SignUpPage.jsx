import React, {Component} from "react";
import { Redirect} from "react-router-dom";
import firebase from "../config/fire";
import LoginSignupHeader from "../Components/LoginSignupHeader.jsx";

const facebook = new firebase.auth.FacebookAuthProvider();
const google = new firebase.auth.GoogleAuthProvider();
const email = new firebase.auth.EmailAuthProvider();

class SignUpPage extends Component {
  signUpWithFacebook = () => {
    firebase
      .auth()
      .signInWithPopup(facebook)
      .then(result => {
        // set user logic here
      })
      .catch(err => console.error(err));
  }

  signUpWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(google)
      .then(res => {
        // set user logic here
      })
      .catch(err => {
        const errorMessage = err.message;
        console.error(errorMessage);
      });
  }

  signUpWithEmail = (event) => {
    event.preventDefault();
    event.persist();
    console.log();
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        event.target["email"].value,
        event.target["password"].value
      )
      .then(res => {
        // set user logic here
      })
      .catch(error => {
        console.error(error);
      });
  };


  render() {
    const { cookies, accountType } = this.props;
    if (cookies._uid && cookies._uat) {
      return <Redirect to="/tip" />;
    }
    return (
      <section className="view login-signup">
        <LoginSignupHeader />
        <form onSubmit={this.signUpWithEmail} className="full-width">
          <button className="google full-width">Sign Up With Google</button>
          <button className="facebook full-width">Sign Up With Facebook</button>
          <input
            type="text"
            required
            placeholder="Email"
            name="email"
            className="full-width"
            />
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            className="full-width"
            />
          <button className="primary full-width" type="submit">Sign Up With Email</button>
        </form>
      </section>
    );
  }
}

export default SignUpPage;
