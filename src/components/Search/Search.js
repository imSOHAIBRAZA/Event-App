import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Multiselect } from 'multiselect-react-dropdown';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { getAllPropertiesList } from "../../actions/eventsAction";
import { setTextFilter } from "../../actions/filters";




const Search = props => {
  const dispatch = useDispatch();

  const [start_date, set_startdate] = useState(0);
  const [end_date, set_enddate] = useState(7);
  const [addrtype, setAddrtype] = useState([{ name: "Football" }, { name: "Cricket" }, { name: "BasketBall" }, { name: "K1" }, { name: "UFC" }])

  useEffect(() => {
    dispatch(getAllPropertiesList(start_date, end_date));

  }, [start_date,]
  );
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
