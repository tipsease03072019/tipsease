// ? Add Instant Username Check
import React, {Component} from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton';

class ProfilePage extends Component {
  state = {
    isLoading: true,
    userId: this.props.userId,
    inputs: {
      username: "",
      password: "",
      email: "",
      profileImage: "",
    },
  };

  componentDidMount() {
    axios
      .get(
        `https://tipsease.herokuapp.com/api/users/${this.props.userId}`
      )
      .then(res => {
        this.setState({
          ...this.state,
          isLoading: false,
          inputs: {
            ...this.state.inputs,
            username: res.data.username,
            email: res.data.email,
            profileImage: res.data.img_url,
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
    const headers = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    //! Yes please help us
    const data = {
      username: this.state.inputs.username,
      password: this.state.inputs.password,
      email: this.state.inputs.email,
      img_url: this.state.inputs.profileImage
    };
    console.log(data);
    axios
      .put(`https://tipsease.herokuapp.com/api/users/${this.state.userId}`, data, headers)
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
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Username"
            value={this.state.inputs.username}
            name="username"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Email"
            value={this.state.inputs.email}
            name="email"
            onChange={this.changeHandler}
          />
          <input
            type="url"
            placeholder="Profile Picture"
            value={this.state.inputs.profileImage}
            name="profileImage"
            onChange={this.changeHandler}
          />
          <button>Updates</button>
        </form>
      </>
    );
  }
}

export default ProfilePage;
