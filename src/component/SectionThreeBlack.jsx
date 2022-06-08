import React from "react";

import char from "../assets/img/og otter.png";

class SectionThreeBlack extends React.Component {
  render() {
    return (
      <>
        <div className="col-12 section-three-black container-fluid">
          <div className="row">
            <div className="left col-12 col-md-3">
              <img src={char} alt="char" className="chara-sc3" />
            </div>
            <div className="right col-12 col-md-9">
              <div className="col-12">
                <h1>ROADMAP</h1>
              </div>
              <div className="col-12 content-two">
                <h3>Pre-mint</h3>
                <ul>
                  <li>FULL SCALE MARKETING</li>
                  <li>WL GIVEAWAY ON DISCORD & TWITTER</li>
                  <li>
                    BUILDING MORE COLLABORATIONS WITH BRANDS TO PROVIDE MORE
                    EXCLUSIVITY TO HOLDERS
                  </li>
                </ul>
                <h3>Post-mint</h3>
                <ul>
                  <li>FULL SCALE MARKETING</li>
                  <li>WL GIVEAWAY ON DISCORD & TWITTER</li>
                  <li>
                    BUILDING MORE COLLABORATIONS WITH BRANDS TO PROVIDE MORE
                    EXCLUSIVITY TO HOLDERS
                  </li>
                  <li>WL GIVEAWAY ON DISCORD & TWITTER</li>
                  <li>WL GIVEAWAY ON DISCORD & TWITTER</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SectionThreeBlack;
