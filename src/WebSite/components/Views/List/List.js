import React from 'react';
import EventListItem from './EventListItem';

const List =(props)=> {
    
    return (
      <>
      
      {/* <form>
        <div className="clearfix">
          <div className="fancy-input float-left w-25 position-relative">
            <input type="text" name="" placeholder="Search by name or tag" />
            <button className="btn-search">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
         
         
        </div>
      </form>
    </div> */}
        {/* <div className="row"> */}

         {props.data.map((data,i)=>(
          <EventListItem PropertyItem={data} />
        ))}
        {/* </div> */}
       </>
    );
  }


export default List;