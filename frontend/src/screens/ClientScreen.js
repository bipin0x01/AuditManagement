import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getASingleClientDetails } from "../actions/clientAction";
const ClientScreen = ({ location, history, match }) => {
  const clientMongoId = match.params.id;
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [clientId, setClientId] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [images, setImages] = useState([]);
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [dp, setDp] = useState("");

  const dispatch = useDispatch();

  const currentClientDetails = useSelector(
    (state) => state.currentClientDetails
  );
  const { loading, error, client } = currentClientDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     if (password !== confirmPassword || password.length <= 5) {
  //       setMessage(
  //         "Make sure both password matches and are more than 5 characters long"
  //       );
  //     } else {
  //       dispatch(
  //         updateUserProfileAction({
  //           id: user._id,
  //           name,
  //           email,
  //           password,
  //         })
  //       );
  //     }
  //   };

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    } else {
      if (!client || !client.name) {
        dispatch(getASingleClientDetails(clientMongoId));
      } else {
        setName(client.name);
        setEmail(client.email);
        setAddress(client.address);
        setPhone(client.phone);
        setRegistrationNumber(client.registrationNumber);
        setImages(client.images);
        setCreatedAt(client.createdAt);
        setUpdatedAt(client.updatedAt);
        setClientId(client.clientId);
        setUser(client.user);
        setDp(client.dp);
      }
    }
  }, [dispatch, history, client, clientMongoId, userInfo]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <div class="main-content">
            <div class="container mt-7">
              <h2 class="mb-5">Profile Card</h2>
              <div class="row">
                <div class="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
                  <div class="card card-profile shadow">
                    <div class="row justify-content-center">
                      <div class="col-lg-3 order-lg-2">
                        <div class="card-profile-image">
                          <a href="#">
                            <img src={dp} class="rounded-circle" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                      <div class="d-flex justify-content-between">
                        <a href="#" class="btn btn-sm btn-info mr-4">
                          Connect
                        </a>
                        <a href="#" class="btn btn-sm btn-default float-right">
                          Message
                        </a>
                      </div>
                    </div>
                    <div class="card-body pt-0 pt-md-4">
                      <div class="row">
                        <div class="col">
                          <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                            <div>
                              <span class="heading">22</span>
                              <span class="description">Friends</span>
                            </div>
                            <div>
                              <span class="heading">10</span>
                              <span class="description">Photos</span>
                            </div>
                            <div>
                              <span class="heading">89</span>
                              <span class="description">Comments</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-center">
                        <h3>
                          Jessica Jones
                          <span class="font-weight-light">, 27</span>
                        </h3>
                        <div class="h5 font-weight-300">
                          <i class="ni location_pin mr-2"></i>Bucharest, Romania
                        </div>
                        <div class="h5 mt-4">
                          <i class="ni business_briefcase-24 mr-2"></i>Solution
                          Manager - Creative Tim Officer
                        </div>
                        <div>
                          <i class="ni education_hat mr-2"></i>University of
                          Computer Science
                        </div>
                        <hr class="my-4" />
                        <p>
                          Ryan — the name taken by Melbourne-raised,
                          Brooklyn-based Nick Murphy — writes, performs and
                          records all of his own music.
                        </p>
                        <a
                          href="https://www.creative-tim.com/product/argon-dashboard"
                          target="_blank"
                        >
                          Show more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="footer">
            <div class="row align-items-center justify-content-xl-between">
              <div class="col-xl-6 m-auto text-center">
                <div class="copyright">
                  <p>
                    Made with{" "}
                    <a
                      href="https://www.creative-tim.com/product/argon-dashboard"
                      target="_blank"
                    >
                      Argon Dashboard
                    </a>{" "}
                    by Creative Tim
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default ClientScreen;
