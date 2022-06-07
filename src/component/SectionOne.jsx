import React from "react";

import chara1 from "../assets/img/brown sugar with bucket hat and cholo outfit.png";
import chara2 from "../assets/img/greyish red with snap back and t-shirt.png";
import chara3 from "../assets/img/cumin ochre with beanie and hoodie.png";

class SectionOne extends React.Component {
  render() {
    return (
      <>
        <div className="hero-section">
          <div className="container">
            <div className="chara-block">
              <img src={chara1} alt="chara1" className="chara-1" />
              <img src={chara2} alt="chara2" className="chara-2" />
              <img src={chara3} alt="chara3" className="chara-3" />
            </div>
          </div>
        </div>
        <div className="content content-responsive">
          <div className="second-section">
            <div className="fluid">
              <div className="transparent-section">
                <div className="col-12 row top mb-4">
                  <div className="col-1 col-md-6 left-section">
                    <p>left</p>
                  </div>
                  <div className="col-11 col-md-6 right-section">
                    <div className="content-right-section col-md-8 col-12">
                      <h1 className="text-center">Soldout</h1>
                      <p className="text-justify pb-2">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy.
                      </p>
                      <button className="btn">
                          <span className="mx-3">VIEW ON OPENSEA</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 sc-1">
                    <p>lkaflkaf</p>
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
