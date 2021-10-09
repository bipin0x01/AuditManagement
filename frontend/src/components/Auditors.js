import React from "react";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
const Auditors = ({ auditors }) => {
  const deleteHandler = (id) => {};
  return (
    <div>
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
              <tr key={auditor._id}>
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
                      style={{ color: "green", fontSize: "1.5rem", position:"relative", left:"50%", transform:"translate(-50%)" }}
                      className="fas fa-check"
                    ></i>
                  ) : (
                    <i
                      style={{ color: "red", fontSize: "1.5rem", position:"relative", left:"50%", transform:"translate(-50%)" }}
                      className="fas fa-times"
                    ></i>
                  )}
                </td>
                <td>
                  <div>
                    <LinkContainer
                      to={`/master/auditors/${auditor._id}/edit`}
                      style={{ marginRight: "5px" }}
                    >
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(auditor._id)}
                    >
                      <i className="fas fa-trash" style={{ color: "red" }}></i>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Auditors;
