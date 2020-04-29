import React, { Fragment } from 'react';

const CompanyContent = () => {
  return (
    <Fragment>
      <div className="who-we">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-6">
              <div className="company-content pl-0">
                <h3>Who we are</h3>
                <p>
                  We are an independent investment management firm focused on
                  emerging markets. Our capabilities span from deal origination
                  and structuring to legal, technical and financial due
                  diligence, trading and risk mitigation. All our activities are
                  driven by extensive research to identify and capture
                  investment opportunities where fundamental asset value has
                  diverged from market price.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <img
                  src="imagesWeb/glob-img.png"
                  alt="our-company"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-to-invest">
        <div>
          <img src="imagesWeb/advisor-img1.jpg" alt="invest" className="img-fluid" style={{minWidth:"100%"}}/>
        </div>
        <div className="custom-container">
          <div className="col-12">
            <div className="invest-b">
              <div className="invest-l">
                <p>Want to know how to invest?</p>
                <p>
                  Here are Some More Features That Simplifies Property
                  Investment
                </p>
              </div>
              <p>
                <a href="#" className="btn view-mo-btn">
                  LEARN MORE
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CompanyContent;
