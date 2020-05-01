import React, { useState, useEffect, Fragment } from "react";
import { DateRangePicker } from 'react-dates';
import { useDispatch, useSelector } from "react-redux";

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { getAllPropertiesList } from "../../../actions/marketPlaceAction";
import { setTextFilter } from "../../../actions/filters";


const Search = props => {
  const dispatch = useDispatch();

  const [eventType, setEventType] = useState('');
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment().add('days', 6));
  const [focusedInput, setFocusedInput] = useState(null);
  const [addrtype, setAddrtype] = useState(["Football", "Cricket","BasketBall","K1","UFC"])

  useEffect(() => {

    dispatch(getAllPropertiesList(startDate, endDate));
  }, [startDate,endDate]);

  // useEffect(()=>{
  //   dispatch(setTextFilter(addrtype));
    
  // },[addrtype])


  const Add = addrtype.map(Add => Add)
  const handleAddrTypeChange = (e) => {
    dispatch(setTextFilter(e.target.value));
  }
  return (
    <div className="filteration-type pt-40 pb-40">
      <form>
        <div className="clearfix">
          {/* <div className="fancy-input float-left w-25 position-relative">
            <input type="text" name="" placeholder="Search by name or tag" />
            <button className="btn-search">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div> */}
          <div className="fancy-input float-left">
          < select
            onChange={e => handleAddrTypeChange(e)}
            className="browser-default " style={{width: '187px'}} >
              <option value="" disabled selected style={{fontSize: '20px'}}>Select Event Type</option>
            {
              Add.map((address, key) => <option value={address} style={{fontSize: '20px'}}>{address}</option>)
              }
              <option value=""  style={{fontSize: '20px'}}>Show All</option>

            </select >
           
          </div>
          <div className="text-center">
                 <DateRangePicker
                  startDate={startDate}
                  endDate={ moment(startDate, "DD-MM-YYYY").add('days', 6)}
                  startDateId={2}
                  endDateId={1}
                  onDatesChange={
                    ({ startDate, endDate }) => (
                           setStartDate( startDate ),
                           setEndDate(endDate )
                                                          
                      )}
                  focusedInput={focusedInput}
                  onFocusChange={focusedInput => setFocusedInput(focusedInput )} 
                  // showClearDates={true}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
                        /> 
           </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
