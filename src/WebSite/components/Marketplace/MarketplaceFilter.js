import React from "react";
import DatePicker from 'react-datepicker';


const MarketplaceFilter = () => {
  return (
    <div className="col-lg-12 p-0">
      <div className="back-gray">
        <div className="custom-container">
          <div className="sub-filter clearfix pt-3 pb-3">
          <div className="fancy-input float-left w-15 position-relative" style={{width: '280px'}}>
            <input type="text" name="" placeholder="Search by name or tag" />
            <button className="btn-search">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
            <div className="fancy-input float-left">
              <select>
                <option value="">Property type</option>
                <option value="1">Residential</option>
                <option value="2">Commercial</option>
                <option value="3">Industrial</option>
                <option value="3">Land</option>

              </select>
            </div>
            <div className="fancy-input float-left">
              <select>
                <option>City</option>
                <option value="1">London</option>
                <option value="2">Monchister</option>
                <option value="3">Islamabad</option>
              </select>
            </div>
            <div className="fancy-input float-left">
              <select>
              <option>Token Price range</option> 
									<option>£1-£10</option>
									<option>£10-£20</option>
									<option>£20-£30</option>
									<option>£30-£40 </option>
									<option>£50+ </option>



              </select>
            </div>
            <div className="market-date-fancy-input float-left">
            <DatePicker
                      
                      onChange={(date)=>{
                        // var abc= date.toISOString()
                        // var bcd= abc.split('T')
                        console.log(date)
                        // this.setState({
                        //   start_date:date,
                        //   start_date_count:bcd
                        // })
                        // console.log(this.state.start_date)
                      }}
          // selected={this.state.start_date}
        /> 
              {/* <select>
                <option>Live date</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select> */}
            </div>
            {/* <div className="fancy-input float-right fancy-btn btn-apply">
              <button className="btn btn-details btn-block">APPLY</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceFilter;
