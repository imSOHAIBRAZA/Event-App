import React from "react";
import {Link} from 'react-router-dom'
import downarrow from "../../images/down-arrow.png"
const CommentBox = () => {
  return (
    <div className="text-center">
< a href="#event">
    <div className="comment-bx text-center">
     
    
      
      <span >See Events</span> 
        <img
          src={downarrow}
          alt="comment"
          style={{paddingLeft:'10px'}}
        />
        
      
    </div>
    </a> 
    </div>
  );
};

export default CommentBox;