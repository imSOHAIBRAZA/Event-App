import { combineReducers } from "redux";
import marketPlaceReducer from '../src/reducers/marketPlaceReducer';
import filterReducer from '../src/reducers/filters';



export default combineReducers({
  
  marketPlaceReducer,
  filterReducer
 
});
