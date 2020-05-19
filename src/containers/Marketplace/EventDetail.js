import React, { useEffect, Fragment } from 'react';
import Footer from '../../components/Footer/Footer';
import FooterBottom from '../../components/Footer/FooterBottom';

import MarketplaceSpecs from '../../components/Marketplace/MarketplaceSpecs';
import MarketplaceFilter from '../../components/Marketplace/MarketplaceFilter';
import MarketplaceSearch from '../../components/Marketplace/MarketplaceSearch';
 import { getPropertyDetail } from "../../actions/marketPlaceAction";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import logo from '../../images/logo.png'
import axios from "axios";
import { Base_Url } from '../../app.constant';




// import "../../css/body.css";



const EventDetail = (props) => {
  const dispatch = useDispatch();
  const { PropertyDetail} = useSelector(({ marketPlaceReducer }) => ({PropertyDetail: marketPlaceReducer,}));
  
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPropertyDetail(props.match.params.id));

const eventDetail = async () => {
      // const TOKEN = getItem("accessToken");
      const ajaxRequestHeaders = {
          "Content-Type": "application/json",
          Accept: "application/json",
      };
      let response = await axios({
          url: `${Base_Url}/eventscustomers/${props.match.params.id}`,
          method: "PUT",
          headers: ajaxRequestHeaders,
          
      });
      return response;
  }
  },[]);
 

  

  return (
    <Fragment>
      <div className="container-fluid">
      <div className="head-main-menu" style={{margin:'40px 40px'}}>
      <div className="comp-logo">
        <img src={logo} alt="logo" style={{width: '200px'}} /><br/>
        <span >
          <Link to="/" style={{color: 'rgb(255, 255, 255)',background: '#ff6a00', marginTop: '35px',padding: '13px',borderRadius: '9px',position: 'absolute',top: '80px'}}> Back to Events</Link>
          </span>
      </div>
      <div className="main-menu" id="header-toggle" style={{marginBottom: '25px'}}>
        
        <ul className="hover-menu" style={{display: 'inline-flex'}}>
         
          <li style={{paddingRight: '25px'}}>
            <Link to="/signup" style={{color:"#f96716"}}>Sign up</Link>
          </li>
          <li>
            <Link to="/contact" style={{color:"#f96716"}}>Contact</Link>
          </li>
        </ul>
      </div>
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
