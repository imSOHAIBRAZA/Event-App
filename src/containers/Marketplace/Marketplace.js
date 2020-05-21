import React, {Fragment } from "react";
import Header from "../../components/Header/Header";
import PropertyListView from "../../components/PropertyListView/";
import Contact from "../../components/Contact/contact";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search"
import FooterBottom from "../../components/Footer/FooterBottom";
import webbanner from "../../images/webbanner.png"

const Marketplace = () => {

  return (
    <Fragment>
      <Header
        image={webbanner}
        heading="Sports Events"
        content="Our managed cloud hosting platform takes away all the technical complexities, letting you focus on the growth and success of your website with complete peace of mind."
      />
      <Contact />
      <Search />
      <PropertyListView />
      <Footer />
      <FooterBottom />
    </Fragment>
  );
};


export default Marketplace;