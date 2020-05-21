import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PropertyGridItem extends Component {


  render() {
    console.log('PropertyGridItem++>', this.props.PropertyItem)
    const { id, title, description, thumbnail, type_event, date ,all_eventscustomers} = this.props.PropertyItem
    const { name } = type_event

    
    return (
      <>
        <div id={id} className="col-xl-3 col-lg-3 col-md-4 col-sm-12 pt-3 zero-padding" style={{zIndex: 0}} >
          <Link to={`/event-detail/${id}`}>

            <div className="frame position-relative" style={{boxShadow: 'darkgrey 0px 0px 7px'}}>


              <div className="relative image-content">
                {thumbnail.length > 0 ?
                  <img
                    src={`https://havenadmin.adilhaddaoui.com/back/public/uploads/events/${thumbnail}`}
                    // src={property_image[0]}
                    alt="icon"
                    className="w-100 h-242"
                  /> :

                  <img
                    src={`https://havenadmin.adilhaddaoui.com/back/public/uploads/events/${thumbnail}`}

                    alt="icon"
                    className="w-100 h-242"
                  />
                }

                <span className="danger-btn"  >{name}</span>
              </div>
              <div className="photo-description image-content" >

                <div className=" clearfix d-flex " style={{ height: '75px'}}>
                  <div className="float-left ">
                    <h5 className="place-head m-0 ">{title&&title}</h5>
                  </div>

                </div>
                <div className="light-gray">
                  <div >



                  <p className="m-0 d-inline-block fs-16" style={{color: '#f96716'}}><strong>{date}</strong>
                 <span style={{paddingLeft: '40px'}}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 7l-3.36-2.171c-.405.625-.64 1.371-.64 2.171 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-.742 0-1.438.202-2.033.554l2.033 3.446z"/>
                    </svg>
                    
              <strong style={{color: 'black'}}>{all_eventscustomers.length}</strong>
                    </span>
                  </p>
                   
                   
                  </div>
                  <div className="clearfix">
                    <div className="float-left w-100 full-width">
                      <div className="mb-12">
                        <p className="fs-14 d-inline-block m-0 w-60" >
                          {/* <strong>Description</strong> */}
                          </p><br/>
                        <p className="d-inline-block m-0 m-small">
                          {description&&description.slice(0,30)}
                        </p>
                      </div>
                    </div>

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

export default PropertyGridItem;
