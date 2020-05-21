import EventsApi from "../api/EventsApi";



export function getLodding() {
    return {
        type: 'DATA_LODDER',
    };
}

export function getAllEventList(data) {
    return {
        type: 'GET_PROPERTY_SUCCESS',
        data
    };
}
 
export function getAllPropertiesList(startData, endDate) {

    return async function (dispatch) {

        dispatch(getLodding());
            EventsApi.getEventsByDate(startData, endDate)
            .then(
                ({data})=> dispatch(getAllEventList(data))
            )
            .catch (err=> console.error("ERROR=>", err)) 
 };
} 


export function getEventDetailList(data) {
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
                ({data})=> dispatch(getEventDetailList(data))
            )
        .catch (err=> console.error("ERROR=>", err)) 

    };
} 

