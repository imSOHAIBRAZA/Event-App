import React, { useState, useEffect, Fragment } from "react";
import { DateRangePicker } from 'react-dates';
import { useDispatch, useSelector } from "react-redux";
import { Multiselect } from 'multiselect-react-dropdown';
import { Form } from 'react-bootstrap';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { getAllPropertiesList } from "../../actions/marketPlaceAction";
import { setTextFilter } from "../../actions/filters";




const Search = props => {
  const dispatch = useDispatch();

  const [eventType, setEventType] = useState('');
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment().add('days', 6));
  const [focusedInput, setFocusedInput] = useState(null);
  const [addrtype, setAddrtype] = useState([{name:"Football"}, {name:"Cricket"},{name:"BasketBall"},{name:"K1"},{name:"UFC"}])

  useEffect(() => {

    dispatch(getAllPropertiesList(startDate, endDate));
  }, [startDate,endDate]);

  // useEffect(()=>{
  //   dispatch(setTextFilter(addrtype));
    
  // },[addrtype])


  const Add = addrtype.map(Add => Add)
  const handleAddrTypeChange = (e) => {
    // let data = e.key
    // debugger;
    dispatch(setTextFilter(e));
  }
  return (
    <div className="filteration-type pt-40 pb-40">
      
      <form>
        <div className="clearfix">
          
           
          <div className=" float-left" style={{marginLeft:'30px'}}>
          <Multiselect
              options={addrtype}
              placeholder="Select Event Type"
              displayValue="name"
              style={{  searchBox: { width: '300px',boxShadow: 'blue 0px 0px 4px' }} }
              showCheckbox={true}
              onSelect={e => handleAddrTypeChange(e)} // Function will trigger on select event
              onRemove={e => handleAddrTypeChange(e)} // Function will trigger on remove event
            />
          {/* < select 
            onChange={e => handleAddrTypeChange(e)}
            className="browser-default selectpicker" style={{width: '187px',boxShadow: 'blue 0px 0px 4px'}}  >
              <option value="" disabled selected style={{fontSize: '20px'}} >Select Event Type</option>
            {
              Add.map((address, key) => <option value={address} style={{fontSize: '20px',color: 'black'}}>{address}</option>)
              }
              <option value=""  style={{fontSize: '20px'}}>Show All</option>

          </select > */}
           
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
