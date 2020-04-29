import React, { Component } from 'react';
import classnames from 'classnames';


class ServicesGallery extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      openTab: 'educationTab'
    };
  }
  toggleTabHandler = value => {
    if (value == 'educationTab') {
      this.setState({
        openTab: 'educationTab'
      });
    } else if (value == 'consultingTab') {
      this.setState({
        openTab: 'consultingTab'
      });
    } else if (value == 'marketingTab') {
      this.setState({
        openTab: 'marketingTab'
      });
    }
  };

  render() {
    return (
      <div>
         <div className="service-tab-section">
          <div className="custom-container">
            <div className="row">
              <div className="col-12">
                <div className="ac-tabs">
                  <ul>
                    <li
                      onClick={() => this.toggleTabHandler('educationTab')}
                      className={classnames('dtablinks mr-4', {
                        active: this.state.openTab == 'educationTab'
                      })}
                    >
                      <p>
                        <img
                          src="imagesWeb/education.svg"
                          alt="education"
                          className="img-fluid img1"
                        />
                        <img
                          src="imagesWeb/education1.svg"
                          alt="education"
                          className="img-fluid img2"
                        />
                      </p>
                      <a href="javascript:void(0)">Education</a>
                    </li>
                    <li
                      onClick={() => this.toggleTabHandler('consultingTab')}
                      className={classnames('dtablinks mr-4', {
                        active: this.state.openTab == 'consultingTab'
                      })}
                    >
                      <p>
                        <img
                          src="imagesWeb/consulting.svg"
                          alt="consulting"
                          className="img-fluid img1"
                        />
                        <img
                          src="imagesWeb/consulting1.svg"
                          alt="consulting"
                          className="img-fluid img2"
                        />
                      </p>
                      <a href="javascript:void(0)">Consulting</a>
                    </li>
                    <li
                      onClick={() => this.toggleTabHandler('marketingTab')}
                      className={classnames('dtablinks mr-4', {
                        active: this.state.openTab == 'marketingTab'
                      })}
                    >
                      <p>
                        <img
                          src="imagesWeb/marketing.svg"
                          alt="marketing"
                          className="img-fluid img1"
                        />
                        <img
                          src="imagesWeb/marketing1.svg"
                          alt="marketing"
                          className="img-fluid img2"
                        />
                      </p>
                      <a href="javascript:void(0)">Marketing</a>
                    </li>
                  </ul>
                </div>
                <div
                  id="educationTab"
                  class="tabdata"
                  style={{ display: 'none' }}
                >
                  <div className="row">
                    <div className="col-md-7">
                      <div className="edu-left">
                        <h3>
                          Less Worries. <br />
                          More Freedom. Better Business.
                        </h3>
                        <p>
                          Our managed cloud hosting platform takes away all the
                          technical complexities, letting you focus on the
                          growth and success of your website with complete peace
                          of mind.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <img
                        src="imagesWeb/tab-img1.png"
                        alt="education"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div
                  id="consultingTab"
                  className="tabdata consulting"
                  style={{ display: 'none' }}
                >
                  <div className="row">
                    <div className="col-md-7">
                      <div className="edu-left">
                        <h3>
                          Less Worries. <br />
                          More Freedom. Better Business.
                        </h3>
                        <p>
                          Our managed cloud hosting platform takes away all the
                          technical complexities, letting you focus on the
                          growth and success of your website with complete peace
                          of mind.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <img
                        src="imagesWeb/consulting.png"
                        alt="education"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div
                  id="marketingTab"
                  className="tabdata marketing"
                  style={{ display: 'none' }}
                >
                  <div className="row">
                    <div className="col-md-7">
                      <div className="edu-left">
                        <h3>
                          Less Worries. <br />
                          More Freedom. Better Business.
                        </h3>
                        <p>
                          Our managed cloud hosting platform takes away all the
                          technical complexities, letting you focus on the
                          growth and success of your website with complete peace
                          of mind.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <img
                        src="imagesWeb/marketing.png"
                        alt="education"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesGallery;
