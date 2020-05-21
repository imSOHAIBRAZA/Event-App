import React from "react";
import Grid from "../../components/Views/Grid/Grid";
import eventSelector from '../../selector/EventSelector'

const PropertyList = ({ propertyData, Filter }) => {
  let filterValue = [...Filter.text].map(v => v.name)
  if (propertyData) {
    const data = eventSelector(propertyData, filterValue)
    return (
      propertyData.length ? <Grid propertyData={data} /> : <h1 className="text-center">NO EVENT</h1>
    )
  }
};

export default PropertyList;