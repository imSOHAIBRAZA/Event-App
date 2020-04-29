import React, { Fragment } from 'react';

const HomeServices = () => {
  return (
    <Fragment>
      <div className="our-services">
        <div className="custom-container">
          <div className="our-services-headr">
            <h2>Our Services</h2>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4 mt-4">
              <div className="our-services-block">
                <div className="trade-ciircle">
                  <img src="imagesWeb/cloud-computing.png" alt="cloud-computing" />
                </div>
                <h2>Lorem ipsum dolor</h2>
                <p>
                  We design and service the next generation office building –
                  one that feels more like a full-service, lifestyle hotel
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 mt-4">
              <div className="our-services-block">
                <div className="trade-ciircle">
                  <img src="imagesWeb/access.png" alt="access" />
                </div>
                <h2>Lorem ipsum dolor</h2>
                <p>
                  We are a team of 300 people who specialize in hospitality,
                  technology, design, and production
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 mt-4">
              <div className="our-services-block">
                <div className="trade-ciircle">
                  <img src="imagesWeb/hologram.png" alt="hologram" />
                </div>
                <h2>Lorem ipsum dolor</h2>
                <p>
                  By studying the science of catering to large groups of people,
                  particularly in a business context
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 mt-4">
              <div className="our-services-block">
                <div className="trade-ciircle">
                  <img src="imagesWeb/infographic.png" alt="infographic" />
                </div>
                <h2>Lorem ipsum dolor</h2>
                <p>
                  For each space we design, each technology item we carry, every
                  meal we prepare, and every line item in the production
                  schedule
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 mt-4">
              <div className="our-services-block">
                <div className="trade-ciircle">
                  <img src="imagesWeb/settings.png" alt="settings" />
                </div>
                <h2>Lorem ipsum dolor</h2>
                <p>
                  Our design philosophy and continuous improvement methodology
                  aims to enhance the experience of every user of our spaces.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 mt-4">
              <div className="our-services-block">
                <div className="trade-ciircle">
                  <img src="imagesWeb/network.png" alt="network" />
                </div>
                <h2>Lorem ipsum dolor</h2>
                <p>
                  Our meeting and conference technology is completely integrated
                  within all of our conference centers and meeting spaces.{' '}
                </p>
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

export default HomeServices;
