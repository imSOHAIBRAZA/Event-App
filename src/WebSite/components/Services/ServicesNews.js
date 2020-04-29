import React, { Fragment } from 'react';

const ServicesNews = () => {
  return (
    <Fragment>
      <div className="news-article">
        <div className="custom-container">
          <div className="head-title">
            <h2>News &amp; Articles</h2>
            <div className="article-paginate">
              <span className="prev">
                <img src="imagesWeb/left-arrow.png" className="arrow-l1" />
                <img src="imagesWeb/left-arrow-hover.png" className="arrow-l2" />
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="next">
                <img src="imagesWeb/right-arrow.png" className="arrow-l1" />
                <img src="imagesWeb/right-arrow-hover.png" className="arrow-l2" />
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="article-block">
                <img
                  src="imagesWeb/article-img1.jpg"
                  alt="article"
                  className="img-fluid"
                />
                <div className="article-details">
                  <h3>Best Price Tips</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    pretium pretium tempor. Ut eget
                  </p>
                  <div className="article-bottom">
                    <span>
                      <a href="#">Read Article</a>
                    </span>
                    <span>Sep 23, 2018</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="article-block">
                <img
                  src="imagesWeb/article-img2.jpg"
                  alt="article"
                  className="img-fluid"
                />
                <div className="article-details">
                  <h3>Value of money</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    pretium pretium tempor. Ut eget
                  </p>
                  <div className="article-bottom">
                    <span>
                      <a href="#">Read Article</a>
                    </span>
                    <span>Sep 23, 2018</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="article-block">
                <img
                  src="imagesWeb/article-img3.jpg"
                  alt="article"
                  className="img-fluid"
                />
                <div className="article-details">
                  <h3>How it work</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    pretium pretium tempor. Ut eget
                  </p>
                  <div className="article-bottom">
                    <span>
                      <a href="#">Read Article</a>
                    </span>
                    <span>Sep 23, 2018</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ServicesNews;
