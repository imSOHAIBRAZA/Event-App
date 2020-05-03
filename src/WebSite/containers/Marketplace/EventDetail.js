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
import { Link } from 'react-router-dom';


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
 

  return (
    <Fragment>
      
      <div className="head-main-menu" style={{marginBottom:'40px'}}>
      <div className="comp-logo">
        <img src='../imagesWeb/logo.png' alt="logo" style={{width: '200px'}} /><br/>
        <span style={{marginLeft:'30px'}}>
          <Link to="/" style={{color: 'rgb(255, 255, 255)',background: '#ff6a00', margin: '23px',padding: '13px',borderRadius: '9px',position: 'absolute',top: '80px'}}> Back to Events</Link>
          </span>
      </div>
      <div className="main-menu" id="header-toggle">
        
        <ul className="hover-menu" style={{display: 'inline-flex'}}>
         
          <li style={{paddingRight: '25px'}}>
            <Link to="/signup" style={{color:"black"}}>Sign up</Link>
          </li>
          <li>
            <Link to="/contact" style={{color:"black"}}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>


        {
          PropertyDetail.loading ? <h2>Loading..</h2> : PropertyDetail.propertyDetail && 
          <MarketplaceSpecs eventData={PropertyDetail.propertyDetail} />
          }
       
      
      <Footer />
      <FooterBottom />
    </Fragment>
  );
};

export default EventDetail;
