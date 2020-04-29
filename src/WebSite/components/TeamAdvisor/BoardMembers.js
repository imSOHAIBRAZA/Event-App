import React, { Fragment } from 'react';

const BoardMembers = () => {
  return (
    <Fragment>
      <div className="board-members">
        <div className="custom-container">
          <div className="row">
            <div className="col-12">
              <div className="board-head">
                <h2>Board Members</h2>
                <p>
                  We are an independent investment management firm focused on
                  emerging markets. Our capabilities span
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="team-block">
                <img src="imagesWeb/member-img.png" alt="team" className="img-fluid" />
                <div className="team-details">
                  <p>CAROLINE VAUGHN</p>
                  <p>PROJECT MANAGER</p>
                  <p className="social-link">
                    <span className="mr-4">
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="team-block">
                <img src="imagesWeb/member-img.png" alt="team" className="img-fluid" />
                <div className="team-details">
                  <p>CAROLINE VAUGHN</p>
                  <p>PROJECT MANAGER</p>
                  <p className="social-link">
                    <span className="mr-4">
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </span>{' '}
                    <span>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="team-block">
                <img src="imagesWeb/member-img.png" alt="team" className="img-fluid" />
                <div className="team-details">
                  <p>CAROLINE VAUGHN</p>
                  <p>PROJECT MANAGER</p>
                  <p className="social-link">
                    <span className="mr-4">
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </span>{' '}
                    <span>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BoardMembers;
