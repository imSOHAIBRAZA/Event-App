import React from "react";
import {Link} from 'react-router-dom'

const CommentBox = () => {
  return (
    <div className="comment-bx">
      <a href="#event">
        <img
          src="imagesWeb/down-arrow.png"
          alt="comment"
        />
      </a>
    </div>
  );
};

export default CommentBox;
