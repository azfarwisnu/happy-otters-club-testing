import React from "react";

import divider from "../assets/img/divider-2.png";
import lineteam from "../assets/img/lineteamadidas.png";

class SectionFourBlack extends React.Component {
  render() {
    return (
      <>
        <div className="col-12 section-four-black mb-4">
          <div className="content mx-4">
            <div className="text-center">
              <h1>OUR COLLABORATE</h1>
              <img src={divider} alt="divider-white" />
            </div>
            <div className="text-center mt-4 pt-4 content-two">
              <img src={lineteam} alt="lineteam" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SectionFourBlack;
