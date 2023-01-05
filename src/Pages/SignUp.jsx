// Global Imports

import React, { Component } from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";
// Import Images
import logo from "../assets/image/Logo1.png";
import img from "../assets/image/edge.png";
// Import Components
import Input from "../Components/Input";
import Container from "../Components/Container";
import OrLine from "../Components/OrLine";
import Progress from "../Components/Progress";
import Error from "../Components/Error";
import Btn from "../Components/Button";
import LogInBtn from "../Components/LoginBtn";

export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    repeatPassword: "",
    selected: false,
    errors: {},
    isValid: false,
  };

  schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Please enter your email"),

    password: yup
      .string()
      .min(8, "password must be more than 8")
      .matches(/[a-z]/g, "password must contain at least one character ")
      .matches(/\d/g, "password must contain at least one digits")
      .matches(
        /[!@#$%^&*)(+=._-]/g,
        "password must contain at least one special character"
      )
      .required("please enter your password"),

    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("please enter your password again"),

    selected: yup.boolean().oneOf([true], "checkbox is required").required(),
  });

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  toggleCheckbox = () => {
    this.setState((prev) => ({ selected: !prev.selected }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.schema
      .validate(
        {
          email: this.state.email,
          password: this.state.password,
          repeatPassword: this.state.repeatPassword,
          selected: this.state.selected,
        },
        { abortEarly: false }
      )
      .then(() => {
        console.log("valid");
        this.setState({ isValid: true });
      })
      .catch((e) => {
        const validationErrors = {};
        e.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        this.setState({ errors: validationErrors });
        this.setState({ isValid: false });
      });
  };

  //Strength password
  calculatePasswordStrength(password) {
    let score = 0;
    if (password.length >= 8) {
      score += 1;
    }
    if (password.match(/[a-z]/g) && password.match(/[A-Z]/g)) {
      score += 1;
    }
    if (password.match(/\d/g)) {
      score += 1;
    }
    if (password.match(/[!@#$%^&*)(+=._-]/g)) {
      score += 1;
    }
    this.setState({ score });
  }

  render() {
    return (
      <Container>
        <div className="content-left-section">
          <div className="leftSide">
            <img src={logo} alt="logos" />
            <p>
              <span className="quotation">“</span>I always observe the people
              who pass by when I ride an escalator. I'll never see most of them
              again, so I imagine a lot of things about their lives... about the
              day ahead of them.
              <span className="signature">Hideo Kojima</span>
            </p>
            <div className="img-edge">
              <img src={img} alt="img" />
            </div>
          </div>
        </div>

        <div className="content-right-section">
          <form onSubmit={this.handleSubmit}>
            <button className="Back" type="button">
              <Link to="/logIn" style={{ color: "#8692a6" }}>
                &lt; Back
              </Link>
            </button>

            <div className="form-content">
              {this.state.isValid ? (
                <Error className="success">Done Successfully</Error>
              ) : null}
              <div className="title">
                <h1>Register Individual Account!</h1>
                <p>
                  For the purpose of gamers regulation, your details are
                  required.
                </p>
              </div>

              <div className="content-signUp">
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter email address"
                  name="email"
                  handleChange={this.handleChange}
                >
                  Email address*
                </Input>
                {this.state.errors.email && this.state.isValid === false ? (
                  <Error className="errors">{this.state.errors.email}</Error>
                ) : null}

                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                  handleChange={(e) => {
                    this.handleChange(e);
                    this.calculatePasswordStrength(this.state.password);
                  }}
                >
                  Create password*
                </Input>
                {this.state.errors.password && !this.state.isValid ? (
                  <Error className="errors">{this.state.errors.password}</Error>
                ) : null}
                {this.state.password !== "" ? (
                  <Progress score={this.state.score} />
                ) : null}

                <Input
                  type="password"
                  id="repeatPassword"
                  placeholder="Repeat password"
                  name="repeatPassword"
                  handleChange={this.handleChange}
                >
                  Repeat password*
                </Input>
                {this.state.errors.repeatPassword &&
                this.state.isValid === false ? (
                  <Error className="errors">
                    {this.state.errors.repeatPassword}
                  </Error>
                ) : null}

                <div className="check-box">
                  <label>
                    <input
                      type="checkbox"
                      name="selected"
                      value={this.state.selected}
                      onChange={this.toggleCheckbox}
                    />
                    I agree to terms & conditions
                  </label>
                  {this.state.errors.selected &&
                  this.state.isValid === false ? (
                    <Error className="errors">
                      {this.state.errors.selected}
                    </Error>
                  ) : null}
                </div>

                <Btn isValid={this.state.isValid} link="/logIn">
                  Register Account
                </Btn>

                <OrLine />

                <LogInBtn />
              </div>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}
