import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PropertyGridItem extends Component {


  render() {
    console.log('PropertyGridItem++>', this.props.PropertyItem)
    const { id, title, description, thumbnail, type_event, date } = this.props.PropertyItem
    const { name } = type_event

    //     created_at: "2020-02-12 13:20:52"
    // date: "2020-02-22 19:00:00"
    // deleted_at: null
    // description: "Premier League 19/20"
    // id: 15
    // thumbnail: "395yw6n30bms4swkg8.jpeg"
    // title: "Burnley FC Vs. Bournemouth"
    // type_event:
    // created_at: "2019-12-02 18:30:46"
    // deleted_at: null
    // id: 1
    // name: "Football"
    // updated_at: "2019-12-11 11:09:43
    return (
      <>
        <div id={id} className="col-xl-3 col-lg-3 col-md-4 col-sm-12 pt-3 zero-padding"  >
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

                <div className=" clearfix d-flex align-items-center">
                  <div className="float-left  h-sm-72px">
                    <h5 className="place-head m-0 ">{title}</h5>
                  </div>

                </div>
                <div className="light-gray">
                  <div >



                    <p className="m-0 d-inline-block fs-16" style={{color: '#f96716'}}><strong>{date}</strong></p>
                  </div>
                  <div className="clearfix">
                    <div className="float-left w-100 full-width">
                      <div className="mb-12">
                        <p className="fs-14 d-inline-block m-0 w-60" >
                          {/* <strong>Description</strong> */}
                          </p><br/>
                        <p className="d-inline-block m-0 m-small">
                          {description}
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
