import React, { Fragment } from "react";
import CustomerReviewTop from "./CustomerReviewTop";
import CustomerReviewBottom from "./CustomerReviewBottom";
import CustomerReviewRating from "./CustomerReviewRating";
import BestCustomerReview from "./BestCustomerReview";

const CustomerReview = () => {
  return (
    <Fragment>
      <div className="col-lg-12 p-0">
        <div className="custom-container">
          <div className="pt-120 pb-120">
            <CustomerReviewTop />
            <CustomerReviewBottom />
          </div>
        </div>
      </div>
      <BestCustomerReview />
      <CustomerReviewRating />
    </Fragment>
  );
};

export default CustomerReview;
