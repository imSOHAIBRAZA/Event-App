import React from "react";
import CustomerQandATop from "./CustomerQandATop";
import CustomerQandABottom from "./CustomerQandABottom";

const CustomerQandA = () => {
  return (
    <div className="col-lg-12 p-0">
      <div className="custom-container">
        <div className="pt-120 pb-120">
          <CustomerQandATop />
          <CustomerQandABottom />
        </div>
      </div>
    </div>
  );
};

export default CustomerQandA;
