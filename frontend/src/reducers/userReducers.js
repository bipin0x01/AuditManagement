import {
  USER_CREATE_FAIL,
  USER_CREATE_REQ,
  USER_CREATE_RESET,
  USER_CREATE_SUCCESS,
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
  USER_SINGLE_DETAILS_FAIL,
  USER_SINGLE_DETAILS_REQ,
  USER_SINGLE_DETAILS_RESET,
  USER_SINGLE_DETAILS_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_REQ,
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESS,
} from "../constants/userConstants.js";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const auditorsDetailReducer = (state = { auditors: [] }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, auditors: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { auditors: [] };

    default:
      return state;
  }
};

export const auditorDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DEL_REQ:
      return { loading: true };
    case USER_DEL_SUCCESS:
      return { loading: false, success: true };
    case USER_DEL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const auditorUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, auditors: action.payload };
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const singleAuditorDetailReducer = (state = { auditor: {} }, action) => {
  switch (action.type) {
    case USER_SINGLE_DETAILS_REQ:
      return { ...state, loading: true };
    case USER_SINGLE_DETAILS_SUCCESS:
      return { loading: false, auditor: action.payload };
    case USER_SINGLE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_SINGLE_DETAILS_RESET:
      return { client: {} };

    default:
      return state;
  }
};

export const auditorCreateReducer = (
  state = { createdAuditor: {} },
  action
) => {
  switch (action.type) {
    case USER_CREATE_REQ:
      return { loading: true };
    case USER_CREATE_SUCCESS:
      return { loading: false, success: true, createdAuditor: action.payload };
    case USER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

