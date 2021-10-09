import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import axios from "axios";
import {
  CLIENT_UPDATE_PROFILE_RESET,
  CLIENT_UPDATE_RESET,
} from "../constants/clientConstants";
import {
  getASingleClientDetails,
  updateClientProfile,
} from "../actions/clientAction";

const ClinetEditScreen = ({ match, history }) => {
  const clientId = match.params.id;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [images, setImages] = useState([]);
  const [dp, setDp] = useState("");
  // const [isAdmin, setIsAdmin] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [dpUploading, setDpUploading] = useState(false);
  const [fileUploadError, setFileUploadError] = useState("");
  const [dpUploadError, setDpUploadError] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const {
    loading: userInfoLoading,
    userInfo,
    error: userInfoError,
  } = userLogin;

  const currentClientDetails = useSelector(
    (state) => state.currentClientDetails
  );
  const { loading, error, client } = currentClientDetails;
  const clientUpdate = useSelector((state) => state.clientUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = clientUpdate;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateClientProfile({
        _id: clientId,
        name,
        email,
        password,
        address,
        phone,
        registrationNumber,
        images: images,
        dp,
        // isAdmin: isAdmin,
      })
    );
  };
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: CLIENT_UPDATE_PROFILE_RESET });
      history.push("/admin/clientlist");
    } else {
      if (!client.name || client._id !== clientId) {
        dispatch(getASingleClientDetails(clientId));
      } else {
        setName(client.name);
        setEmail(client.email);
        setAddress(client.address);
        setPhone(client.phone);
        setRegistrationNumber(client.registrationNumber);
        setImages(client.images);
        setDp(client.dp);
        // setIsAdmin(client.isAdmin);
      }
    }
  }, [client, dispatch, clientId, successUpdate, history]);

  const dpUploader = async (e) => {
    setDpUploadError("");
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("clientFile", file);
    setDpUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      console.log(data);
      setDp(data);
      setDpUploading(false);
    } catch (error) {
      console.log(error, " From uploadHandler in ProductEditScreen");
      setDpUploading(false);
    }
  };

  const uploadHandler = async (e) => {
    setFileUploadError("");
    e.preventDefault();
    const files = e.target.files;
    const arrFiles = Object.keys(files).map((key) => files[key]);

    try {
      arrFiles.map((eachFile) => {
        if (eachFile.size > 124000000) {
          throw new Error(
            `A single file should not be more than 100MB: ${eachFile.name}`
          );
        }
      });
      setUploading(true);
      const updateImagesPath = client.images.filter((imageP) => {
        return (
          imageP.split("/")[imageP.split("/").length - 1] !==
          "sampleImage2021oct8.jpeg"
        );
      });
      console.log(updateImagesPath);
      setImages(updateImagesPath);
      const imagesData = await Promise.all(
        arrFiles.map(async (file) => {
          const formData = new FormData();

          formData.append("clientFile", file);
          const config = {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${userInfo.token}`,
            },
          };

          const { data } = await axios.post("/api/upload", formData, config);
          return data.toString().replace(/\n/g, "").trim();
        })
      );
      setImages([...images, ...imagesData]);
      setUploading(false);
    } catch (error) {
      setFileUploadError(error.message);
      setUploading(false);
    }
  };

  return (
    <>
      <Link to="/admin/clientlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="dp" className="py-3">
              <Message variant="warning">
                Valid file types are: jpeg, jpg, png
              </Message>
              {dpUploadError && (
                <Message variant="danger">{dpUploadError}</Message>
              )}
              <Row>
                <Col xl={9}>
                  <Form.Label>
                    Enter Profile Image URL or Select an image
                  </Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="url"
                    value={dp}
                    onChange={(e) => setDp(e.target.value)}
                  ></Form.Control>
                </Col>
                <Col xl={3} style={{}}>
                  <Form.File
                    style={{ position: "relative", top: "50%" }}
                    id="dp-image"
                    onChange={dpUploader}
                  ></Form.File>
                </Col>
              </Row>

              {dpUploading && <Loader />}
            </Form.Group>
            <Form.Group controlId="name" className="py-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email" className="py-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="address" className="py-3">
              <Form.Label>Email Client Address</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="contactNumber" className="py-3">
              <Form.Label>Email Contact Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Contact No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="registrationNumber" className="py-3">
              <Form.Label>Registration Number</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Registration Number"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {/* <Form.Group controlId="isAdmin" className="py-3">
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => {
                  setIsAdmin(e.target.checked);
                }}
              ></Form.Check>
            </Form.Group> */}
            <Form.Group controlId="images" className="py-3">
              <Message variant="warning">
                Valid file types are: jpeg, jpg, png, pdf, docx, xlsx, csv, txt
              </Message>
              {fileUploadError && (
                <Message variant="danger">{fileUploadError}</Message>
              )}
              <Row>
                <Col xl={9}>
                  <Form.Label>
                    Enter images URL (separated with commas)
                  </Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="url1,url2,url3"
                    value={images}
                    onChange={(e) => setImages(e.target.value)}
                  ></Form.Control>
                </Col>
                <Col xl={3} style={{}}>
                  <Form.File
                    style={{ position: "relative", top: "50%" }}
                    id="image-file"
                    name="auditfiles"
                    custom
                    onChange={uploadHandler}
                    multiple="true"
                  ></Form.File>
                </Col>
              </Row>

              {uploading && <Loader />}
            </Form.Group>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ClinetEditScreen;
