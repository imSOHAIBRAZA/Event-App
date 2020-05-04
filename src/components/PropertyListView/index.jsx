import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import ClipLoader from "react-spinners/ClipLoader";
import Search from "../../components/Search/Search";
import { getAllPropertiesList } from "../../actions/marketPlaceAction";
import PropertyList from '../PropertyList';


const PropertyListView = (props) => {



  // ** STATE **//

  const [activePage, setActivePage] = useState(0);

  //** GET STATE & DISPATCH WITH STORE **//
  const dispatch = useDispatch();
  const { PropertiesDataRes, Filter } = useSelector(({ marketPlaceReducer,filterReducer }) => ({
    PropertiesDataRes: marketPlaceReducer,
    Filter: filterReducer,

  }));

  // useEffect(() => {

  //   dispatch(getAllPropertiesList(6, 0));
  // }, []);

  const handlePageChange = (pageNumber = 1) => {
    console.log(`active page is ${pageNumber}`);
    const limit = (pageNumber * 6);
    const skip = (pageNumber * 6) - 6;
    setActivePage({ activePage: pageNumber });
    dispatch(getAllPropertiesList(limit, skip));
  }


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
            //size={"150px"} this also works
            color={"#123abc"}
            loading={PropertiesDataRes.loading}
          />
          : PropertiesDataRes.propertiesData &&
          <div className="col-lg-12 custom-container" >
            {/* <Search /> */}

            <PropertyList propertyData={PropertiesDataRes.propertiesData.data} Filter={Filter} />

            {/* <Pagination
              hideNavigation
              hideDisabled
              // firstPageText='First'
              lastPageText='Last'
              activePage={activePage}
              // itemsCountPerPage={9}
              totalItemsCount={PropertiesDataRes.propertiesData.data.totalProducts}
              pageRangeDisplayed={4}
              innerClass="pagination custom-pagination"
              activelinkClass="page-item active"
              linkClass="page-link"
              onChange={handlePageChange}
            /> */}

          </div>
      }
    </Fragment>
  );
};



export default PropertyListView;







//** PAGINATION **//

  //  const productLimitaion=(page, limit)=>{
  //   const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  //   // const totalProductsCount= a.length;
  //   const startLimit = page*limit-limit; 
  //   const endLimit = page*limit

  //   const products= a.slice(startLimit,endLimit);
  //   return products ;
  // }

  // console.log('DATA BY LIMIT',productLimitaion(3,5));

// function handleChangePage(event, newPage, property) {
//   setPage(newPage);
//   const isDesc = orderBy === property && order === 'desc';
//   const orderVal = isDesc ? '+' : '-';
//   const orderByVal = property === 'update_level_cahce' ? '' : property;
//   let params;
//   if(dataSource === "office") {
//     params = {
//       page: newPage,
//       ...store.getState().unitFilters

//     };
//   } else {
//     params = {
//       page: newPage,
//       order: orderVal,
//       orderBy: orderByVal,
//       ...store.getState().unitFilters

//     };
//   }
//   handleFetchData({params});
// }

// {itemsPerPage &&
// <TablePagination
//           component="div"
//           count={itemsCount}
//           rowsPerPage={itemsPerPage}
//           page={page}
//           backIconButtonProps={{
//             'aria-label': <FormattedMessage id="TABLE.NAVIGATION.PREVIOUS_PAGE"/>,
//           }}
//           nextIconButtonProps={{
//             'aria-label': <FormattedMessage id="TABLE.NAVIGATION.NEXT_PAGE"/>,
//           }}
//           onChangePage={handleChangePage}
//           rowsPerPageOptions={[]}
//         />
//         }


// productLimitaion=(page)=>{
//   const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//   const totalProductsCount= a.length;
//   const startLimit = page;
//   const endLimit = page*10
//   const products= a.slice(startLimit-1,endLimit);
//   return products ,totalProductsCount ;
// }