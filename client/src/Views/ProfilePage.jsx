// ? Add Instant Username Check
import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom";
import Nav from "../Components/Nav";

class ProfilePage extends Component {
  state = {
    isLoading: true,
    inputs: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://tipsease.herokuapp.com/api/users/${this.props.cookies._uid}`,
        {
          headers: {
            token: this.props.cookies._uat,
          },
        },
      )
      .then(res => {
        this.setState({
          ...this.state,
          isLoading: false,
          inputs: {
            ...this.state.inputs,
            username: res.data.username,
            email: res.data.email,
            img_url: res.data.img_url,
          },
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeHandler = e => {
    this.setState({
      ...this.state,
      inputs: {
        ...this.state.inputs,
        [e.target.name]: e.target.value,
      },
    });
  };

  submitHandler = e => {
    e.preventDefault();
    axios
      .put(
        `https://tipsease.herokuapp.com/api/users/${this.props.cookies._uid}`,
        this.state.inputs,
        {
          headers: {
            token: this.props.cookies._uat,
          },
        },
      )
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.props.cookies._uli !== "573c9f471261114c1ccb0daba919cdd9") {
      return <Redirect to="/" />;
    }
    if (this.state.isLoading) {
      return (
        <>
          <Nav />
          <h2>Loading...</h2>
        </>
      );
    }
    return (
      <>
        <Nav />
        <h2>Update Profile</h2>
        <Link to="/">Back</Link>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Username"
            value={this.state.inputs.username}
            name="username"
            onChange={this.changeHandler}
          />
          <button>Reset Password</button>
          <input
            type="url"
            placeholder="Profile Picture"
            value={this.state.inputs.img_url}
            name="img_url"
            onChange={this.changeHandler}
          />
          <button type="submit">Update</button>
        </form>
      </>
    );
  }
}

export default ProfilePage;
