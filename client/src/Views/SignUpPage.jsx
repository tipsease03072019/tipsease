import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import firebase from "../config/fire";
import LoginSignupHeader from "../Components/LoginSignupHeader.jsx";
import axios from 'axios';

const facebook = new firebase.auth.FacebookAuthProvider();
const google = new firebase.auth.GoogleAuthProvider();
const email = new firebase.auth.EmailAuthProvider();

class SignUpPage extends Component {
  state = {
    showLogin: true,
    newUser: false,
    newUserInputs: {
      username: "",
      accountType: "1c5bc292728db250bf56c216870babab",
    },
    userInfo: {
      uid: null,
      token: null,
    },
  };
  signUpWithFacebook = () => {
    firebase
      .auth()
      .signInWithPopup(facebook)
      .then(res => {
        if (res.additionalUserInfo.isNewUser) {
          this.setState({
            ...this.state,
            showLogin: false,
            newUser: true,
            userInfo: {
              uid: res.user.uid,
              token: res.credential.accessToken,
            },
          });
        } else {
          this.props.history.push("/");
        }
      })
      .catch(err => console.error(err));
  };

  signUpWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(google)
      .then(res => {
        if (res.additionalUserInfo.isNewUser) {
          console.log(res);
          this.setState({
            ...this.state,
            showLogin: false,
            newUser: true,
            userInfo: {
              uid: res.user.uid,
              token: res.user._lat,
            },
          });
        } else {
          this.props.history.push("/");
        }
      })
      .catch(err => {
        const errorMessage = err.message;
        console.error(errorMessage);
      });
  };

  signUpWithEmail = event => {
    event.preventDefault();
    event.persist();
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        event.target["email"].value,
        event.target["password"].value,
      )
      .then(res => {
        if (res.additionalUserInfo.isNewUser) {
          this.setState({
            ...this.state,
            showLogin: false,
            newUser: true,
            userInfo: {
              uid: res.user.uid,
              token: res.user._lat,
            },
          });
        } else {
          this.props.history.push("/");
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  changeHandler = e => {
    this.setState({
      ...this.state,
      newUserInputs: {
        ...this.state.newUserInputs,
        [e.target.name]: e.target.value,
      },
    });
  };

  createAccount = e => {
    e.preventDefault();
    const data = {
      username: this.state.newUserInputs.username,
      account_type: this.state.newUserInputs.accountType,
      uid: this.state.userInfo.uid,
    };
    console.log(data);
    axios
      .post('https://tipsease.herokuapp.com/api/users/register/', data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  };

  render() {
    const {cookies, accountType} = this.props;
    // if (cookies._uid && cookies._uat) {
    //   return <Redirect to="/tip" />;
    // }
    return (
      <section className="view login-signup">
        <LoginSignupHeader />
        {this.state.showLogin && (
          <form onSubmit={this.signUpWithEmail} className="full-width">
            <button
              className="google full-width"
              onClick={this.signUpWithGoogle}
            >
              Login Or Sign Up With Google
            </button>
            <button
              className="facebook full-width"
              onClick={this.signUpWithFacebook}
            >
              Login Or Sign Up With Facebook
            </button>
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
            <button className="primary full-width" type="submit">
              Login Or Sign Up With Email
            </button>
          </form>
        )}
        {this.state.newUser && (
          <form onSubmit={this.createAccount}>
            <h3>Lets Get Started</h3>
            <input
              type="text"
              className="full-width"
              placeholder="Username"
              name="username"
              value={this.state.newUserInputs.username}
              onChange={this.changeHandler}
            />
            <select
              className="full-width"
              name="accountType"
              onChange={this.changeHandler}
            >
              <option value="1c5bc292728db250bf56c216870babab">
                I am a Customer
              </option>
              <option value="f5c3522b165b1589a6cb5a2aee1da7f7">
                I am a Server
              </option>
            </select>
            <button className="primary full-width">Finish</button>
          </form>
        )}
      </section>
    );
  }
}

export default SignUpPage;
