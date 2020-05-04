import React, { Fragment } from "react";

const Fundraising = () => {
  return (
    <Fragment>
      <div className="col-lg-12 p-0">
        <div className="fundraising-main white pt-120 pb-120">
          <div className="custom-container center-text">
            <div className="">
              <h3 className="sectiontitle mb-3">
                Capital fundraising for property developer
              </h3>
              <p className="m-0 pb-80 fs-18">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
            <div className="row pb-80">
              <div className="col-lg-4 col-md-4 pb-sm-25">
                <h3 className="fs-32 fs-sm-25 h-92">
                  List your property for free
                </h3>
                <p className="fs-18 m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
              <div className="col-lg-4 col-md-4 pb-sm-25">
                <h3 className="fs-32 fs-sm-25 h-92">Raise Capital & Grow</h3>
                <p className="fs-18 m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
              <div className="col-lg-4 col-md-4 pr-0">
                <h3 className="fs-32 fs-sm-25 h-92">Manage Finance Easily</h3>
                <p className="fs-18 m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            </div>
            <div>
              <div className="fancy-btn">
                <button className="btn">LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 p-0">
        <div className="invest-image">
          <img
            src="imagesWeb/portfolio-image.jpg"
            alt="banner"
            className="w-100"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Fundraising;
