import React from "react";

const Testimonials = () => {
  return (
    <div className="col-lg-12 off-white-back p-0">
      <div className="custom-container pb-120 p-sm-lr-10">
        <div className="how-we-do pt-120">
          <div className="text-center pb-80 mx-auto">
            <p className="fs-18 m-0 gray2">
              We are an AI-powered Digital Wealth Management Platform.
            </p>
            <p className="fs-18 m-0 gray2 mx-auto width-60">
              We offer our customers a curated basket of diverse portfolios,
              carefully selected by our Investment Committee with a cumulative
              120+ years of experience in international markets. Welcome to the
              new age of investing!
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-lg-4 col-md-4 pb-sm-25">
            <div className="hwd-image">
              <div className="h-128">
                <img
                  src="imagesWeb/cube.png"
                  alt="icon"
                />
              </div>
              <h3 className="m-0 pt-3 h-85 text-uppercase play-fair fs-24 color-gray">
                HIGHER RETURNS
              </h3>
              <div className="fancy-btn">
                <button className="btn mx-auto">START INVESTING</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 pb-sm-25">
            <div className="hwd-image">
              <div className="h-128">
                <img
                  src="imagesWeb/idea.png"
                  alt="icon"
                />
              </div>
              <h3 className="m-0 pt-3 h-85 text-uppercase play-fair fs-24 color-gray">
                SIMPLE AND QUICK
              </h3>
              <div className="fancy-btn">
                <button className="btn mx-auto">START INVESTING</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 pb-sm-25">
            <div className="hwd-image">
              <div className="h-128">
                <img
                  src="imagesWeb/transfer.png"
                  alt="icon"
                />
              </div>
              <h3 className="m-0 pt-3 h-85 text-uppercase fs-24 play-fair color-gray">
                LOWEST FEES
              </h3>
              <div className="fancy-btn">
                <button className="btn mx-auto">LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
