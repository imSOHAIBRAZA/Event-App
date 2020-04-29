import React, { Component } from "react";
import "./Overview.css";
import { Link } from "react-router-dom";
import "./Overview.css";
import * as images from "./images";
import {Redirect} from 'react-router-dom';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (
      localStorage.getItem('accessToken') === ''
    ) {
      return <Redirect to="/" />;
    }
    else
    return (
      <>     
        <div class="container-fluid dashboard-content p-0 m-0">
          <div class="row pb-4">
            <div class="col-md-12">
              <div class="row pt-5 pb-3">
                <div class="content-head pt-0 pb-0 col-12">
                  <div class="left-content">
                    <div class="row">
                      <div>
                        Dashboard <span className="pt-5">></span>{" "}
                        Overview
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-5 col-12 mt-3">
                  <div class="balance">
                    <div class="row">
                      <div class="col-md-6 col-12">
                        <div class="balance-top">
                          <h2>Available Balance</h2>
                          <div class="balance-amount">$68000</div>
                          <div class="status-dot">
                            <div class="connected">
                              <span>Connected</span>
                              <span>Up and running!</span>
                            </div>
                          </div>
                        </div>
                        <div class="protocol">
                          <span>Protocol version: 10</span>
                          <span>Last ledger: #22903386 </span>
                          <span>closed ~5s ago in 5s.</span>
                          <span>Average ledger close time in </span>
                          <span>the last 200 ledgers: 5.56s.</span>
                        </div>
                        <div class="balance-graph">
                          <span>SEE ALL</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="balance-map">
                          <img src={images.map} class="img-fluid" alt="map" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 col-12 pl-0 pr-0">
                  <div class="row">
                    <div class="col-md-6 col-12 mt-3">
                      <div class="asset-d">
                        <div class="row">
                          <div class="col-md-6 col-12 mt-2 pr-0 justify-content-start">
                            <div class="assets-value">
                              <div>ASSETS VALUE</div>
                            </div>
                          </div>
                          <div class="col-md-6 col-12 mt-2 justify-content-end">
                            <div class="see-all">
                              <div>
                                <a href="#">SEE ALL</a>
                              </div>
                            </div>
                          </div>
                          <table class="market-table">
                            <tbody>
                              <tr>
                                <td>KSS</td>
                                <td class="rig">£16,700</td>
                              </tr>
                              <tr>
                                <td>PPG</td>
                                <td class="rig">£2400</td>
                              </tr>
                              <tr>
                                <td>LLJ</td>
                                <td class="rig">£980</td>
                              </tr>
                              <tr>
                                <td>QWA</td>
                                <td class="rig">£8600</td>
                              </tr>
                              <tr>
                                <td>SBX</td>
                                <td class="rig">£7842</td>
                              </tr>
                              <tr>
                                <td>RQNT</td>
                                <td class="rig">£22,890</td>
                              </tr>
                            </tbody>
                          </table>
                          {/* 
								<div class="asset-value">
									<ul>
										<li><span>KSS</span><span>£16,700</span></li>
										<li><span>PPG</span><span>£2400</span></li>
										<li><span>LLJ</span><span>£980</span></li>
										<li><span>QWA</span><span>£8600</span></li>
										<li><span>SBX</span><span>£7842</span></li>
										<li><span>RQNT</span><span>£22,890</span></li>
									</ul>
								</div> */}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-12 mt-3">
                      <div class="asset-d">
                        <div class="row">
                          <div class="col-md-6 col-12 mt-2">
                            <div class="market-cap">
                              <div>Market Cap</div>
                            </div>
                          </div>
                          <div class="col-md-6 col-12 mt-2">
                            <div class="see-all">
                              <div>
                                <a href="#">SEE ALL</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="table-bar">
                          <table class="market-table">
                            <tr>
                              <th>Cod</th>
                              <th>Cur</th>
                              <th class="pr-ice">Price</th>
                              <th>+/-</th>
                              <th>%+/-</th>
                            </tr>
                            <tr>
                              <td>KSS</td>
                              <td>GBP17</td>
                              <td class="pr-ice">17</td>
                              <td>
                                <img src={images.vector3} />
                                +4.00
                              </td>
                              <td>
                                <img src={images.vector3} />
                                +2.06
                              </td>
                            </tr>
                            <tr>
                              <td>PPG</td>
                              <td>GBP8</td>
                              <td class="pr-ice">8</td>
                              <td>
                                <img src={images.vector3} />
                                +0.50
                              </td>
                              <td>
                                <img src={images.vector3} />
                                +1.59
                              </td>
                            </tr>
                            <tr>
                              <td>LLJ</td>
                              <td>GBP19</td>
                              <td class="pr-ice">19</td>
                              <td>
                                <img src={images.vector4} />
                                -2.00
                              </td>
                              <td>
                                <img src={images.vector4} />
                                -0.60
                              </td>
                            </tr>
                            <tr>
                              <td>QWA</td>
                              <td>GBP34</td>
                              <td class="pr-ice">34</td>
                              <td>
                                <img src={images.vector4} />
                                -5.00
                              </td>
                              <td>
                                <img src={images.vector4} />
                                -1.45
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <div class="asset-portfolio">
                        <div class="row">
                          <div class="col-12 justify-content-start">
                            <div class="assets-value">
                              <div>Assets Portfolio</div>
                              <div>
                                <a href="#">SEE ALL</a>
                              </div>
                            </div>
                            <div class="asset-data">
                              <div class="blue-eiffa">
                                <div class="prog">
                                  <img src={images.p1} />
                                </div>
                                <div class="blue-persan">
                                  <h2>29%</h2>
                                </div>
                              </div>
                              <div>EIFFA</div>
                            </div>
                            <div class="asset-data">
                              <div class="blue-eiffa">
                                <div class="prog">
                                  <img src={images.p2} />
                                </div>
                                <div class="blue-persan">
                                  <h2>7%</h2>
                                </div>
                              </div>
                              <div>Goodman</div>
                            </div>

                            <div class="asset-data">
                              <div class="blue-eiffa">
                                <div class="prog">
                                  <img src={images.p3} />
                                </div>
                                <div class="blue-persan">
                                  <h2>5%</h2>
                                </div>
                              </div>
                              <div>Chugai</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <div class="send-lc-network">
                        <div class="send-request">
                          <h2>
                            <a href="#" class="active">
                              Send / Request
                            </a>
                          </h2>
                          <h2 for="Request-bord" class="secure-ities">
                            <a href="#">SECURITIES</a>
                          </h2>
                        </div>

                        <form action="" method="post" class="send-network-form">
                          <div class="row d-flex justify-content-between">
                            <div class="form-group wallet col-md-6 pl-0 pr-1">
                              <label for="wallet"></label>
                              <input
                                type="text"
                                class="form-control"
                                id="wallet"
                                placeholder="UYX"
                              />
                              <img
                                class="image-verifive"
                                src={images.elipse5}
                              />
                            </div>
                            <div class="form-group amount col-md-6 pl-1 pr-0">
                              <label for="amount"></label>
                              <input
                                type="text"
                                class="form-control"
                                id="amount"
                                placeholder="46000"
                              />
                            </div>
                            <div class="form-group send-to col-md-12 pl-0 pr-0">
                              <label for="send-to"></label>
                              <input
                                type="text"
                                class="form-control"
                                id="send-to"
                                placeholder="david.zar@gmail.com"
                              />
                              <img
                                class="image-verifive"
                                src={images.elipse5}
                              />
                            </div>

                            <div class="form-group wallet col-md-12 pl-0 pr-0">
                              <div class="send-request-btn">
                                <div class="send-but">
                                  <a href="#">SEND</a>
                                </div>
                                <div class="req-but">
                                  <a href="#">REQUEST</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div class="col-lg-5 col-12">
                  <div class="row">
                    <div class="col-md-6 pl-md-0">
                      <div class="card-content">
                        <div class="right-img">
                          <img src={images.vector} alt="icon" />
                        </div>
                        <div class="left-txt">KYC/AML </div>
                        <div>
                          <a href="#" class="click-next">
                            <img src={images.vector1} />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 pr-md-0">
                      <div class="card-content" style={{backgroundColor:'#DCE2EE'}}>
                        <div class="right-img">
                          <img src={images.group3586} alt="icon" />
                        </div>
                        <div class="left-up-txt">Voting System</div>
                        <div class="left-txt padd-10">
                          General Meeting Proxy Voting
                        </div>
                        <div>
                          <a href="#" class="click-next">
                            <img src={images.vector1} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 mt-2 pl-md-0">
                      <div class="card-content mt-3" style={{backgroundColor:'#DCE2EE'}}>
                        <div class="right-img">
                          <img src={images.group3587} alt="icon" />
                        </div>
                        <div class="left-txt">Service</div>
                        <div>
                          <a href="#" class="click-next">
                            <img src={images.vector1} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 mt-2 pr-md-0">
                      <div class="card-content mt-3" style={{backgroundColor:'#DCE2EE'}}>
                        <div class="right-img">
                          <img src={images.group3588} alt="icon" />
                        </div>
                        <div class="left-txt">Entitlement & Dividend</div>
                        <div>
                          <a href="#" class="click-next">
                            <img src={images.vector1} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 col-12 pl-0 pr-0">
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <div class="decentralize">
                        <div class="row">
                          <div class="col-md-6 col pl-0 pr-0">
                            <div class="assets-value">
                              <div>ASSETS VALUE</div>
                            </div>
                          </div>
                          <div class="col-md-6 col pl-0 pr-0">
                            <div class="see-all">
                              <div>
                                <a href="#">SEE ALL</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row pt-3">
                          <div class="col-md-3 pl-0 pr-0">
                            <div class="decentralize-box">
                              <h1>5</h1>
                            </div>
                          </div>
                          <div class="col-md-9 pl-0 pr-0">
                            <div class="decentralize-box1">
                              <div>
                                New Project Listed & <br /> Project Information
                              </div>
                            </div>
                            <div class="decentralize-txt">5 TODAY</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      {localStorage.getItem("role") === "individual" ? (
                        <div class="manage-service">
                          <div class="active-polls">
                            <div class="row">
                              <div class="col-md-8 col pl-0 pr-0">
                                <div class="assets-value">
                                  <div>Running token sale</div>
                                </div>
                              </div>
                              <div class="col-md-4 col pl-0 pr-0">
                                <div class="see-all">
                                  <div>
                                    <a href="#">SEE ALL</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul>
                              <li>Register for upcoming token sale</li>
                              <li> Get alerted for property sale type</li>
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <div class="manage-service">
                          <div class="active-polls">
                            <div class="row">
                              <div class="col-md-8 col pl-0 pr-0">
                                <div class="assets-value">
                                  <div>
                                    Property project Capital fundraising
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-4 col pl-0 pr-0">
                                <div class="see-all">
                                  <div>
                                    <a href="#">Submit Now</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul>
                              <li>
                                Property securitization workflow on Blockchain
                                technology
                              </li>
                              <li>
                                Tokenize property asset to trasnform capital
                                formation process through immutable ledger
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-8 margi-t-32">
                  <div class="white-bg r-custom-padd pt-3 pb-4">
                    <div class="transaction-details">
                      <div class="transaction-head">
                        <h2>
                          Property ASSET Transactions <a href="#"> SEE ALL</a>
                        </h2>
                        <div>
                          <ul class="nav nav-tabs">
                            <li>
                              <a class="active" onclick="openTab('all')">
                                All
                              </a>
                            </li>
                            <li>
                              <a onclick="openTab('send')">SEND</a>
                            </li>
                            <li>
                              <a onclick="openTab('recent')">REQUEST</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="tab-content">
                        <div id="all" class="tab-p">
                          <div class="row">
                            <div class="col-md-6 pl-md-0 ">
                              <div class="transaction-bg">
                                <div class="time-date-value">
                                  <div>15:00, 12 DEC 2020</div>
                                  <div>
                                    <img src={images.vector2} alt="arrow" />
                                    JJK 75000
                                  </div>
                                </div>
                                <div class="transaction-btm">
                                  APL - NZKH - MZRE - 2CTT - 98NPW
                                </div>
                                <div class="data-price">$8,950</div>
                              </div>
                            </div>
                            <div class="col-md-6 pr-md-0">
                              <div class="transaction-bg trans">
                                <div class="time-date-value">
                                  <div>15:00, 12 DEC 2020</div>
                                  <div>
                                    <img src={images.vector2} alt="arrow" />
                                    JJK 75000
                                  </div>
                                </div>
                                <div class="transaction-btm">
                                  APL - NZKH - MZRE - 2CTT - 98NPW
                                </div>
                                <div class="data-price">$8,950</div>
                              </div>
                            </div>
                            <div class="col-md-6 mt-4 pl-md-0">
                              <div class="transaction-bg">
                                <div class="time-date-value">
                                  <div>15:00, 12 DEC 2020</div>
                                  <div>
                                    <img src={images.vector2} alt="arrow" />
                                    JJK 75000
                                  </div>
                                </div>
                                <div class="transaction-btm">
                                  APL - NZKH - MZRE - 2CTT - 98NPW
                                </div>
                                <div class="data-price">$8,950</div>
                              </div>
                            </div>
                            <div class="col-md-6 mt-4 pr-md-0">
                              <div class="transaction-bg">
                                <div class="time-date-value">
                                  <div>15:00, 12 DEC 2020</div>
                                  <div>
                                    <img src={images.vector2} alt="arrow" />
                                    JJK 75000
                                  </div>
                                </div>
                                <div class="transaction-btm">
                                  APL - NZKH - MZRE - 2CTT - 98NPW
                                </div>
                                <div class="data-price">$8,950</div>
                              </div>
                            </div>
                            <div class="col-md-6 mt-4 pl-md-0">
                              <div class="transaction-bg">
                                <div class="time-date-value">
                                  <div>15:00, 12 DEC 2020</div>
                                  <div>
                                    <img src={images.vector2} alt="arrow" />
                                    JJK 75000
                                  </div>
                                </div>
                                <div class="transaction-btm">
                                  APL - NZKH - MZRE - 2CTT - 98NPW
                                </div>
                                <div class="data-price">$8,950</div>
                              </div>
                            </div>
                            <div class="col-md-6 mt-4 pr-md-0">
                              <div class="transaction-bg">
                                <div class="time-date-value">
                                  <div>15:00, 12 DEC 2020</div>
                                  <div>
                                    <img src={images.vector2} alt="arrow" />
                                    JJK 75000
                                  </div>
                                </div>
                                <div class="transaction-btm">
                                  APL - NZKH - MZRE - 2CTT - 98NPW
                                </div>
                                <div class="data-price">$8,950</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="active-poll-back">
                    <div class="active-polls">
                      <div class="row">
                        <div class="col-md-8 col-12 pl-0 pr-0">
                          <div class="assets-value">
                            <div>Bricktrade News </div>
                          </div>
                        </div>
                        <div class="col-md-4 col-12 pl-0 pr-0">
                          <div class="see-all">
                            <div>
                              <a href="#">SEE ALL</a>
                            </div>
                          </div>
                        </div>
                        <ul class="mb-0">
                          <li>
                            German Solaris bank opens subsidiary to provide
                            custody service for digital assets <br />
                            March 16, 2020 at 16:22 UTC
                          </li>
                          <li>
                            Elliptic Launched tool to connect banks with
                            cryptocurrency exchanges <br />
                            March 14, 2020 at 13:22 UTC{" "}
                          </li>
                          <li>
                            SEC Charges Founder, Digital-Asset Issuer With
                            Fraudulent ICO <br />
                            March 11, 2020 at 10:22 UTC
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default Overview;



