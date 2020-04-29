import React from "react";
import Grid from "../../components/Views/Grid/Grid";

const PropertyList = (props) => {
    if (props.propertyData) {
      // const { products } = props.propertyData
      return (
        props.propertyData &&  <Grid propertyData={props.propertyData} /> 
      )
    }
  };

  export default PropertyList;