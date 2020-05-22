import React from 'react';
import EventListItem from './EventListItem';

const List =(props)=> {
    
    return (
      <>

         {props.data.map((data,i)=>(
           
          <EventListItem PropertyItem={data} />
        ))}
       </>
    );
  }


export default List;