import React from 'react';
import EventListItem from './EventListItem';

const List =(props)=> {
    
    return (
      <>
        {/* <div className="row"> */}

         {props.data.map((data,i)=>(
          <EventListItem PropertyItem={data} />
        ))}
        {/* </div> */}
       </>
    );
  }


export default List;