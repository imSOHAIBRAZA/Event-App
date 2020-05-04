import React from 'react';
import { Link } from 'react-router-dom';
import logoheader from "../../images/logo-header.png"
const HeaderMenu = () => {
  return (
    <div className="head-main-menu">
      
      <div className="comp-logo">
        <img src={logoheader} alt="logo" style={{width: '200px'}} />
      </div>
      <div className="main-menu" id="header-toggle" style={{marginBottom: '25px'}} >
        <ul className="hover-menu">
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <Link to="/aboutus">
              {' '}
              About <i className="fa fa-chevron-down"></i>
            </Link>

            <div className="dropdown-content">
              <ul className="sublinks-div">
                <li>
                  <Link to="/team-advisor"> Team & Advisors</Link>
                </li>
                <li>
                  <Link to="/partners"> Partners</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/marketplace">Marketplace</Link>
          </li> */}
          {/* <li className="dropdown">
            <Link to="/plateform">
              {' '}
              Platform <i className="fa fa-chevron-down"></i>
            </Link>
            <div className="dropdown-content">
              <ul className="sublinks-div">
                <li>
                  <Link to="/plateform">Platform</Link>
                </li>
                <li>
                  <a href="#">Technology</a>
                </li>
              </ul>
            </div>
          </li> */}
          <li>
            <Link to="/signup" style={{color:"#f96716"}}>Sign up</Link>
          </li>
          <li>
            <Link to="/contact" style={{color:"#f96716"}}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
