import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import PropertyList from '../PropertyList';


const PropertyListView = () => {



  //** GET STATE & DISPATCH WITH STORE **//

  const { PropertiesDataRes, Filter } = useSelector(({ marketPlaceReducer, filterReducer }) => ({
    PropertiesDataRes: marketPlaceReducer,
    Filter: filterReducer,

  }));
  return (

    <Fragment>
      {
        PropertiesDataRes.loading ?
          <ClipLoader
            css={`
          display: block;
          margin: 0 auto;
          border-color: red;
        `}
            size={80}
            color={"#123abc"}
            loading={PropertiesDataRes.loading}
          />
          : PropertiesDataRes.propertiesData &&
          <div className="col-lg-12 custom-container" >
            <PropertyList propertyData={PropertiesDataRes.propertiesData.data} Filter={Filter} />
          </div>
      }
    </Fragment>
  );
};



export default PropertyListView;


