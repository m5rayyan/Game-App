import React, { Component } from "react";

export default class Gamer extends Component {
  render() {
    const gamerImg = `./assets/images/${this.props.gamerImg}`;
    return (
      <div className="gamer">
        <p className="greeting-gamer">
          Welcome back,
          <span className="gamer-name">{this.props.gamerName}</span>
        </p>
        <img className="gamer-img" src={gamerImg} alt="gamer" />
      </div>
    );
  }
}
