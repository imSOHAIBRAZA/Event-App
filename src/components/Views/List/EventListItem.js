import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import eventpic from '../../../images/event.png'
import logos from '../../../images/logos.png'

class EventListItem extends Component {

  state = {
    index: 0
  }

  handleSelect = (selectedIndex, e) => {

    this.setState({
      index: selectedIndex
    })
  };






  render() {
    const { broadcasting_date, client } = this.props.PropertyItem
    const { address, city_client, country_client, email, id, is_without_sound, logo, name, nb_tvs, photos, place_size, position_gps, type } = client
    const { name: names } = city_client
    return (
      <>
        <div id={id} className="col-md-9 pt-3 zero-padding" style={{paddingRight: '0px' , backgroundColor:'white'}}>
          <Link to={`${id}`}>
            <div className="item-list position-relative">


              <div className="image-content position-relative" style={{ width: '457px' }}>



                <Carousel activeIndex={this.state.index} onSelect={this.handleSelect} controls={false} >
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-242"
                      src={photos ? `https://havenadmin.adilhaddaoui.com/back/public/uploads/events/${photos}` : `${eventpic}`}
                      alt="First slide"
                    />
                    {/* <Carousel.Caption>
        </Carousel.Caption> */}
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-242"
                      src={photos ? `https://havenadmin.adilhaddaoui.com/back/public/uploads/events/${photos}` : `${eventpic}`}
                      alt="Second slide"
                    />

                    {/* <Carousel.Caption>
        </Carousel.Caption> */}
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-242"
                      src={photos ? `https://havenadmin.adilhaddaoui.com/back/public/uploads/events/${photos}` : `${eventpic}`}
                      alt="Third slide"
                    />

                    {/* <Carousel.Caption>
        </Carousel.Caption> */}
                  </Carousel.Item>
                </Carousel>


                {/* <img
                    // src={`process.env.PUBLIC_URL/${photos}`}
                    
                    src={photos?`https://havenadmin.adilhaddaoui.com/back/public/uploads/events/${photos}`:`../../imagesWeb/event.png`}

                    // src={property_image[0]}
                    alt="icon"
                    className="w-100 h-242"
                  /> */}

                <button className="danger-btn">{broadcasting_date.slice(0, 10)}</button>
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
                    <h3 className="fs-24 m-0">{`${name} `} <span style={{ color: '#FF5722', fontSize: '16px' }}>{`(${type})`}</span></h3>
                    <div className="light-gray">
                      <i className="fa fa-map-marker d-inline-block margin-right"></i>
                      <p className="m-0 d-inline-block fs-16">{names}</p>
                    </div>
                  </div>
                  <div className="item-details-right">
                    {/* <p className="m-0 place-description d-inline-block">
                      {is_without_sound=== 1?<p>Sound On</p>:<p>Sound Off</p>}
                      </p> */}
                    <img
                      style={{ borderRadius: '50%', height: '70px', width: '100px' }}
                      src={logo ? `https://havenadmin.adilhaddaoui.com/back/public/uploads/events/${logo}` : `${logos}`}


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
                  <div className="">{address}</div>

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
                    <div className=""> {is_without_sound === 1 ? <strong>Sound On</strong> : <strong>Sound Off</strong>}</div>
                    <span>    <svg className="bi bi-tv" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M2.5 13.5A.5.5 0 013 13h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 00-.254.302A1.46 1.46 0 001 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 00.538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 00.254-.302 1.464 1.464 0 00.143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 00-.302-.254A1.46 1.46 0 0013.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" clip-rule="evenodd" />
                    </svg>
                      <strong>&nbsp; {nb_tvs}</strong></span>
                     <div className="">No Smoke</div> 
                    <div className="">No Alcohol</div> 
                  </div>

                  <div className="bottm-txt border12 pb-2 fs-14">
                    <div className=""> <i className="fa fa-share d-inline-block margin-right"></i>Share</div>
                    <span><i className="fa fa-map-marker d-inline-block margin-right"></i>I am attending this</span>
                     <div className=""><i className="fa fa-comment d-inline-block margin-right"></i>Report this place</div> 
                    <div >Place Size: {place_size} </div> 
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