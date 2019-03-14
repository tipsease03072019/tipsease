// ? Add Instant Username Check
import React, {Component} from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import {Link} from "react-router-dom";

class ProfilePage extends Component {
  state = {
    isLoading: true,
    inputs: {},
  };

  componentDidMount() {
    axios
      .get(`https://tipsease.herokuapp.com/api/users/${this.props.cookies._uid}`,{
        headers: {
          token: this.props.cookies._uat,
        },
      },)
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
      .put(`https://tipsease.herokuapp.com/api/users/${this.props.cookies._uid}`,this.state.inputs,{
        headers: {
          token: this.props.cookies._uat,
        },
      },)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.isLoading) {
      return <Skeleton count={4} />;
    }
    return (
      <>
        <h2>Update Profile</h2>
        {/* USER DETAILS. To Be Made into forms when 'edit user details is clicked' */}
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
