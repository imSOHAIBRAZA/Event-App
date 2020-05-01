import React from "react";
import Grid from "../../components/Views/Grid/Grid";
import eventSelector from '../../../selector/EventSelector'

const PropertyList = ({propertyData,Filter}) => {
  
    if (propertyData) {
      // const { products } = props.propertyData

      const data = eventSelector(propertyData,Filter)
      
      return (
        propertyData &&  <Grid propertyData={data} /> 
      )
    }
  };

  export default PropertyList;