import React from "react";
import Grid from "../../components/Views/Grid/Grid";
import eventSelector from '../../../selector/EventSelector'

const PropertyList = ({propertyData,Filter}) => {
  let filterValue = [...Filter.text].map(v=>v.name)
  // let filterData;
  //  for (let i=0 ;i < filterValue.length ;i++) {
  //   // console.log(filterValue[i]);
    
  //   return filterData = filterValue[i]
  // }
  let filterData=filterValue.forEach(element => element);
  // console.log('sa',filterData)
    if (propertyData) {
      // const { products } = props.propertyData

      const data = eventSelector(propertyData,filterData)
      
      return (
        propertyData.length ?  <Grid propertyData={data} />:<h1 className="text-center">NO EVENT</h1> 
      )
    }
  };

  export default PropertyList;