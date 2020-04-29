import React from "react";

const CustomerReviewTop = () => {
  return (
    <div className="customer-top">
      <div className="clearfix col-lg-12 mb-3">
        <div className="float-left mr-4">
          <p className="mb-1 fs-14">1-10 of 947 Questions</p>
          <h3 className="inner-head m-0">Customer Reviews</h3>
        </div>
        <div className="fancy-input float-left w-60 position-relative mr-4">
          <input type="text" name="" placeholder="Search customer reviews" />
          <button className="btn-search">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="fancy-input float-right w-7">
          <select className="border-0">
            <option>Recent</option>
            <option>Recent</option>
            <option>Recent</option>
            <option>Recent</option>
          </select>
        </div>
        <div className="fancy-input float-right w-7">
          <select className="border-0">
            <option>Latest</option>
            <option>Latest</option>
            <option>Latest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewTop;
