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
  console.log('EVENT D++>',PropertyDetail.propertyDetail)
 

  return (
    <Fragment>
      
      <div className="head-main-menu">
      <div className="comp-logo">
        <img src='../imagesWeb/logo.png' alt="logo" style={{width: '200px'}} />
        <span style={{marginLeft:'30px'}}><Link to="/" style={{color:"#b5caca"}} style={{color: '#03A9F4'}}> Back to Events</Link></span>
      </div>
      <div className="main-menu" id="header-toggle">
        
        <ul className="hover-menu" style={{display: 'inline-flex'}}>
         
          <li style={{paddingRight: '25px'}}>
            <Link to="/signup" style={{color:"#b5caca"}}>Sign up</Link>
          </li>
          <li>
            <Link to="/contact" style={{color:"#b5caca"}}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
<div className="text-left" style={{padding:'30px',marginTop: '20px',backgroundColor: '#FF5722'}}>
    {/* <form className="text-center center"> */}

        <div className="clearfix">
          <div className="fancy-input float-left w-25 position-relative">
            <input type="text" name="" placeholder="Search By Place Name" />
            <button className="btn-search">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
         
         
        </div>
      {/* </form> */}
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
