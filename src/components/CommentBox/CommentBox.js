import React from "react";
import downarrow from "../../images/down-arrow.png"

const CommentBox = () => {
  return (
    <div className="text-center">
      < a href="#event">
        <div className="comment-bx text-center">
          <span >See Events</span>
          <i class="fa fa-arrow-down" aria-hidden="true" style={{fontSize: '17px',padding: '3px 5px 0px 5px'}}></i>
          {/* <img
            src={downarrow}
            alt="comment"
          /> */}
        </div>
      </a>
    </div>
  );
};

export default CommentBox;
