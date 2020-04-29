import React, { Component } from 'react';
import classnames from 'classnames';

class Serve extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      openServeTab: 'brokersTab'
    };
  }

  toggleServeTabHandler = value => {
    if (value == 'active-investorsTab') {
      this.setState({
        openServeTab: 'active-investorsTab'
      });
    } else if (value == 'Ins-investorTab') {
      this.setState({
        openServeTab: 'Ins-investorTab'
      });
    } else if (value == 'brokersTab') {
      this.setState({
        openServeTab: 'brokersTab'
      });
    } else if (value == 'p-developerTab') {
      this.setState({
        openServeTab: 'p-developerTab'
      });
    } else if (value == 'asset-managerTab') {
      this.setState({
        openServeTab: 'asset-managerTab'
      });
    }
  };

  render() {
    return (
      <div className="p-serve">
        <div className="custom-container">
          <div className="serve-head text-center">
            <h2>People we Serve</h2>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="serve-tab">
                <ul>
                  <li
                    onClick={() =>
                      this.toggleServeTabHandler('active-investorsTab')
                    }
                    className={classnames('serve-tab-links', {
                      active: this.state.openServeTab == 'active-investorsTab'
                    })}
                  >
                    <a href="javascript:void(0)">Active Investors</a>
                  </li>
                  <li
                    onClick={() =>
                      this.toggleServeTabHandler('Ins-investorTab')
                    }
                    className={classnames('serve-tab-links', {
                      active: this.state.openServeTab == 'Ins-investorTab'
                    })}
                  >
                    <a href="javascript:void(0)">Institutional Investors</a>
                  </li>
                  <li
                    onClick={() => this.toggleServeTabHandler('brokersTab')}
                    className={classnames('serve-tab-links', {
                      active: this.state.openServeTab == 'brokersTab'
                    })}
                  >
                    <a href="javascript:void(0)">Property Brokers</a>
                  </li>
                  <li
                    onClick={() => this.toggleServeTabHandler('p-developerTab')}
                    className={classnames('serve-tab-links', {
                      active: this.state.openServeTab == 'p-developerTab'
                    })}
                  >
                    <a href="javascript:void(0)">Property Developers</a>
                  </li>
                  <li
                    onClick={() =>
                      this.toggleServeTabHandler('asset-managerTab')
                    }
                    className={classnames('serve-tab-links', {
                      active: this.state.openServeTab == 'asset-managerTab'
                    })}
                  >
                    <a href="javascript:void(0)">Property Asset managers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div
                id="active-investorsTab"
                className={classnames('tabdetail active-investors active', {
                  'd-none': this.state.openServeTab != 'active-investorsTab'
                })}
              >
                <div className="row">
                  <div className="col-lg-9 padding-0">
                    <div className="serve-right">
                      <div className="serve-r-top">
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/mobile.png"
                              alt="account"
                              className="img-fluid"
                            />
                          </span>
                          <span>Open Live account </span>
                        </div>
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/Line.png"
                              alt="line"
                              className="img-fluid"
                            />
                          </span>
                        </div>
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/dollar.png"
                              alt="account"
                              className="img-fluid"
                            />
                          </span>
                          <span>Start investing </span>
                        </div>
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/Line.png"
                              alt="lie"
                              className="img-fluid"
                            />
                          </span>
                        </div>
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/investment.png"
                              alt="investment"
                              className="img-fluid"
                            />
                          </span>
                          <span>Get token & track market </span>
                        </div>
                      </div>
                      <div className="serve-r-bttm">
                        <ul>
                          <li>
                            <img
                              src="imagesWeb/check.png"
                              alt="check"
                              className="img-fluid"
                            />{' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </li>
                          <li>
                            <img
                              src="imagesWeb/check.png"
                              alt="check"
                              className="img-fluid"
                            />{' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 padding-0">
                    <div className="serve-img text-center">
                      <img
                        src="imagesWeb/iPhonex.png"
                        alt="iPhonex"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="Ins-investorTab"
                className={classnames('tabdetail Ins-investorTab active', {
                  'd-none': this.state.openServeTab != 'Ins-investorTab'
                })}
              >
                <div className="row">
                  <div className="col-lg-9 padding-0">
                    <div className="serve-right">
                      <div className="serve-r-top">
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/mobile.png"
                              alt="account"
                              className="img-fluid"
                            />
                          </span>
                          <span>Open Live account </span>
                        </div>
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/Line.png"
                              alt="line"
                              className="img-fluid"
                            />
                          </span>
                        </div>
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/dollar.png"
                              alt="account"
                              className="img-fluid"
                            />
                          </span>
                          <span>Start investing </span>
                        </div>
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/Line.png"
                              alt="lie"
                              className="img-fluid"
                            />
                          </span>
                        </div>
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/investment.png"
                              alt="investment"
                              className="img-fluid"
                            />
                          </span>
                          <span>Get token & track market </span>
                        </div>
                      </div>
                      <div className="serve-r-bttm">
                        <ul>
                          <li>
                            <img
                              src="imagesWeb/check.png"
                              alt="check"
                              className="img-fluid"
                            />{' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </li>
                          <li>
                            <img
                              src="imagesWeb/check.png"
                              alt="check"
                              className="img-fluid"
                            />{' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 padding-0">
                    <div className="serve-img text-center">
                      <img
                        src="imagesWeb/iPhonex.png"
                        alt="iPhonex"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="brokersTab"
                className={classnames('tabdetail brokersTab active', {
                  'd-none': this.state.openServeTab != 'brokersTab'
                })}
              >
                <div className="row">
                  <div className="col-lg-9 padding-0">
                    <div className="serve-right">
                      <div className="serve-r-top">
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/mobile.png"
                              alt="account"
                              className="img-fluid"
                            />
                          </span>
                          <span>Open Live account </span>
                        </div>
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/Line.png"
                              alt="line"
                              className="img-fluid"
                            />
                          </span>
                        </div>
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/dollar.png"
                              alt="account"
                              className="img-fluid"
                            />
                          </span>
                          <span>Start investing </span>
                        </div>
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/Line.png"
                              alt="lie"
                              className="img-fluid"
                            />
                          </span>
                        </div>
                        <div>
                          <span className="ac-logo">
                            <img
                              src="imagesWeb/investment.png"
                              alt="investment"
                              className="img-fluid"
                            />
                          </span>
                          <span>Get token & track market </span>
                        </div>
                      </div>
                      <div className="serve-r-bttm">
                        <ul>
                          <li>
                            <img
                              src="imagesWeb/check.png"
                              alt="check"
                              className="img-fluid"
                            />{' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </li>
                          <li>
                            <img
                              src="imagesWeb/check.png"
                              alt="check"
                              className="img-fluid"
                            />{' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 padding-0">
                    <div className="serve-img text-center">
                      <img
                        src="imagesWeb/iPhonex.png"
                        alt="iPhonex"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="p-developerTab"
                className={classnames('tabdetail p-developer active', {
                  'd-none': this.state.openServeTab != 'p-developer'
                })}
              >
                <p>Property Developers</p>
              </div>
              <div
                id="asset-managerTab"
                className={classnames('tabdetail asset-manager active', {
                  'd-none': this.state.openServeTab != 'asset-manager'
                })}
              >
                <p>Property Asset managers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Serve;
