import React, { Fragment } from "react";

const Gallery = () => {
  return (
    <Fragment>
      <div className="col-lg-12 p-0">
        <div className="invest-image">
          <img
            src="../imagesWeb/reveal-details.jpg"
            alt="banner"
            className="w-100"
          />
        </div>
      </div>
      <div className="col-lg-12 p-0">
        <div className="custom-container">
          <div className="clearfix pt-3 pb-3 d-flex block-d align-items-center">
            <div className="float-left center-text w-75 w-sm-100 f-none">
              <h3 className="mb-2 sectiontitle">To reveal the full details</h3>
              <p className="m-0 fs-24 blue-color">
                Here are Some More Features That Simplifies Property Investment
              </p>
            </div>
            <div className="float-left w-25 w-sm-100 f-none text-right left-text pt-sm-20">
              <div className="fancy-btn center-text">
                <button className="btn">SIGN UP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Gallery;
