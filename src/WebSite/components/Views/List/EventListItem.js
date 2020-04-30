import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EventListItem extends Component {
 

 
// client: {id: 2, name: "Nurai", email: "nurai@gmail.com", password: "Nurai", place_size: 1000, …}



  
  

  render() {
    const { broadcasting_date,client } = this.props.PropertyItem
    const{address,city_client,country_client,email,id,is_without_sound,logo,name,nb_tvs,photos,place_size,position_gps,type}= client
    const {name:names}=city_client
    return (
      <>
          <div id={id} className="col-md-12 pt-3 zero-padding">
            <Link to= {`${id}`}>
              <div className="item-list position-relative">
               

                <div className="image-content position-relative" style={{width:'457px'}}>
               

                  <img
                    // src={`process.env.PUBLIC_URL/${photos}`}
                    
                    src={photos?`https://havenadmin.adilhaddaoui.com/back/public/uploads/events/${photos}`:`../../imagesWeb/event.png`}

                    // src={property_image[0]}
                    alt="icon"
                    className="w-100 h-242"
                  />
               
                  <button className="danger-btn">{broadcasting_date.slice(0,10)}</button>
                </div>
                <div className="porfolio-item-details">
                  <div className="porfolio-item-details-top">
                    <div className="item-details-left">
                    {/* <div class="rating-stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star rat-opacity"></i>
                  <i class="fa fa-star rat-opacity"></i>
                  <i class="fa fa-star rat-opacity"></i>
                </div> */}
                      <h3 className="fs-24 m-0">{type}</h3>
                      <div className="light-gray">
                        <i className="fa fa-map-marker d-inline-block"></i>
                        <p className="m-0 d-inline-block fs-16">{names}</p>
                      </div>
                    </div>
                    <div className="item-details-right">
                      {/* <p className="m-0 place-description d-inline-block">
                      {is_without_sound=== 1?<p>Sound On</p>:<p>Sound Off</p>}
                      </p> */}
                      <img
                      style={{ borderRadius: '50%', height: '50px', width: '50px' }}
                      src={logo?`https://havenadmin.adilhaddaoui.com/back/public/uploads/events/${logo}`:`../../imagesWeb/logos.png`}
                    

                        alt="icon"
                        className="d-inline-block"
                      />
                    </div>
                  </div>
                  <div className="light-gray">
                    {/* <div className="bottom-details">
                      <div className="bottom-details-l">
                        <div className="bottom-details-l-txt mb-2">
                          <p className="fs-14 d-inline-block mr-3">
                            Funding target
                          </p>
                          <p className="d-inline-block m-small">&#163;1.2M</p>
                        </div>
                        <div className="bottom-details-l-txt mb-2">
                          <p className="fs-14 d-inline-block mr-2">
                            Token Ticker
                          </p>
                          <p className="d-inline-block m-small">
                          {`${'token_ticker'}=${'token_value'}`}
                          </p>
                        </div>
                      </div>
                      <div className="bottom-details-r">
                        <div className="bottom-details-l-txt mb-2">
                          <p className="fs-14 d-inline-block mr-3">
                            Expected Return
                          </p>
                          <p className="d-inline-block m-small">{'expected_return'}&#37;</p>
                        </div>
                        <div className="bottom-details-l-txt mb-2">
                          <p className="fs-14 d-inline-block mr-3">
                          Investment Term
                          </p>
                          <p className="d-inline-block m-small">{'investment_term'}</p>
                        </div>
                      </div>
                    </div> */}
                    <div className="pt-3">
                      <div className="clearfix">
                        {/* <div className="tooltip-bar float-left">&#163;{'soft_cap'}</div>
                        <div className="tooltip-bar float-right">&#163;{'hard_cap'}</div> */}
                        <div className="bars">
                          <div className="bar">
                            <div
                              className="bar-progress"
                              // data-percent="&#163;29M"
                              // data-max="135"
                              // data-min="42"
                              data-scale="89"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottm-txt border12 pb-2 fs-14">
                      <div className=""> {is_without_sound=== 1?<strong>Sound On</strong>:<strong>Sound Off</strong>}</div>
                    <div className="">{address}</div>
                      {/* <div className="">Hardcap</div> */}
                    </div>
                    <div className="user-bottom mt-2 mb-2">
                      <div className="d-flex">
                        {/* <div className="mr-2 position-relative">
                      
                          <img
                            src={
                              // manager_avatar
                              process.env.PUBLIC_URL + 'images/owner-image.png'
                            }
                            alt="icon"
                            style={{ borderRadius: '50%', height: '50px', width: '50px' }}
                            className="w-30px"
                          
                          /> 
                          <img
                            src='imagesWeb/msg.png'
                            alt="icon"
                            className="lr-0 w-10px"
                          />
                        </div> */}
                        {/* <div className="user-designation">
                          <h3 className="m-0 fs-14 fw-bold mr-3">
                          {'manager_name'}
                          </h3>
                          <span className="m-0 fs-12">Property Manager</span>
                        </div> */}
                      </div>
                      {/* <div className="">
                        <a href="#" className="see-details-btn btn">
                          See Details
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

       
      </>
    );
  }
}

export default EventListItem;