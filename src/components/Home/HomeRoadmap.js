import React, { Fragment } from 'react';

const HomeRoadmap = () => {
  return (
    <Fragment>
      <div className="roadmap">
        <div className="custom-container">
          <div className="row justify-content-center">
            <div className="roadmap-block">
              <h3>Roadmap</h3>
              <div className="roadmap-top">
                <span>Lorem ipsum dolor sit amet, consectetur</span>
                <span>Lorem ipsum dolor sit amet, consectetur</span>
                <span>Lorem ipsum dolor sit amet, consectetur</span>
              </div>
              <div className="roadmap-img">
                <img src="images/roadmap.svg" alt="roadmap" className="img-fluid" />
              </div>
              <div className="roadmap-bttm">
                <span>Lorem ipsum dolor sit amet, consectetur</span>
                <span>Lorem ipsum dolor sit amet, consectetur</span>
                <span>Lorem ipsum dolor sit amet, consectetur</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <a href="#" className="btn learn-mo-btn">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeRoadmap;
