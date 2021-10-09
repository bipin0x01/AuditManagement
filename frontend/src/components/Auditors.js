import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { deleteAuditor } from "../actions/userActions";

const Auditors = ({ auditors, userLogin }) => {
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteAuditor(id));
  };

  const auditorDelete = useSelector((state) => state.auditorDelete);
  const { loading, success, error } = auditorDelete;

  const { userInfo } = userLogin;

  useEffect(() => {}, [success]);

  return (
    <div>
      {userInfo && (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>Auditor Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Joined Date</th>
              <th>Is Master?</th>
              <th>Edit/Del</th>
            </tr>
          </thead>
          <tbody>
            {auditors &&
              auditors.map((auditor) => (
                <tr
                  style={
                    auditor._id === userInfo._id
                      ? { backgroundColor: "yellow" }
                      : null
                  }
                  key={auditor._id}
                >
                  <Link
                    style={{ color: "red" }}
                    to={`/master/auditors/${auditor._id}/info`}
                  >
                    <td>
                      {auditor._id.substring(
                        auditor._id.length - 8,
                        auditor._id.length + 1
                      )}
                    </td>
                  </Link>
                  <td>{auditor.name}</td>
                  <td>{auditor.email}</td>

                  <td>{auditor.createdAt.substring(0, 10)}</td>
                  <td>
                    {auditor.isMaster ? (
                      <i
                        style={{
                          color: "green",
                          fontSize: "1.5rem",
                          position: "relative",
                          left: "50%",
                          transform: "translate(-50%)",
                        }}
                        className="fas fa-check"
                      ></i>
                    ) : (
                      <i
                        style={{
                          color: "red",
                          fontSize: "1.5rem",
                          position: "relative",
                          left: "50%",
                          transform: "translate(-50%)",
                        }}
                        className="fas fa-times"
                      ></i>
                    )}
                  </td>
                  <td>
                    <div>
                      {(!auditor.isMaster || userInfo._id === auditor._id) && (
                        <LinkContainer
                          to={`/master/auditors/${auditor._id}/edit`}
                          style={{ marginRight: "5px" }}
                        >
                          <Button variant="light" className="btn-sm">
                            <i className="fas fa-edit"></i>
                          </Button>
                        </LinkContainer>
                      )}
                      {userInfo._id === auditor._id ||
                      auditor.isMaster ? null : (
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => {
                            if (window.confirm("Are you sure?")) {
                              deleteHandler(auditor._id);
                            }
                          }}
                        >
                          <i
                            className="fas fa-trash"
                            style={{ color: "red" }}
                          ></i>
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Auditors;
