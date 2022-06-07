import React from "react";

import arrow from "../assets/img/ultilities_line.png";

class SectionTwoBlack extends React.Component {
  render() {
    return (
      <>
        <div className="col-12 section-two-black pb-4 mb-4 mx-4 row">
            <div className="col-12 col-md-3 elipse-box">
                <div className="elipse">
                    <p className="text-center">Utility</p>
                </div>
            </div>
            <div className="col-1 col-md-3 arrow">
                <img src={arrow} alt="lineup" />
            </div>
            <div className="col-12 col-md-4 span-text text-align-justify">
                <p>INVESTING IN START-UPS WITH OUR COMMUNITY</p>
                <p>DISCOUNTS AND PERKS ACROSS DIFFERENT BRANDS</p>
                <p>BI-WEEKLY & ETH GIVEAWAY</p>
            </div>
        </div>
      </>
    );
  }
}

export default SectionTwoBlack;
