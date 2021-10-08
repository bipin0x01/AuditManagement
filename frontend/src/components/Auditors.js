import React from "react";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Auditors = ({ auditors }) => {
  return (
    <div>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Auditor ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {auditors &&
            auditors.map((auditor) => (
              <tr key={auditor._id}>
                <td>{auditor._id}</td>
                <td>{auditor.name}</td>

                <td>{auditor.email}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Auditors;
