import React, { Component } from 'react';
import HeaderTop from '../Header/HeaderTop';
import HeaderMenu from '../Header/HeaderMenu';

class HomeHeader extends Component {
  render() {
    return (
      <header>
        <HeaderTop />

        <div className="row">
          <div
            className="header-section header-bg"
            style={{
              backgroundImage: `url(
                'images/header-bg.jpg')`,
              maxHeight: '580px',
              height: '880px'
            }}
          >
            <div className="custom-container">
              <HeaderMenu />
              <div className="header-txt">
                <h2>
                  The right way of
                  <br /> investing in the property
                </h2>
                <p>We are here to make you a good fortune out of investment</p>
                <p>
                  <a href="" className="btn read-btn">
                    READ BLOG
                  </a>
                </p>
                <p>
                  How a normal worker can become a major investerr with us ?
                </p>
              </div>
            </div>
            <div className="comment-bx">
              <a href="#">
                <img src="imagesWeb/comment.png" alt="comment" />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HomeHeader;
