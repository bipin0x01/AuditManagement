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
    <div>
      <Row>
        <DashCard title="No. of Clients" value={10} icon={"fas fa-user"} />
        <DashCard title="No. of Clients" value={10} icon={"fas fa-user"} />
        <DashCard title="No. of Clients" value={10} icon={"fas fa-user"} />
        <DashCard title="No. of Clients" value={10} icon={"fas fa-user"} />
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col sm={12} md={6} xl={3}>
          <DashCard title="No. of Clients" value={10} icon={"fas fa-user"} />
        </Col>
        <Col sm={12} md={12} xl={9}>
          <Auditors auditors={auditors} />
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
