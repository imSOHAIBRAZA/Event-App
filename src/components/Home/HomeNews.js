import React, { Fragment } from 'react';

const HomeNews = () => {
  return (
    <Fragment>
      <div className="news-article">
        <div className="custom-container">
          <div className="head-title">
            <h2>News & Articles</h2>
            <div className="article-paginate">
              <span className="prev">
                <img src="imagesWeb/l-arrow.png" className="arrow-l1" />
                <img src="imagesWeb/l-arrow-hover.png" className="arrow-l2" />
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="next">
                <img src="imagesWeb/r-arrow.png" className="arrow-l1" />
                <img src="imagesWeb/r-arrow-hover.png" className="arrow-l2" />
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
      <div className="row">
        <div className="col-lg-12 p-0">
          <div className="newsletter text-center">
            <div className="custom-container">
              <div className="pt-80 white">
                <h3 className="mb-3 sectiontitle">Newsletter</h3>
                <p className="mb-32 mt-2 fs-18">Lorem Ipsum dolor simut</p>
              </div>
              <div className="pb-80">
                <form className="myform" onsubmit="event.preventDefault();">
                  <div className="newsletter-form">
                    <input type="text" placeholder="Email Address" />
                    <input type="submit" value="Subscribe" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeNews;
