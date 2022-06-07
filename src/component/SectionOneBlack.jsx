import React from "react";

import dividercream from "../assets/img/divider-white.png";
import char from "../assets/img/sepia with baseball cap and muscle tee.png";

class SectionOneBlack extends React.Component {
  render() {
    return (
      <>
        <div className="row section-one-black pb-4 mb-4">
          <div className="col-12 col-md-5 left ">
            <div className="mx-4 px-4">
              <h1>WHO WE ARE?</h1>
              <img src={dividercream} alt="divider-cream" />
              <p className="text-justify pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                orci risus, auctor in rhoncus in, sed sem. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Aliquam risus elit, rutrum eu sapien vitae.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 pb-4 mb-4 right text-center">
              <h1>Happy Otters Club</h1>
              <img src={char} alt="char" />
          </div>
        </div>
      </>
    );
  }
}

export default SectionOneBlack;
