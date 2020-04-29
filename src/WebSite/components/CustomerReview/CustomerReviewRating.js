import React from "react";

const CustomerReviewRating = () => {
  return (
    <div className="col-lg-12 p-0">
      <div className="custom-container">
        <div className="pt-120 pb-120 customer-review text-center">
          <h4>Customer Review</h4>
          <p>4.5/5 ratings</p>
          <div className="rating-star">
            <img src="../imagesWeb/star.png" alt="icon" />
            <img src="../imagesWeb/star.png" alt="icon" />
            <img src="../imagesWeb/star.png" alt="icon" />
            <img src="../imagesWeb/star.png" alt="icon" />
            <img src="../imagesWeb/star.png" alt="icon" />
          </div>
          <div className="review-detail">
            <a href="#">London</a>
            <a href="#">Investment</a>
            <a href="#">Property</a>
            <a href="#">Building</a>
            <a href="#">Developers</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewRating;
