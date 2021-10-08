import {
  CLIENT_DEL_FAIL,
  CLIENT_DEL_REQ,
  CLIENT_DEL_SUCCESS,
  CLIENT_DETAILS_FAIL,
  CLIENT_DETAILS_REQUEST,
  CLIENT_DETAILS_SUCCESS,
  CLIENT_UPDATE_PROFILE_FAIL,
  CLIENT_UPDATE_PROFILE_REQUEST,
  CLIENT_UPDATE_PROFILE_SUCCESS,
  CLIENT_SINGLE_DETAILS_REQ,
  CLIENT_SINGLE_DETAILS_SUCCESS,
  CLIENT_SINGLE_DETAILS_FAIL,
} from "../constants/clientConstants";
import axios from "axios";
import { USER_LOGIN_SUCCESS } from "../constants/userConstants";

export const getClientDetailsAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLIENT_DETAILS_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/clients`, config);
    dispatch({
      type: CLIENT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLIENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getASingleClientDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLIENT_SINGLE_DETAILS_REQ,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/clients/${id}`, config);
    dispatch({
      type: CLIENT_SINGLE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLIENT_SINGLE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteClient = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLIENT_DEL_REQ,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(`/api/clients/${id}`, config);
    dispatch({
      type: CLIENT_DEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLIENT_DEL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateClientProfile = (client) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLIENT_UPDATE_PROFILE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    console.log(client);
    const { data } = await axios.put(
      `/api/clients/${client._id}`,
      client,
      config
    );
    dispatch({
      type: CLIENT_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
    dispatch(getASingleClientDetails(client._id));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CLIENT_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
