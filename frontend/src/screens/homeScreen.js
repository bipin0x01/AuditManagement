import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Button, Col, Form, Row, Card } from "react-bootstrap";
import { getClientDetailsAction } from "../actions/clientAction";
import DashCard from "../components/DashCard";
import { getAuditorsAction } from "../actions/userActions";
import Auditors from "../components/Auditors";
import Spacer from "../components/Spacer";
import Sidebar from "../components/Sidebar";

const HomeScreen = ({ location, history }) => {
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/login";
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  const clientDetails = useSelector((state) => state.clientDetails);
  const { loading: clientLoading, clients, error: clientError } = clientDetails;

  const auditorsDetails = useSelector((state) => state.auditorsDetails);
  const {
    loading: auditorLoading,
    auditors,
    error: auditorError,
  } = auditorsDetails;

  useEffect(() => {
    if (!userInfo) {
      history.push(redirect);
    }
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAuditorsAction());
    }
    dispatch(getClientDetailsAction());
  }, [history, userInfo, redirect, dispatch]);
  return (
    <>
      <Row>
        <DashCard
          title="No. of Clients"
          value={1000}
          icon={"fas fa-user"}
          color={"grey"}
        />
        <DashCard
          title="No. of .......... "
          value={100}
          icon={"fas fa-briefcase"}
          color={"purple"}
        />
        <DashCard
          title="Total Audits"
          value={100}
          icon={"fas fa-file"}
          color={"blue"}
        />
        <DashCard
          title="No. of .......... "
          value={100}
          icon={"fas fa-briefcase"}
          color={"orange"}
        />
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col sm={12} md={6} xl={3}></Col>
        <Col sm={12} md={12} xl={9}>
          <h1>Auditor Details</h1>
          {auditorLoading ? (
            <Loader />
          ) : auditorError ? (
            <Message variant="danger">{auditorError}</Message>
          ) : (
            <Auditors auditors={auditors} userLogin={userLogin} />
          )}
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
