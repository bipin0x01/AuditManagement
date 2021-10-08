import React from "react";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Auditors = ({ auditors }) => {
  return (
    <div>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Joined Date</th>
          </tr>
        </thead>
        <tbody>
          {auditors &&
            auditors.map((auditor) => (
              <tr key={auditor._id}>
                <td>{auditor.name}</td>
                <td>{auditor.email}</td>

                <td>{auditor.createdAt.substring(0, 10)}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Auditors;
