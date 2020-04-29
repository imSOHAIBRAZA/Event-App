import React, { Fragment } from 'react';

const HomeTechnology = () => {
  return (
    <Fragment>
      <div className="technology">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tech-left">
                <h3>Technology</h3>
                <p>
                  Bricktrade is the one-stop platform for digital asset
                  management, offering a customizable suite of custodial,
                  brokerage, and risk management services.
                </p>
                <p>
                  <a href="#" className="btn learn-mo-btn">
                    LEARN MORE
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tech-right">
                <div className="tech-right-block">
                  <ul>
                    <li>
                      <h3>Custodial Wallet</h3>
                      <p>
                        Hyperscure integrated vault with multisignature
                        architecture to seamlessly manage asset positions.
                      </p>
                    </li>
                    <li>
                      <h3>Prime Brokerage</h3>
                      <p>
                        Order sharding to multiple exchanges to access the best
                        rates.
                      </p>
                    </li>
                    <li>
                      <h3>Risk Management</h3>
                      <p>
                        Customized hedging solution to mitigate liquidity,
                        market & operational risks.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="tech-right-img">
                  <img
                    src="imagesWeb/technology.png"
                    alt="technology"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeTechnology;
