import React, { Component, Fragment } from 'react';
import HomeHeader from '../../components/Home/HomeHeader';
import HomeAbout from '../../components/Home/HomeAbout';
import HomeServices from '../../components/Home/HomeServices';
import HomePortfolio from '../../components/Home/HomePortfolio';
import HomeTechnology from '../../components/Home/HomeTechnology';
import HomePlatform from '../../components/Home/HomePlatform';
import HomeTokensale from '../../components/Home/HomeTokensale';
import HomeRoadmap from '../../components/Home/HomeRoadmap';
import HomeFaq from '../../components/Home/HomeFaq';
import HomeTeam from '../../components/Home/HomeTeam';
import HomeNews from '../../components/Home/HomeNews';
import Footer from '../../components/Footer/Footer';
import FooterBottom from '../../components/Footer/FooterBottom';

import "../../css/style2.css";
import "../../css/body.css";
import "../../css/responsive.css";
import "../../css/style.css";
import "../../css/style1.css";


class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <div className="row">
          <div className="custom-container">
            <div className="row">
              <div className="col-12">
                <p className="enter-address ">Enter address or neighborhood</p>
              </div>
            </div>
          </div>
        </div>
        <HomeAbout />
        <HomeServices />
        <HomePortfolio />
        <HomeTechnology />
        <HomePlatform />
        <HomeTokensale />
        <HomeRoadmap />
        <HomeFaq />
        <HomeTeam />
        <HomeNews />
        <Footer />
        <FooterBottom />
      </div>
    );
  }
}

export default Home;