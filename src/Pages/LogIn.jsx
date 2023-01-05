import React, { Component } from "react";
import { object, string } from "yup";
import { Link } from "react-router-dom";

//components
import Container from "../Components/Container";
import OrLine from "../Components/OrLine";
import Social from "../Components/Social";
import Input from "../Components/Input";
import Error from "../Components/Error";
import Btn from "../Components/Button";

//images
import google from "./../assets/image/flat-color-icons_google.png";
import twitter from "./../assets/image/logos_twitter.png";
import linkedin from "./../assets/image/cib_linkedin-in.png";
import github from "./../assets/image/ant-design_github-filled.png";
import logo from "./../assets/image/logo2.png";
import img from "./../assets/image/img.png";
import showEye from "./../assets/image/eye.png";
import hideEye from "./../assets/image/hideeye.jpg";

export default class LogIn extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
    showPassword: false,
    isValid: false,
  };

  schema = object().shape({
    email: string()
      .email("Invalid email address")
      .required("please enter your email"),
    password: string().required("please enter your password"),
  });

  //handle change inside input
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  //handle submit and stop refresh
  handleSubmit = (e) => {
    e.preventDefault();
    this.schema
      .validate(
        {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
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

  //when click on the eye show password
  toggleShowPassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    return (
      <Container>
        <div className="left-section">
          <div className="left-section-content">
            <img src={logo} alt="logo" />
            <p>
              <span className="quotation">“</span>I always observe the people
              who pass by when I ride an escalator. I'll never see most of them
              again, so I imagine a lot of things about their lives... about the
              day ahead of them.
              <span className="signature">Hideo Kojima</span>
            </p>
            <div className="img-box">
              <img src={img} alt="img" />
            </div>
          </div>
        </div>

        <div className="right-section">
          <div>
            <h1>Join the game!</h1>
            <p>Go inside the best gamers social network!</p>
          </div>

          <div className="social-media-box">
            <Social img={google} title="google" />
            <Social img={twitter} title="twitter" />
            <Social img={linkedin} title="linkedin" />
            <Social img={github} title="github" />
          </div>

          <OrLine />

          <form onSubmit={this.handleSubmit}>
            <div className="form">
              <Input
                type="email"
                placeholder="Write your email"
                handleChange={this.handleChange}
                value={this.state.email}
                name="email"
              >
                Your email
              </Input>
              {this.state.errors.email && this.state.isValid === false ? (
                <Error className="errors">{this.state.errors.email}</Error>
              ) : null}

              <div className="pass-input">
                <Input
                  type={this.state.showPassword ? "text" : "password"}
                  placeholder="•••••••••"
                  value={this.state.password}
                  handleChange={this.handleChange}
                  name="password"
                >
                  Enter your password
                </Input>
                {this.state.errors.password && this.state.isValid === false ? (
                  <Error className="errors">{this.state.errors.password}</Error>
                ) : null}

                <div>
                  <img
                    src={this.state.showPassword ? hideEye : showEye}
                    alt="eye"
                    className="eye"
                    onClick={this.toggleShowPassword}
                  />
                </div>
              </div>

              <div className="login-btn">
                <Btn isValid={this.state.isValid} link="/home">
                  Login
                </Btn>
              </div>

              <p className="final-stat">
                Don’t have an account?
                <span>
                  <Link to="/" style={{ color: "#1565d8" }}>
                    Register
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}
