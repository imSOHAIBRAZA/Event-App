import React from "react";

const Pagination = () => {
  return (
    <div className="row pt-3 pb-4">
      <div className="col-lg-12">
        <div className="pt-40 text-right">
          <a href="#" className="d-inline-block fs-18 purple pr-2">
            Add a feedback
          </a>
          <i
            className="fa fa-commenting-o d-inline-block"
            aria-hidden="true"
          ></i>
        </div>
        {/* pagination not possible using javascript */}
        <div className="pt-40 text-right clearfix">
          <div className="float-right">
            <nav aria-label="Page navigation example">
              <ul className="pagination custom-pagination">
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Last
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;


//  const productLimitaion=(page, limit)=>{
//     const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
//     // const totalProductsCount= a.length;
//     const startLimit = page*limit-limit; 
//     const endLimit = page*limit

//     const products= a.slice(startLimit,endLimit);
//     return products ;
//   }

//   console.log('DATA BY LIMIT',productLimitaion(1,10));