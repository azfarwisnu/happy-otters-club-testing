import React from "react";

import logo from "../assets/img/HOC_Logos_white.png";

class SectionSevenBlack extends React.Component {
  render() {
    return (
      <>
        <div className="col-12 section-seven-black mb-4">
          <div className="text-center content-section-seven">
            <img src={logo} alt="logo" />
            <div className="pt-4 mt-4 row text-center logo pb-4">
              <span className="elipse-content col-1 mx-2">
                <i className="bi bi-instagram h2"></i>
              </span>
              <span className="elipse-content col-1 mx-2">
                <i className="bi bi-discord h2"></i>
              </span>
              <span className="elipse-content col-1 mx-2">
                <i className="bi bi-twitter h2"></i>
              </span> 
            </div>
            <div className="text-center mt-2">
                <span className="mx-4">ABOUT</span>
                <span className="mx-4">ROADMAP</span>
                <span className="mx-4">FAQ</span>
            </div>
            <hr />
            <p>COPYRIGHT &copy; 2021-2022</p>
          </div>
        </div>
      </>
    );
  }
}

export default SectionSevenBlack;
