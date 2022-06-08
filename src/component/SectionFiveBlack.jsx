import React from "react";

import arrow from "../assets/img/divider-3.png";
import line from "../assets/img/faq-line.png";

class SectionFiveBlack extends React.Component {
  render() {
    return (
      <>
        <div className="col-12 section-five-black mb-4">
          <div className="content-section-five row">
            <div className="col-12 col-md-3 text-center left">
              <h1>faq</h1>
              <img src={arrow} alt="arrow" />
            </div>
            <div className="col-12 col-md-7 right">
              <p>BI-WEEKLY & MONTH ETH GIVEAWAY</p>
              <img src={line} alt="line" />
              <p>BI-WEEKLY & MONTH ETH GIVEAWAY</p>
              <img src={line} alt="line" />
              <p>BI-WEEKLY & MONTH ETH GIVEAWAY</p>
              <img src={line} alt="line" />
              <p>BI-WEEKLY & MONTH ETH GIVEAWAY</p>
              <img src={line} alt="line" />
              <p>BI-WEEKLY & MONTH ETH GIVEAWAY</p>
              <img src={line} alt="line" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SectionFiveBlack;
