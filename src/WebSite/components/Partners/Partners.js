import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FooterBottom from "../Footer/FooterBottom";

const Partners = () => {
  return (
    <div>
      <Header
        image="imagesWeb/partners-banner.jpg"
        heading="Partners"
        content="Our managed cloud hosting platform takes away all the technical complexities, letting you focus on the growth and success of your website with complete peace of mind."
      />
      <div className="row">
        <div className="custom-container">
          <div className="digi-network text-center">
            <h2>
              Our partners deliver unique value by leveraging the power of the
              Digital Identity Network.
            </h2>
            <p>
              proud to partner with the best solution and technology providers
              in the world. Together, we solve the critical challenge of
              authenticating digital identities, seamlessly distinguishing
              trusted customers from cybercriminals in real time. ThreatMetrix
              built the largest Digital Identity Network®, and our partners make
              it even stronger. Here’s what some of them say…
            </p>
          </div>
        </div>
      </div>
      <div className="invision">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-6">
              <div className="invision-left text-center">
                <img
                  src="imagesWeb/attachment.png"
                  alt="invision"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="invision-right">
                <img
                  src="imagesWeb/left-qoute.png"
                  alt="invision"
                  className="img-fluid"
                />
                <h3>Sarah from Invision</h3>
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
          </div>
        </div>
      </div>
      <div className="how-to-invest blue-bg">
        <div>
          <img src="imagesWeb/advisor-img1.jpg" alt="invest" className="img-fluid" style={{minWidth:"100%"}}/>
        </div>
        <div className="custom-container">
          <div className="col-12">
            <div className="invest-b">
              <div className="invest-l">
                <p className="white-color">Want to know how to invest?</p>
                <p className="white-color">
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
      <div className="partners company-logo">
        <div className="custom-container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="partner-head">
                <h2>Partners</h2>
                <p>
                  We are an independent investment management firm focused on
                  emerging markets. Our capabilities span
                </p>
              </div>
              <ul className="opacity-1">
                <li>
                  <img src="imagesWeb/company.png" alt="logo" className="img-fluid" />
                </li>
                <li>
                  <img src="imagesWeb/company.png" alt="logo" className="img-fluid" />
                </li>
                <li>
                  <img src="imagesWeb/company.png" alt="logo" className="img-fluid" />
                </li>
                <li>
                  <img src="imagesWeb/company.png" alt="logo" className="img-fluid" />
                </li>
                <li>
                  <img src="imagesWeb/company.png" alt="logo" className="img-fluid" />
                </li>
                <li>
                  <img src="imagesWeb/company.png" alt="logo" className="img-fluid" />
                </li>
              </ul>
            </div>
            <div className="row justify-content-center mt-5">
              <a href="#" className="btn view-mo-btn">
                SEE MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" collaborate-bg">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-6">
              <div className="collaborate-l">
                <h3>How we collaborate with partners</h3>
                <p>
                  We are an independent investment management firm focused on
                  emerging markets. Our capabilities span
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="imagesWeb/collaborate.jpg"
                alt="collaborate"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="how-to-invest">
        <div>
          <img src="imagesWeb/advisor-img2.jpg" alt="invest" className="img-fluid" style={{minWidth:"100%"}}/>
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
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default Partners;
