import React from "react";

/*call asset image */
import chara1 from "../assets/img/brown sugar with bucket hat and cholo outfit.png";
import chara2 from "../assets/img/greyish red with snap back and t-shirt.png";
import chara3 from "../assets/img/cumin ochre with beanie and hoodie.png";
import dividerblack from "../assets/img/divider-black.png";

/*call page asset */
import SectionOneBlack from "./SectionOneBlack";
import SectionTwoBlack from "./SectionTwoBlack";
import SectionThreeBlack from "./SectionThreeBlack";
import SectionFourBlack from "./SectionFourBlack";
import SectionFiveBlack from "./SectionFiveBlack";
import SectionSixBlack from "./SectionSixBlack";
import SectionSevenBlack from "./SectionSevenBlack";

class SectionOne extends React.Component {
  render() {
    return (
      <>
        <div className="hero-section">
          <div className="container">
            <div className="chara-block">
              {/* 3 image character */}
              <img src={chara1} alt="chara1" className="chara-1" />
              <img src={chara2} alt="chara2" className="chara-2" />
              <img src={chara3} alt="chara3" className="chara-3" />
            </div>
          </div>
        </div>
        {/* second section for absolute */}
        <div className="content content-responsive">
          <div className="second-section">
            <div className="fluid">
              <div className="transparent-section">
                <div className="col-12 row top mb-4">
                  <div className="col-1 col-md-6 left-section"></div>
                  <div className="col-11 col-md-6 right-section">
                    <div className="content-right-section col-md-8 col-12">
                      <div className="text-center pb-4">
                        <h1>Soldout</h1>
                        <img src={dividerblack} alt="divider-black" />
                      </div>
                      <p className="text-justify pb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris orci risus, auctor in rhoncus in, sed sem.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Aliquam risus
                        elit, rutrum eu sapien vitae.
                      </p>
                      <button className="btn">
                        <span className="mx-3">VIEW ON OPENSEA</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* call page */}
                <div className="col-12 sc-1">
                  <SectionOneBlack />
                  <SectionTwoBlack />
                  <SectionThreeBlack />
                  <SectionFourBlack />
                  <SectionFiveBlack />
                  <SectionSixBlack />
                  <SectionSevenBlack />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SectionOne;
