import React from "react";
import logo from '../../images/logo.png'
const Footer = () => {
  return (
    <footer>
      <div className="custom-container">
        <div className="row">
          <div className="col-md-4 padd-l-0">
            <div className="footer-logo">
              <img
                src={logo}
                alt="logo"
                style={{width: '200px'}}
              />

            </div>
            <div className="footer-txt">
              <p>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit, sed{" "}
              </p>
              <p>
                <span>Tottenham Court Road,</span>
                <span>London England W1T 1JY</span>
                <span>Call us on </span>
                <span>0044 207 6745 567</span>
              </p>
            </div>
          </div>
          <div className="col-md-2 footer-info">
            <h3>About</h3>
            <ul>
              <li>
                <a href="">
                  About Us
                </a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footer-info">
            <h3>How it Works</h3>
            <ul>
              <li>
                <a href="">
                  Platform
                </a>
              </li>
              <li>
                <a href="#">Event</a>
              </li>
              {/* <li>
                <a href="#">Investors</a>
              </li> */}
            </ul>
          </div>
          <div className="col-md-2 footer-info">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">BTX Overview</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Property Alerts</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footer-info">
            <h3>Work with us</h3>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Institutional Investors</a>
              </li>
              <li>
                <a href="#">Partnership & joint Ventures</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="imp-note">
          <h3>Important Note</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
