import React from "react";
const DashCard = ({ value, title, icon, color }) => {
  return (
    <>
      <div className="col-xl-3 col-md-6">
        <div className="card">
          <div className="card-block" style={{ padding: "20px" }}>
            <div className="row align-items-center">
              <div className="col-8">
                <p className="text-c-purple">{value}+</p>
                <h6 className="text-muted m-b-0">{title}</h6>
              </div>
              <div className="col-4 text-right">
                <i style={{ fontSize: "2.5rem" }} className={icon}></i>
              </div>
            </div>
          </div>
          <div style={{backgroundColor:`${color}`}} className="card-footer">
            <div className="row align-items-center">
              <div className="col-3">
                <p className="text-white m-b-0"></p>
              </div>
              <div className="col-9 text-white" style={{ textAlign: "left" }}>
                {/* <h2>as</h2> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCard;
