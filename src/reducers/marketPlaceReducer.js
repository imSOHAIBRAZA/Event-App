

const initialState = {
    propertiesData: undefined,
    propertyDetail:undefined,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {

        case "DATA_LODDER":
            return {
                ...state,
                loading: true
            };
            
        case "GET_PROPERTY_SUCCESS":
            return {
                ...state,
                propertiesData: action.data,
                loading: false
            };
            case "GET_PROPERTY_DETAIL_SUCCESS":
                return {
                    ...state,
                    propertyDetail: action.data,
                    loading: false
                };
            

        default:
            return state;
    }
};
