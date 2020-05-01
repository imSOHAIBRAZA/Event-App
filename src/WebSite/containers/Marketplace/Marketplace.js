import React, { useState, useEffect, Fragment } from "react";
import Header from "../../components/Header/Header";

import PropertyListView from "../../components/PropertyListView/";
import Fundraising from "../../components/Fundraising/Fundraising";
import Contact from "../../components/Contact/contact";
import Testimonials from "../../components/Testimonials/Testimonials";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search"
import FooterBottom from "../../components/Footer/FooterBottom";


const Marketplace = (props) => {


 

  return (
    <Fragment>
      <Header
        image="../../../../images/webbanner.png"
        heading="Sports Events"
        content="Our managed cloud hosting platform takes away all the technical complexities, letting you focus on the growth and success of your website with complete peace of mind."
      />
      <Contact />
      <Search/>
      <PropertyListView />
      {/* <Fundraising /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
      <Footer />
      <FooterBottom />
    </Fragment>
  );
};


export default Marketplace;