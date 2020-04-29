import React, { useEffect } from "react";

const BestCustomerReview = () => {
  var slideIndex = [1, 1];
  var slideId = ["mySlides1"];

  function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    console.log("x", x);
    if (n > x.length) {
      slideIndex[no] = 1;
    }
    if (n < 1) {
      slideIndex[no] = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
  }

  function plusSlides(n, no) {
    showSlides((slideIndex[no] += n), no);
  }

  useEffect(() => {
    showSlides(1, 0);
  }, []);

  return (
    <div className="col-lg-12 p-0">
      <div className="background-slider position-relative testimonial">
        <div className="slider-main">
          <div className="slideshow-container">
            <div className="clearfix">
              <div className="float-left">
                <h3 className="fs-72">"</h3>
              </div>
              <div className="float-right">
                <a className="prev pr-3" onClick={() => plusSlides(-1, 0)}>
                  <img
                    src="../imagesWeb/left-arrow.png"
                    alt="arrow"
                    className="arrow-1"
                  />
                </a>
                <a className="next" onClick={() => plusSlides(1, 0)}>
                  <img
                    src="../imagesWeb/right-hover.png"
                    alt="arrow"
                    className="arrow-1"
                  />
                </a>
              </div>
            </div>
            <div className="mySlides1">
              <h3 className="slider-text">
                Great customer service with quick response time. Pleasure doing
                business with them
              </h3>
              <div className="clearfix">
                <div className="float-left cust-image">
                  <img
                    src="../imagesWeb/mehmet.png"
                    alt="customer image"
                  />
                </div>
                <div className="float-left pl-4 cust-rating">
                  <h3 className="m-0 fs-24">Mehmet Asteglo</h3>
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div className="mySlides1">
              <h3 className="slider-text">
                As torrents of customer data come in, you need to organize that
                data in useful.
              </h3>
              <div className="clearfix">
                <div className="float-left cust-image">
                  <img
                    src="../imagesWeb/mehmet.png"
                    alt="customer image"
                  />
                </div>
                <div className="float-left pl-4 cust-rating">
                  <h3 className="m-0 fs-24">Mehmet Asteglo</h3>
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div className="mySlides1">
              <h3 className="slider-text">
                To find what’s working for a high-performing group and duplicate
                success.
              </h3>
              <div className="clearfix">
                <div className="float-left cust-image">
                  <img
                    src="../imagesWeb/mehmet.png"
                    alt="customer image"
                  />
                </div>
                <div className="float-left pl-4 cust-rating">
                  <h3 className="m-0 fs-24">Mehmet Asteglo</h3>
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                  <img
                    src="../imagesWeb/start.png"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCustomerReview;
