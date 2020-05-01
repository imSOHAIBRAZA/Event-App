// import * as types from "./actionTypes";
import EventsApi from "../api/marketPlaceApi";



export function getLodding() {
    return {
        type: 'DATA_LODDER',
    };
}

export function getAllPropertyList(data) {
    return {
        type: 'GET_PROPERTY_SUCCESS',
        data
    };
}
 
export function getAllPropertiesList(startData, endDate) {

    return async function (dispatch) {

        dispatch(getLodding());

        
            // let data = await marketPlaceApi.getAllProperties(limit, skip);
            // dispatch(getAllPropertyList(data));
            EventsApi.getEventsByDate(startData, endDate)
            .then(
                ({data})=> dispatch(getAllPropertyList(data))
            )
            .catch (err=> console.error("ERROR=>", err)) 

    };
} 


export function getPropertyDetailList(data) {
    return {
        type: 'GET_PROPERTY_DETAIL_SUCCESS',
        data
    };
}


export function getPropertyDetail(id) {
     return async function (dispatch) {
        dispatch(getLodding());
        EventsApi.eventDetail(id)
            .then(
                ({data})=> dispatch(getPropertyDetailList(data))
            )
        .catch (err=> console.error("ERROR=>", err)) 

    };
} 

