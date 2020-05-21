import React from 'react';
import PropertyGridItem from './PropertyGridItem';

const Grid =(props)=> {
    
    return (
      <>
        <div className="row">
        {(props.propertyData || []).map((data,i)=>(
          <PropertyGridItem PropertyItem={data} />
        ))}
         
        </div>
       </>
    );
  }


export default Grid;



