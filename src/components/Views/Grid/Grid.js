import React from 'react';
import PropertyGridItem from './PropertyGridItem';

const Grid =(props)=> {
    
    console.log('GRID MAIN DATA++>', props.propertyData)
    
    return (
      <>
        <div className="row">
        {props.propertyData.map((data,i)=>(
          <PropertyGridItem PropertyItem={data} />
        ))}
         
        </div>
       </>
    );
  }


export default Grid;



