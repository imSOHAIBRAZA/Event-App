import React from "react";

const MarketplaceSearch = () => {
  function togglemenu(id, icon) {
    document.getElementById(id).classList.toggle("d-block");
    var cross = document.getElementById(icon);
    cross.classList.toggle("fa-times");
    cross.classList.toggle("fa-bars");
  }
  return (
    <div className="col-lg-12 p-0">
      <div className="second-header">
        <div className="custom-container">
          <div className="clearfix d-flex align-items-center">
            <div className="float-left w-30">
              <div className="d-inline-block pr-3">
                <img
                  src={"../imagesWeb/logo-header.png"}
                  alt="logo"
                />
              </div>
              <div className="d-inline-block md-d-none">
                <form>
                  <div className="searchInt">
                    <input type="text" name="" value="Search by name or tag" />
                    <button className="searchBtn">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="float-right text-right w-70">
              <div className="portfolio-menu d-inline-block">
                <div
                  id="header-toggle11"
                  className="none-display menu-togglebar"
                >
                  <ul className="m-0">
                    <li>
                      <a href="#">Markets</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Data</a>
                    </li>
                    <li>
                      <a href="#">Regulation</a>
                    </li>
                    <li>
                      <a href="#">News & Events</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="toggle-menubar white"
                  onClick={() => togglemenu("header-toggle11", "head-toggle12")}
                >
                  <i
                    className="fa fa-bars"
                    aria-hidden="true"
                    id="head-toggle12"
                  ></i>
                </div>
              </div>
              <div className="ml-4 fancy-btn center-text d-inline-block md-d-none">
                <button className="btn btn-details">ENLIST PROPERTY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceSearch;
