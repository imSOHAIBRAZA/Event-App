import React from "react";
import DatePicker from 'react-datepicker';

const Search = props => {
 

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
            <select>
                <option value="">Filter By Games</option>
                <option value="1">Football</option>
                <option value="2">Cricket</option>
                <option value="3">BasketBall</option>
                <option value="3">K1</option>
                <option value="3">UFC</option>
                <option value="3">Show ALL</option>
            </select>
          </div>
          {/* <div className="fancy-input float-left ">
            <select>
            <option>City</option>
                <option value="1">London</option>
                <option value="2">Monchister</option>
                <option value="3">Islamabad</option>
            </select>
          </div> */}
          {/* <div className="fancy-input float-left ">
          <select name="category" id="input-icategory">
									<option>Token Price range</option> 
									<option>£1-£10</option>
									<option>£10-£20</option>
									<option>£20-£30</option>
									<option>£30-£40 </option>
									<option>£50+ </option>
								</select>
          </div> */}
          {/* <div className="market-date-fancy-input float-left "> */}
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
            {/* <input type='date' name='date' id='date'/> 
             <select>
              <option>Live date</option>
              <option>Live date</option>
              <option>Live date</option>
            </select> */}
          {/* </div> */}
          {/* <div className="fancy-input float-left">
            <select className="border-0">
              <option>Launched</option>
              <option>Launched</option>
              <option>Launched</option>
            </select>
          </div>
          <div className="fancy-input float-left">
            <select className="border-0">
              <option>Latest</option>
              <option>Latest</option>
              <option>Latest</option>
            </select>
          </div> */}
          {/* <div className="float-right responsive-left pt-2">
            <a href="#" onClick={e => toggleView(e, "list")}>
              <img
                src="imagesWeb/filter-icon.png"
                alt="icon"
              />
            </a>
            <a href="#" onClick={e => toggleView(e, "grid")}>
              <img
                src="imagesWeb/filter-icon2.png"
                alt="icon"
              />
            </a>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default Search;
