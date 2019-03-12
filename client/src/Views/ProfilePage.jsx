// ? Add Instant Username Check
import React, {Component} from "react";
import axios from "axios";

class ProfilePage extends Component {
  state = {
    isLoading: true,
    userId: this.props.userId,
    inputs: {
      username: null,
      password: null,
      email: null,
      profileImage: null,
    },
  };

  componentDidMount() {
    const userId = localStorage.getItem("userId");
    const data = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(`https://tipsease.herokuapp.com/api/users/${userId}`, data)
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
    axios
      .put(`https://tipsease.herokuapp.com/users/${ this.state.userId }`, )
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading</div>;
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
