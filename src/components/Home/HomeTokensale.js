import React, { Fragment } from 'react';

const HomeTokensale = () => {
  return (
    <Fragment>
      <div className="token-sale">
          <div className="custom-container">
            <div className="row">
              <div className="col-md-6">
                <div className="tokensale-left">
                  <img
                    src="imagesWeb/token-tree.png"
                    alt="token-sale"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tokensale-right">
                  <h3 className="marg-bottom-40">Token Sale</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco
                  </p>
                  <p>
                    <a href="#" className="btn learn-mo-btn">
                      LEARN MORE
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default HomeTokensale;
