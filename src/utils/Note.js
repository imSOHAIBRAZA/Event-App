import React, { Component } from 'react';
import './style.css'

const Note = (props) => {
  return (
    <div className="col-lg-12">
   <div className={props.bcolor}>{props.text}</div>
   </div>
  );
};

export default Note;
