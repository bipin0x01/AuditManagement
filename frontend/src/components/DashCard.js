import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'
const DashCard = ({value,title}) => {
    return (
        <>
            <div className="col-xl-3 col-sm-6 col-12">
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className="icon-pointer danger font-large-2 float-left"></i>
                </div>
                <div className="media-body text-right">
                  <h3>{value}</h3>
                  <span>{title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default DashCard
