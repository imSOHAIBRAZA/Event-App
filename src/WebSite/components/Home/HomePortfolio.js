import React, { Fragment } from 'react';

const HomePortfolio = () => {
  return (
    <Fragment>
      <div className="our-portfolio">
        <div className="custom-container">
          <div className="portfolio-head">
            <h3>Our Portfolio</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
          {/* <!--Jquery required to slide--> */}
          <div className="portfolio-slide">
            <div className="row">
              <div className="col-md-6">
                <div className="img-slide-block">
                  <img
                    src="imagesWeb/portfolio-slide1.jpg"
                    alt="slide image"
                    className="img-fluid"
                  />
                  <div className="text-block text-center">
                    <h3>Product</h3>
                    <p>1414 DONHILL DRIVE, BEVERLY HILLS, CA 90210</p>
                    <p>$11,995,000</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-slide-block">
                  <img
                    src="imagesWeb/portfolio-slide2.jpg"
                    alt="slide image"
                    className="img-fluid"
                  />
                  <div className="text-block text-center">
                    <h3>Product</h3>
                    <p>1414 DONHILL DRIVE, BEVERLY HILLS, CA 90210</p>
                    <p>$11,995,000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-bottom">
              <div className="learn-share">
                <span className="learn-mo">
                  <a href="#">LEARN MORE</a>
                </span>
                <span className="social-share">
                  SHARE &nbsp;&nbsp;
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>{' '}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </span>
              </div>
              <div className="slide-paginate">
                <a href="#" className="previous mr-5">
                  PREVIOUS
                </a>{' '}
                <a href="#" className="previous">
                  NEXT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePortfolio;
