import React, { Component } from "react";
import AccountStatus from "./AccountStatus";
import Gamer from "./Gamer";
import Nav from "./Nav";
import Slider from "./Slider";
import SliderCard from "./SliderCard";

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Nav />
        <div className="home-content">
          <Gamer gamerName="Jenny" gamerImg="gamerImg.png" />
          <Slider sliderTitle="NEW GAMES ">
            <SliderCard
              imgSrc="GofWar.png"
              figcaption="Join in the new DLC with Kratos to learn more about him and his future."
            />
            <SliderCard
              imgSrc="superman.png"
              figcaption="Be part of the Suicide Squad and kill the Justice League! -Amanda Waller"
            />
            <SliderCard
              imgSrc="spiderman.png"
              figcaption="Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks."
            />
          </Slider>
          <AccountStatus />
        </div>
      </div>
    );
  }
}
