import React, { Fragment } from 'react';

const HomePlatform = () => {
  return (
    <Fragment>
      <div className="platform">
        <div className="custom-margin">
          <div className="row">
            <div className="col-lg-6">
              <div className="platformleft">
                <h3 className="marg-bottom-40">Platform</h3>
                <p className="marg-bottom-40">
                  This application and dashboard will be live in Q2 2019! Stay
                  Updated
                </p>
                <h4 className="marg-bottom-40">
                  Secure Wallets & Full Fledged property marketplace in one
                </h4>
                <p>
                  Bricktrade enables investors to trade property assets in a
                  safe marketplace with competitive fees.
                </p>
                <p>Ready for faster, secure transactions?</p>
                <p className="marg-bottom-40">
                  Join Our list to get notified when Bricktrade is available for
                  you.
                </p>
                <p>
                  <a href="#" className="btn learn-mo-btn">
                    LEARN MORE
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 padd-r-0">
              <div className="platformrgiht">
                <img
                  src="images/platform.jpg"
                  alt="platform"
                  className="img-fluid"
                />
                <div className="app-store">
                  <span>
                    <a href="#">
                      <img
                        src="images/downld-btn1.png"
                        alt="googleplay"
                        className="img-fluid"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img
                        src="images/downld-btn2.png"
                        alt="app store"
                        className="img-fluid"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePlatform;
