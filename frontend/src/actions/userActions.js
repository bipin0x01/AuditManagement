import {
  USER_DEL_FAIL,
  USER_DEL_REQ,
  USER_DEL_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQ,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQ,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_REQ,
  USER_UPDATE_SUCCESS,
} from "../constants/userConstants";
import axios from "axios";
import { CLIENT_DETAILS_RESET } from "../constants/clientConstants";

//   import { ORDER_MY_ORDERS_LIST_RESET } from "../constants/orderConstants";
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log({ email, password });
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );
    console.log(data);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
  dispatch({
    type: CLIENT_DETAILS_RESET,
  });

  // dispatch({
  //   type: USER_LIST_RESET,
  // });
};

export const getAuditorsAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
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
    const { data } = await axios.get(`/api/users`, config);
    console.log("These are clients:")
    console.log(data)
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// export const userRegisterAction =
//   (name, email, password) => async (dispatch) => {
//     try {
//       dispatch({
//         type: USER_REGISTER_REQ,
//       });
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const { data } = await axios.post(
//         "/api/users/",
//         { email, password, name },
//         config
//       );
//       dispatch({
//         type: USER_REGISTER_SUCCESS,
//         payload: data,
//       });
//       dispatch({
//         type: USER_LOGIN_SUCCESS,
//         payload: data,
//       });
//       localStorage.setItem("userInfo", JSON.stringify(data));
//     } catch (error) {
//       dispatch({
//         type: USER_REGISTER_FAIL,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };

// export const updateUserProfileAction = (user) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_UPDATE_PROFILE_REQUEST,
//     });
//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };
//     const { data } = await axios.put(`/api/users/profile`, user, config);
//     dispatch({
//       type: USER_UPDATE_PROFILE_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: USER_UPDATE_PROFILE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const getUserList = () => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_LIST_REQ,
//     });
//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };
//     const { data } = await axios.get(`/api/users/`, config);
//     dispatch({
//       type: USER_LIST_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: USER_LIST_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const deleteUser = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_DEL_REQ,
//     });
//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };
//     const { data } = await axios.delete(`/api/users/${id}`, config);
//     console.log(data);
//     dispatch({
//       type: USER_DEL_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: USER_DEL_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const updateUser = (user) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_UPDATE_REQ,
//     });
//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };
//     const { data } = await axios.put(`/api/users/${user._id}`, user, config);
//     dispatch({ type: USER_UPDATE_SUCCESS });
//     dispatch({
//       type: USER_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: USER_UPDATE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
