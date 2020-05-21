import React, { useState, useEffect, Fragment } from "react";
import { DateRangePicker } from 'react-dates';
import { useDispatch, useSelector } from "react-redux";
import { Multiselect } from 'multiselect-react-dropdown';
import { Form } from 'react-bootstrap';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { getAllPropertiesList } from "../../actions/eventsAction";
import { setTextFilter } from "../../actions/filters";




const Search = props => {
  const dispatch = useDispatch();

  const [eventType, setEventType] = useState('');
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment().add('days', 6));

  const [start_date, set_startdate] = useState(0);
  const [end_date, set_enddate] = useState(7);

  const [focusedInput, setFocusedInput] = useState(null);
  const [addrtype, setAddrtype] = useState([{ name: "Football" }, { name: "Cricket" }, { name: "BasketBall" }, { name: "K1" }, { name: "UFC" }])

  useEffect(() => {
    dispatch(getAllPropertiesList(start_date, end_date));

  }, [start_date,]
  );
  const Add = addrtype.map(Add => Add)
  const handleAddrTypeChange = (e) => {
    dispatch(setTextFilter(e));


  }


  const increment = () => {
    set_startdate(start_date + 7);
    set_enddate(end_date + 7);

  };
  const decrement = () => {
    set_startdate(start_date - 7);
    set_enddate(end_date - 7);

  };
  // const decrement = () => {
  //   set_enddate(end_date + 7);
  // };


  return (
    <div className="conatiner pt-40 pb-40">
      <div className="">
        <div style={{ textAlign: 'center' }}>

          <ul >
            <li className="inlineBlock"> <button onClick={() => decrement()} className="dateFilter"> {`<`}</button></li>

            <li className="inlineBlock"><p className="dateTitle">{`Games Between ${moment().add(start_date, 'days').format('YYYY-MM-DD')} and ${moment().add(end_date, 'days').format('YYYY-MM-DD')}`}</p></li>

            <li className="inlineBlock"><button onClick={() => increment()} className="dateFilter">{`>`}</button></li>
          </ul>

        </div>
      </div>

      <div className="col-md-12 textBoxContainer">
        <div className="clearfix textBoxcenter">

          <div className=" float-left" style={{ marginLeft: '5%' }}>
            <Multiselect
              options={addrtype}
              placeholder="Select Event Type"
              displayValue="name"
              style={{ searchBox: { width: '300px', boxShadow: 'blue 0px 0px 4px' } }}
              showCheckbox={true}
              onSelect={e => handleAddrTypeChange(e)} // Function will trigger on select event
              onRemove={e => handleAddrTypeChange(e)} // Function will trigger on remove event
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Search;
