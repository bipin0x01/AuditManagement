import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  createClientAction,
  deleteClient,
  getClientDetailsAction,
} from "../actions/clientAction";
import { CLIENT_CREATE_RESET } from "../constants/clientConstants";

const ClientListScreen = ({ history }) => {
  const dispatch = useDispatch();
  const clientDetails = useSelector((state) => state.clientDetails);
  const { loading, error, clients } = clientDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const clientDelete = useSelector((state) => state.clientDelete);
  const { success: successDelete, loading: loadingDelete } = clientDelete;

  const createClientHandler = () => {
    dispatch(createClientAction());
  };

  const clientCreate = useSelector((state) => state.clientCreate);
  const {
    loading: createLoading,
    success: createSuccess,
    error: createError,
    createdClient,
  } = clientCreate;
  useEffect(() => {
    dispatch({ type: CLIENT_CREATE_RESET });
    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }
    if (createSuccess) {
      history.push(`/admin/clients/${createdClient._id}/edit`);
    } else {
      dispatch(getClientDetailsAction());
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    createSuccess,
    createdClient,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteClient(id));
    }
  };
  return (
    <div>
      <Row>
        <Col sm={6} md={6} xl={6}>
          <h1>Client List / Create Client</h1>
        </Col>
        <Col sm={6} md={6} xl={6}>
          <Button
            className="btn btn-outline-dark"
            onClick={createClientHandler}
          >
            Create Client
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : clients.length === 0 ? (
        <Message variant="danger">No existing client</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>Client ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Registration Number</th>
              <th>Is Admin?</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {clients &&
              clients.map((client) => (
                <tr key={client._id}>
                  <LinkContainer
                    style={{ color: "red" }}
                    to={`/admin/clients/${client._id}/info`}
                  >
                    <td>
                      <p
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        {client.clientId}
                      </p>
                    </td>
                  </LinkContainer>
                  <td>{client.name}</td>
                  <td>
                    <a href={`mailto:${client.email}`}>{client.email}</a>
                  </td>
                  <td>{client.address}</td>
                  <td>{client.phone}</td>
                  <td>{client.registrationNumber}</td>

                  <td>
                    {client.isAdmin ? (
                      <i
                        className="fas fa-check"
                        style={{ color: "green" }}
                      ></i>
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer
                      to={`/admin/clients/${client._id}/edit`}
                      style={{ marginRight: "5px" }}
                    >
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(client._id)}
                    >
                      <i className="fas fa-trash" style={{ color: "red" }}></i>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ClientListScreen;
