import {
  CLIENT_DETAILS_FAIL,
  CLIENT_DETAILS_REQUEST,
  CLIENT_DETAILS_RESET,
  CLIENT_DETAILS_SUCCESS,
} from "../constants/clientConstants";
import axios from "axios";
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
