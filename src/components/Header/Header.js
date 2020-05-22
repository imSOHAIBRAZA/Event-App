import React from "react";
import CommentBox from "../CommentBox/CommentBox";
import HeaderMenu from "./HeaderMenu";

const Header = props => {
  return (
    <header>
      <div className="row innerpage">
        <div
          className="header-section header-bg headerHight"
          style={{
            backgroundImage: `url(${props.image})`,
            
          }}
        >
          <div className="custom-container">
            <HeaderMenu />
            <div className="header-txt">
              <h2 style={{ color: 'orange' }}>{props.heading}</h2>
              <p style={{ color: 'black' }} className="max-477">{props.content}</p>
            </div>
          </div>
          <CommentBox />
        </div>
      </div>
    </header>
  );
};

export default Header;
