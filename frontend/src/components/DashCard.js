import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Message from "./Message";
const DashCard = ({ value, title, icon }) => {
  return (
    <>
      <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-1 p-1 rounded">
          <Card.Body>
            <Card.Title as="div">
              <i
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "3rem",
                }}
                className={icon}
              ></i>
            </Card.Title>
            <Card.Text
              style={{ textAlign: "center", fontSize: "2rem" }}
              as="div"
            >
              {title}
            </Card.Text>
            <Card.Text
              style={{
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "700",
              }}
              as="h3"
              className="mt-2"
            >
              {value}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* <div className="col-xl-3 col-sm-6 col-12">
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className="icon-pointer danger font-large-2 float-left"></i>
                </div>
                <div className="media-body text-right">
                  {value > 0 ? (
                    <div>
                      <i
                        style={{ marginRight: "5px" }}
                        className="fas fa-user"
                      ></i>
                      <span  style={{ marginRight: "5px" }}>{value}</span>

                      <span>{title}</span>
                    </div>
                  ) : (
                    <Message variant="danger">No existing Clients</Message>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </>
  );
};

export default DashCard;
