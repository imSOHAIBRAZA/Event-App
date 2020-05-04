import React from "react";
import HeaderTop from "./HeaderTop";
import CommentBox from "../CommentBox/CommentBox";
import HeaderMenu from "./HeaderMenu";

const Header = props => {
  return (
    <header>
      {/* <HeaderTop /> */}
      <div className="row innerpage">
        <div
          className="header-section header-bg"
          style={{
            backgroundImage: `url(${ props.image})`,
            minHeight:'100vh',
            // height:'880px'
          }}
        >
          <div className="custom-container">
            <HeaderMenu />
            <div className="header-txt">
              <h2 style={{color:'orange'}}>{props.heading}</h2>
              <p  style={{color:'black'}} className="max-477">{props.content}</p>
            </div>
          </div>
          <CommentBox />
        </div>
      </div>
    </header>
  );
};

export default Header;
