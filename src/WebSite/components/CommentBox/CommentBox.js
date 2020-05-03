import React from "react";
import {Link} from 'react-router-dom'

const CommentBox = () => {
  return (
    <div className="comment-bx text-center">
     
    
      <a href="#event">
      <p style={{lineHeight: '13px',position:'absolute',top: '13px',left:'0px'}}>See Events</p> <br/>
        <img
          src="imagesWeb/down-arrow.png"
          alt="comment"
        />
        
      </a> 
    </div>
  );
};

export default CommentBox;
