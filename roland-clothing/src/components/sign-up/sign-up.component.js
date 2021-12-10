import "./sign-up.styles.scss";
import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      passwordAgain: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ username: "", email: "", password: "", passwordAgain: "" });
  };
/*
  if (password !== passwordAgain) {
      alert("passwords don't match")
      return;
  }
*/

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value }, () =>
      console.log(
        this.state.username +
          " " +
          this.state.email +
          " " +
          this.state.password +
          " " +
          this.state.passwordAgain
      )
    );
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I don not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="username"
            type="username"
            handleChange={this.handleChange}
            value={this.state.username}
            label="username"
            required
          />

          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />

          <FormInput
            name="passwordAgain"
            type="password"
            handleChange={this.handleChange}
            value={this.state.passwordAgain}
            label="password again"
            required
          />

          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;