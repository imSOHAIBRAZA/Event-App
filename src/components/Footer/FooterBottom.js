import React from "react";

const FooterBottom = () => {
  return (
    <div className="footer-bottom-bg">
      <div className="footer-bottom custom-container">
        <div className="left-sect">
          2020 Sports Events. All rights reserved
        </div>
        <div className="right-sect">
          <span>Follow Us On</span>&nbsp;&nbsp;{" "}
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          &nbsp;&nbsp;{" "}
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
