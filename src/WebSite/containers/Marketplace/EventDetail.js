import React, { useEffect, Fragment } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import FooterBottom from '../../components/Footer/FooterBottom';


import CustomerQandA from '../../components/CustomerQandA/CustomerQandA';
import Community from '../../components/Community/Community';
import CustomerReview from '../../components/CustomerReview/CustomerReview';
import SponsoredProperty from '../../components/SponsoredProperty/SponsoredProperty';
import MarketplaceSpecs from '../../components/Marketplace/MarketplaceSpecs';
import MarketplaceFilter from '../../components/Marketplace/MarketplaceFilter';
import MarketplaceSearch from '../../components/Marketplace/MarketplaceSearch';
 import { getPropertyDetail } from "../../../actions/marketPlaceAction";

// import Auth from '../../components/Auth/Auth';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


import "../../css/body.css";



const EventDetail = (props) => {
  const dispatch = useDispatch();
  const { PropertyDetail} = useSelector(({ marketPlaceReducer }) => ({PropertyDetail: marketPlaceReducer,}));
  
  useEffect(() => {
    
    dispatch(getPropertyDetail(props.match.params.id));

  },[]);
  console.log('EVENT D++>',PropertyDetail.propertyDetail)
 

  return (
    <Fragment>
      <div className="row">
        {/* <Auth /> */}
        {/* <MarketplaceSearch />
        <MarketplaceFilter /> */}
        {
          PropertyDetail.loading ? <h2>Loading..</h2> : PropertyDetail.propertyDetail && 
          <MarketplaceSpecs eventData={PropertyDetail.propertyDetail} />
          }
        
        {/* <SponsoredProperty />
        <CustomerReview />
        <Community />
        <CustomerQandA />
        <Gallery />
        <Newsletter /> */}
      </div>
      <Footer />
      <FooterBottom />
    </Fragment>
  );
};

export default EventDetail;
