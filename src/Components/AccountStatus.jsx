import React, { Component } from "react";
import Friends from "./Friends";
import LastPlayedList from "./LastPlayedList";
import MostRecentTrophy from "./MostRecentTrophy";

export default class AccountStatus extends Component {
  render() {
    return (
      <div className="account-status">
        <LastPlayedList />
        <MostRecentTrophy
          trophyReason="perfect KILL streak"
          yourRate="0.5%"
          bgSrc="last-trophy.png"
          trophyImg="gold-trophy.png"
          gameType="assassin's creed odyssey"
          lastTime="34 hours ago"
        />
        <Friends />
      </div>
    );
  }
}
