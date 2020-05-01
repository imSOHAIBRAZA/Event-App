import React from "react";
import Grid from "../../components/Views/Grid/Grid";
import eventSelector from '../../../selector/EventSelector'

const PropertyList = ({propertyData,Filter}) => {
  
    if (propertyData) {
      // const { products } = props.propertyData

      const data = eventSelector(propertyData,Filter)
      
      return (
        propertyData.length ?  <Grid propertyData={data} />:<h1 className="text-center">NO EVENT</h1> 
      )
    }
  };

  export default PropertyList;