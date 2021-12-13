import "./sign-up.styles.scss";
import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value }, () =>
      console.log(
        this.state.displayName +
          " " +
          this.state.email +
          " " +
          this.state.password +
          " " +
          this.state.confirmPassword
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
            name="displayName"
            type="displayName"
            handleChange={this.handleChange}
            value={this.state.displayName}
            label="displayName"
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
            name="confirmPassword"
            type="password"
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
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
