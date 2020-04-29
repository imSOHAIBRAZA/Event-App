import React, { Fragment } from 'react';

const ServicesNewsletter = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-12 p-0">
          <div className="newsletter text-center">
            <div className="custom-container">
              <div className="pt-80 white">
                <h3 className="mb-3 sectiontitle">Newsletter</h3>
                <p className="mb-32 mt-2 fs-18">Lorem Ipsum dolor simut</p>
              </div>
              <div className="pb-80">
                <form className="myform" onsubmit="event.preventDefault();">
                  <div className="newsletter-form">
                    <input type="text" placeholder="Email Address" />
                    <input type="submit" value="Subscribe" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ServicesNewsletter;
