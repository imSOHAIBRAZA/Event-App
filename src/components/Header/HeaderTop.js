import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

class HeaderTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownactive: false,
      toggleTopHeader:
        localStorage.getItem('accessToken') &&
        localStorage.getItem('verified') == 'true'
          ? true
          : false
    };
    this.toggledropdown = this.toggledropdown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    //this.setState({ user: localStorage.getItem('accessToken') });
  }
  componentDidMount() {
    //this.setState({ user: localStorage.getItem('accessToken') });
  }

  toggledropdown(e) {
    this.setState({
      dropdownactive: !this.state.dropdownactive
    });
  }

  logOut = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  // checkLogin = () => {
  //   setInterval(() => {
  //     console.log('top bar******');
  //     if (
  //       localStorage.getItem('accessToken') &&
  //       localStorage.getItem('verified') == 'true'
  //     ) {
  //       this.setState({ toggleTopHeader: true });
  //     } else {
  //       this.setState({ toggleTopHeader: false });
  //     }
  //   }, 5000);
  // };

  withOutLogin = () => {
    return (
      <div className="row">
        <div className="top-menu">
          <div className="custom-container">
            <div className="top-menu-bar">
              <div className="toggle-menu white text-left">
                <i
                  className="fa fa-bars"
                  aria-hidden="true"
                  id="head-toggle1"
                ></i>
              </div>
              <div className="social-m">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
              <div className="top-right-menu">
                <ul>
                  <li>
                    <a href="#">Who we help</a>
                  </li>
                  <li>
                    <a href="/Signin" target="_blank">
                      Sign In
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  withLogin = () => {
    return (
      <div className="row">
        <div className="col-lg-12 p-0">
          <div className="white port-header-main">
            <div className="custom-container">
              <div className="header-top clearfix d-flex align-items-center header-d-block">
                <div className="float-left w-50 main-header header-left">
                  <ul className="m-0">
                    <li className="d-inline-block">
                      <a href="#">Mail</a>
                      <span className="round-red">1</span>
                    </li>
                    <li className="d-inline-block pl-4">
                      <a href="#">Brick360</a>
                      <span className="round-red">1</span>
                    </li>
                  </ul>
                </div>
                <div className="float-right w-50 text-right header-left">
                  <div className="d-inline-block">
                    <img src="imagesWeb/top-header-image.png" alt="photo" />
                  </div>
                  {'   '} {'   '}
                  <div className="account-d dropdown">
                    <div className="dropdown-buttn1">
                      <span
                        className="popup"
                        style={{ cursor: 'pointer' }}
                        onClick={this.toggledropdown}
                      >
                        {localStorage.getItem('toggleSidebar') === '2'
                          ? 'Admin'
                          : this.props.userReducer.details.first_name
                          ? `${this.props.userReducer.details.first_name} ${this.props.userReducer.details.last_name}`
                          : 'Jack Wilde'}
                        {'   '} {'   '}
                        <img
                          src="imagesWeb/dropdown.png"
                          style={{ paddingLeft: '10px' }}
                          alt="destination"
                        />
                      </span>
                      {'   '} {'   '}
                      <div
                        className={
                          'popupbox dropdown-menu ' +
                          (this.state.dropdownactive === false
                            ? 'd-none'
                            : 'show')
                        }
                        id="myPopup"
                      >
                        <ul className="account">
                          <li>
                            <Link
                              to={
                                localStorage.getItem('toggleSidebar') == '2'
                                  ? '/dashboardAdmin'
                                  : localStorage.getItem('toggleSidebar') == '1'
                                  ? '/overview'
                                  : '#'
                              }
                            >
                              Dasboard
                            </Link>
                          </li>
                          <li
                            onClick={this.logOut}
                            style={{ cursor: 'pointer' }}
                          >
                            <Link to="/SignIn">Logout</Link>
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
      </div>
    );
  };

  render() {
    return (
      <>
        {/* {this.checkLogin()} */}
        <div>
          {this.state.toggleTopHeader ? this.withLogin() : this.withOutLogin()}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default compose(withRouter, connect(mapStateToProps))(HeaderTop);
