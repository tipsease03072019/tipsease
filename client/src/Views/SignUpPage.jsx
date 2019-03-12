import React, {
  Component
} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SignUpPage extends Component {
  state = {
    inputs: {
      username: "",
      password: "",
      accountType: false,
      email: "",
    }
  }

  typeHandler = e => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [e.target.name]: e.target.value,
      }
    })
  };

  isProviderToggle = e => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        accountType: !this.state.inputs.accountType,
      }
    })
  }

  submitHandler = e => {
    e.preventDefault();
    const data = {
      username: this.state.inputs.username,
      password: this.state.inputs.password,
      email: this.state.inputs.email,
      account_type: (this.state.inputs.accountType) ? "employee": "customer",
    }
    axios
      .post("http://tipsease.herokuapp.com/api/users/register", data)
      .then(arr => {
        console.log(arr);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
    <div>
      <form onSubmit={this.submitHandler}>
        <input type="text" placeholder="Username" required value={this.state.inputs.username} name="username" onChange={this.typeHandler}  />
        <input type="password" placeholder="Password" required value={this.state.inputs.password} name="password" onChange={this.typeHandler} />
        <input type="email" placeholder="Email" required value={this.state.inputs.email} name="email" onChange={this.typeHandler} />
        <input type="checkbox" name="provider" onChange={this.isProviderToggle} checked={this.state.inputs.accountType} />
        <label htmlFor="checkbox">Are you a Provider?</label>
        <button type="submit">Create Account</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
    );
  }

}

export default SignUpPage;
