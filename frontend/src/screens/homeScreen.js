import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Button, Col, Form, Row, Card } from "react-bootstrap";
import { getClientDetailsAction } from "../actions/clientAction";
import DashCard from "../components/DashCard";

const HomeScreen = ({ location, history }) => {
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/login";
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push(redirect);
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
    </div>
  );
};

export default HomeScreen;
