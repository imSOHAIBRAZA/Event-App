import React, { Fragment } from 'react';

const HomeTeam = () => {
  return (
    <Fragment>
      <div className="our-team">
        <div className="custom-container">
          <div className="row">
            <div className="col-12">
              <h2>Our Team</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="team-block">
                <img src="imagesWeb/member1.png" alt="team" className="img-fluid" />
                <div className="team-details">
                  <p>CAROLINE VAUGHN</p>
                  <p>PROJECT MANAGER</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-block">
                <img src="imagesWeb/member2.png" alt="team" className="img-fluid" />
                <div className="team-details">
                  <p>CAROLINE VAUGHN</p>
                  <p>PROJECT MANAGER</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-block">
                <img src="imagesWeb/member3.png" alt="team" className="img-fluid" />
                <div className="team-details">
                  <p>CAROLINE VAUGHN</p>
                  <p>PROJECT MANAGER</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-block">
                <img src="imagesWeb/member1.png" alt="team" className="img-fluid" />
                <div className="team-details">
                  <p>CAROLINE VAUGHN</p>
                  <p>PROJECT MANAGER</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <a href="#" className="btn view-mo-btn">
              OUR TEAM
            </a>
          </div>
        </div>
      </div>

      <div className="network-partners company-logo">
        <div className="custom-container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2>Network of Partners</h2>
              <ul>
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
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-6 margin-tp-32">
              <div className="user-block">
                <img src="imagesWeb/client.png" alt="user" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <p className="usr-name">Nadia Mystry</p>
              </div>
            </div>
            <div className="col-md-6 margin-tp-32">
              <div className="user-block">
                <img src="imagesWeb/client.png" alt="user" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <p className="usr-name">Nadia Mystry</p>
              </div>
            </div>
            <div className="col-md-6 margin-tp-32">
              <div className="user-block">
                <img src="imagesWeb/client.png" alt="user" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <p className="usr-name">Nadia Mystry</p>
              </div>
            </div>
            <div className="col-md-6 margin-tp-32">
              <div className="user-block">
                <img src="imagesWeb/client.png" alt="user" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <p className="usr-name">Nadia Mystry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeTeam;
