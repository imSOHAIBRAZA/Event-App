import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import AboutUsNewsletter from '../../components/AboutUs/AboutUsNewsletter';

import AboutUsContact from '../../components/AboutUs/AboutUsContact';
import AboutUsProcess from '../../components/AboutUs/AboutUsProcess';
import AboutUsTab from '../../components/AboutUs/AboutUsTab';
import Footer from '../../components/Footer/Footer';
import FooterBottom from '../../components/Footer/FooterBottom';
import "../../css/body.css";


class AboutUs extends Component {
  render() {
    return (
      <div>
        <Header
          image="imagesWeb/about-background.jpg"
          heading="About Us"
          content="Our managed cloud hosting platform takes away all the
        technical complexities, letting you focus on the growth and
        success of your website with complete peace of mind."
        />
        <div class="contentmain">
          <div class="row">
            <AboutUsContact />

            <AboutUsTab />

            <AboutUsProcess />
          </div>
        </div>
        <AboutUsNewsletter />
        <Footer />
        <FooterBottom />
      </div>
    );
  }
}

export default AboutUs;
