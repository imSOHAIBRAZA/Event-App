import React, { Fragment } from 'react';

const HomeFaq = () => {
  return (
    <Fragment>
      <div className="faq">
        <div className="custom-container">
          <div className="row justify-content-center">
            <div className="faq-block">
              <h2>Faq's</h2>
              <div className="accordionWrapper">
                <div className="accordionItem close">
                  <h2 className="accordionItemHeading">
                    Will it work with my developer?
                  </h2>
                  <div className="accordionItemContent">
                    <p>
                      Usually just login details to your hosting provider and
                      site software. Don't worry if you aren't sure, we can
                      guide you.
                    </p>
                  </div>
                </div>

                <div className="accordionItem close">
                  <h2 className="accordionItemHeading">How soon can you start?</h2>
                  <div className="accordionItemContent">
                    <p>
                      Usually just login details to your hosting provider and
                      site software. Don't worry if you aren't sure, we can
                      guide you.
                    </p>
                  </div>
                </div>

                <div className="accordionItem open">
                  <h2 className="accordionItemHeading">
                    What do I need to give you?
                  </h2>
                  <div className="accordionItemContent">
                    <p>
                      Usually just login details to your hosting provider and
                      site software. Don't worry if you aren't sure, we can
                      guide you.
                    </p>
                  </div>
                </div>
                <div className="accordionItem close">
                  <h2 className="accordionItemHeading">
                    Do your subscriptions have a minimum term?
                  </h2>
                  <div className="accordionItemContent">
                    <p>
                      Usually just login details to your hosting provider and
                      site software. Don't worry if you aren't sure, we can
                      guide you.
                    </p>
                  </div>
                </div>
              </div>
              <p className="pt-4">
                If we can't fix your issue, or if you aren't happy, we'll refund
                you in full.
              </p>
              <p>
                Questions? Call us on&nbsp;<b>0300 3020006</b>
              </p>
              <p>
                <a href="#" className="btn view-mo-btn mt-5">
                  VIEW ALL
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeFaq;
