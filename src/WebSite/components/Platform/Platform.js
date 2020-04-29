import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FooterBottom from "../Footer/FooterBottom";

const Platform = () => {
  return (
    <>
      <Header
        image="imagesWeb/platform-banner.png"
        heading="Platform"
        content="Our managed cloud hosting platform takes away all the technical complexities, letting you focus on the growth and success of your website with complete peace of mind."
      />
      <div className="row">
        <div className="col-lg-12">
          <div className="custom-container">
            <div className="how-works pt-120 pb-120">
              <div className="pb-80">
                <h3 className="play-fair color-gray m-0 fs-36 pb-40">
                  How it works
                </h3>
                <div className="about-invest pb-40">
                  <h3 className="fs-24 mb-3 purple fw-bold">Property Investment</h3>
                  <p className="m-0 color-gray fs-18">
                    Bricktrade is an independent investment management firm
                    focused on emerging markets. Our capabilities span from deal
                    origination and structuring to legal, technical and
                    financial due diligence, trading and risk mitigation. All
                    our activities are driven by extensive research to identify
                    and capture investment opportunities where fundamental asset
                    value has diverged from market price.
                  </p>
                </div>
                <div className="investing-steps text-center">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 first pl-0 line-vertical">
                      <div className="h-95">
                        <img src="imagesWeb/open-account.png" alt="icon" />
                      </div>
                      <p className="m-0 fs-18 purple">Open live account </p>
                      <div className="dotted-border"></div>
                    </div>
                    <div className="col-lg-4 col-md-4 first line-vertical">
                      <div className="h-95">
                        <img src="imagesWeb/fund.png" alt="icon" className="pt-2" />
                      </div>
                      <p className="m-0 fs-18 purple line-dashed">
                        Fund your account
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 first pr-0">
                      <div className="h-95">
                        <img
                          src="imagesWeb/investing.png"
                          alt="icon"
                          className="pb-sm-10"
                        />
                      </div>
                      <p className="m-0 fs-18 purple line-dashed">
                        {" "}
                        Start investing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="about-invest pb-40">
                  <h3 className="fs-24 mb-3 purple fw-bold">
                    Property Crowdfunding or Fundraising
                  </h3>
                  <p className="m-0 color-gray fs-18">
                    Bricktrade is an independent investment management firm
                    focused on emerging markets. Our capabilities span from deal
                    origination and structuring to legal, technical and
                    financial due diligence, trading and risk mitigation. All
                    our activities are driven by extensive research to identify
                    and capture investment opportunities where fundamental asset
                    value has diverged from market price.
                  </p>
                </div>
                <div className="investing-steps text-center absolute-top-30">
                  <div className="row pb-80 sm-pb-0">
                    <div className="col-lg-4 col-md-4 first line-vertical">
                      <div className="h-95">
                        <img src="imagesWeb/investing.png" alt="icon" />
                      </div>
                      <p className="m-0 fs-18 purple">Submit project</p>
                      <div className="dotted-border"></div>
                    </div>
                    <div className="col-lg-4 col-md-4 first line-vertical">
                      <div className="h-95">
                        <img src="imagesWeb/verified.png" alt="icon" />
                      </div>
                      <p className="m-0 fs-18 purple line-dashed">Get verified </p>
                    </div>
                    <div className="col-lg-4 col-md-4 first line-vertical">
                      <div className="h-95">
                        <img src="imagesWeb/raise.png" alt="icon" />
                      </div>
                      <p className="m-0 fs-18 purple line-dashed border-horizontal">
                        Raise Capital{" "}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 first line-vertical">
                      <div className="h-95">
                        <img src="imagesWeb/build-project.png" alt="icon" />
                      </div>
                      <p className="m-0 fs-18 purple">
                        Start building your project
                      </p>
                      <div className="dotted-border"></div>
                    </div>
                    <div className="col-lg-4 col-md-4 first line-vertical">
                      <div className="h-95">
                        <img src="imagesWeb/funded.png" alt="icon" />
                      </div>
                      <p className="m-0 fs-18 purple line-dashed">Get funded</p>
                    </div>
                    <div className="col-lg-4 col-md-4 first">
                      <div className="h-95">
                        <img
                          src="imagesWeb/market.png"
                          alt="icon"
                          className="pb-sm-10"
                        />
                      </div>
                      <p className="m-0 fs-18 purple line-dashed">
                        Listed on the marketplace
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 p-0">
          <div className="our-networks white mx-auto text-center pt-120 pb-120">
            <div className="custom-container">
              <div className="pb-5">
                <h3 className="m-0 fs-36 play-fair pb-40">Our Network</h3>
                <p className="m-0 fs-18">
                  Bricktrade Platform has added new regions:
                </p>
                <p className="m-0 fs-18">
                  Manchester, Birmingham , Glasgow . Our private,
                  software-defined
                </p>
                <p className="m-0 fs-18">
                  network provides fast and reliable connections to users around
                  the UK.
                </p>
              </div>
              <div className="row d-flex align-items-center newtwork-main">
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="pb-5">
                    <h3 className="m-0 pb-4 fs-48">300&#43;</h3>
                    <p className="m-0 fs-18">Technical Contributors</p>
                  </div>
                  <div>
                    <h3 className="m-0 pb-4 fs-48">10&#43;</h3>
                    <p className="m-0">Teams of Partners</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 padd-sm-0">
                  <div>
                    <img src="imagesWeb/map_new.gif" alt="map" className="mw-100" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="pb-5">
                    <h3 className="m-0 pb-4 fs-48">200,000&#43;</h3>
                    <p className="m-0 fs-18">Community Contributors</p>
                  </div>
                  <div>
                    <h3 className="m-0 pb-4 fs-48">90&#43;</h3>
                    <p className="m-0">Core Team Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 p-0">
          <div className="custom-container">
            <div className="pt-120 pb-120">
              <h3 className="m-0 fs-36 text-center pb-80 play-fair">
                The value app provides
              </h3>
              <div className="row d-flex align-items-center plr-90">
                <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12">
                  <div className="parent">
                    <div className="accordion active">
                      <div className="clearfix">
                        <div className="float-left w-5">
                          <span className="circle-red"></span>
                        </div>
                        <div className="float-right w-95">
                          <p className="mb-5 navy-blue fs-18 fw-bold text-left">
                            Headache free transfers anytime, anywhere
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel show">
                      <p className="m-0 fs-16 text-left">
                        In just a few taps you can make realtime transfers with
                        N26. <br />
                        With MoneyBeam you can send, receive or request money
                        from your friends instantly.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="accordion">
                      <div className="clearfix">
                        <div className="float-left w-5">
                          <span className="circle-red"></span>
                        </div>
                        <div className="float-right w-95">
                          <p className="mb-5 navy-blue fs-18 fw-bold text-left">
                            Lost your card&#63; Don't panic, lock it immediately{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <p className="m-0 fs-16 text-left">
                        In just a few taps you can make realtime transfers with
                        N26. With MoneyBeam you can send, receive or request
                        money from your friends instantly.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="accordion">
                      <div className="clearfix">
                        <div className="float-left w-5">
                          <span className="circle-red"></span>
                        </div>
                        <div className="float-right w-95">
                          <p className="mb-5 navy-blue fs-18 fw-bold text-left">
                            Instant push notifications on all account activity
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <p className="m-0 fs-16 text-left">
                        In just a few taps you can make realtime transfers with
                        N26. With MoneyBeam you can send, receive or request
                        money from your friends instantly.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="accordion">
                      <div className="clearfix">
                        <div className="float-left w-5">
                          <span className="circle-red"></span>
                        </div>
                        <div className="float-right w-95">
                          <p className="mb-5 navy-blue fs-18 fw-bold text-left">
                            Login using your fingerprint
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <p className="m-0 fs-16 text-left">
                        In just a few taps you can make realtime transfers with
                        N26. With MoneyBeam you can send, receive or request
                        money from your friends instantly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 text-right md-text-right">
                  <img src="imagesWeb/iPhonex.png" alt="photo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 p-0">
          <div className="blue-back">
            <div className="custom-container pt-40 pb-40">
              <div className="row text-center white">
                <div className="col-lg-3 col-md-6 col-sm-6 pt-md-20">
                  <h3 className="mb-2 fs-48">90&#43;</h3>
                  <p className="m-0 fs-18">Customer recognition rate</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 pt-md-20">
                  <h3 className="mb-2 fs-48">10&#43;</h3>
                  <p className="m-0 fs-18">Reduction in fraud loss</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 pt-md-20">
                  <h3 className="mb-2 fs-48">200,000&#43;</h3>
                  <p className="m-0 fs-18">Fewer abandoned transactions</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 pt-md-20">
                  <h3 className="mb-2 fs-48">300&#43;</h3>
                  <p className="m-0 fs-18">Less customer intervention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 p-0">
          <div className="back-red pt-120 pb-120">
            <div className="custom-container">
              <div className="banking-dashboard white w-100 clearfix d-flex block-d align-items-center">
                <div className="float-left w-50 w-sm-100 pb-sm-20">
                  <img src="imagesWeb/banking-back.png" alt="icon" className="w-100" />
                </div>
                <div className="float-right center-text w-50 pl-151 left-pdding0 w-sm-100">
                  <h3 className="play-fair fs-36 mb-2">
                    Tier-1 Banking Dashboard{" "}
                  </h3>
                  <p className="w-90 mb-3 fs-18">
                    Here Are Some More Features That Simplifies Hosting
                    Complexities
                  </p>
                  <div className="fancy-btn">
                    <button className="btn white-back btn-hover">LEARN MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 p-0">
          <div className="">
            <img src="imagesWeb/future-partner.png" alt="icon" className="w-100" />
          </div>
        </div>
        <div className="col-lg-12 p-0 invest-main">
          <div className="custom-container">
            <div className="clearfix pt-3 pb-3 d-flex block-d align-items-center">
              <div className="float-left center-text w-75 w-sm-100 f-none">
                <h3 className="blue-color mb-2 fs-36 play-fair">
                  Become our Partner
                </h3>
                <p className="m-0 fs-24 blue-color">
                  Here are Some More Features That Simplifies Property
                  Investment
                </p>
              </div>
              <div className="float-left center-text w-25 w-sm-100 f-none text-right left-text pt-sm-20">
                <div className="fancy-btn">
                  <button className="btn">LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="custom-container">
            <div className="features pt-120 pb-120">
              <div className="text-center">
                <h3 className="sectiontitle m-0 pb-40 fs-36 color-gray">
                  Feature Comparison
                </h3>
                <p className="m-0 fs-18 gray2">
                  Following are the comparison table of the the feature
                  Brichtrade offers with what our competitors have in the pot.
                </p>
              </div>
              <div className="comparison-table">
                <form>
                  <table className="table table-comparison table-responsive">
                    <thead>
                      <tr>
                        <th>Features</th>
                        <th>
                          <img src="imagesWeb/tablelogo1.png" alt="logo" />
                        </th>
                        <th>
                          <img src="imagesWeb/tablelogo2.png" alt="logo" />
                        </th>
                        <th>
                          <img src="imagesWeb/tablelogo3.png" alt="logo" />
                        </th>
                        <th>
                          <img src="imagesWeb/tablelogo4.png" alt="logo" />
                        </th>
                        <th>
                          <img src="imagesWeb/tablelogo5.png" alt="logo" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Adaptive multi-layer security</td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                      </tr>
                      <tr>
                        <td>App authentication and authorization</td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                      </tr>
                      <tr>
                        <td>Single Sign On</td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                      </tr>
                      <tr>
                        <td>Duplicate account consolidation</td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                      </tr>
                      <tr>
                        <td>Universal login flow</td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                      </tr>
                      <tr>
                        <td>Custom domains</td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                      </tr>
                      <tr>
                        <td>Centralized provisioning</td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                      </tr>
                      <tr>
                        <td>Role-based permissions</td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                      </tr>
                      <tr>
                        <td>Advanced analytics</td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                      </tr>
                      <tr>
                        <td>Audit logs</td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                      </tr>
                      <tr>
                        <td>Universal login</td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                      </tr>
                      <tr>
                        <td>Central authorization server</td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                      </tr>
                      <tr>
                        <td>Customizable login pages</td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="red-circle" />
                        </td>
                      </tr>
                      <tr>
                        <td>Breached password detection</td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                        <td>
                          <span className="green-circle" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
              <div className="fancy-btn text-center">
                <button className="btn">START INVESTING</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 p-0">
          <div className="newsletter text-center">
            <div className="custom-container">
              <div className="pt-80 white">
                <h3 className="mb-3 sectiontitle ">Newsletter</h3>
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
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Platform;
