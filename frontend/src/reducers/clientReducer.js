import {
  CLIENT_DEL_FAIL,
  CLIENT_DEL_REQ,
  CLIENT_DEL_SUCCESS,
  CLIENT_DETAILS_FAIL,
  CLIENT_DETAILS_REQUEST,
  CLIENT_DETAILS_RESET,
  CLIENT_DETAILS_SUCCESS,
  CLIENT_SINGLE_DETAILS_FAIL,
  CLIENT_SINGLE_DETAILS_REQ,
  CLIENT_SINGLE_DETAILS_RESET,
  CLIENT_SINGLE_DETAILS_SUCCESS,
  CLIENT_UPDATE_PROFILE_FAIL,
  CLIENT_UPDATE_PROFILE_REQUEST,
  CLIENT_UPDATE_PROFILE_RESET,
  CLIENT_UPDATE_PROFILE_SUCCESS,
} from "../constants/clientConstants";

export const clientDetailsReducer = (state = { clients: [] }, action) => {
  switch (action.type) {
    case CLIENT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CLIENT_DETAILS_SUCCESS:
      return { loading: false, clients: action.payload };
    case CLIENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case CLIENT_DETAILS_RESET:
      return { clients: [] };

    default:
      return state;
  }
};

export const clientDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_DEL_REQ:
      return { loading: true };
    case CLIENT_DEL_SUCCESS:
      return { loading: false, success: true };
    case CLIENT_DEL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const clientUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true };
    case CLIENT_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, clients: action.payload };
    case CLIENT_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case CLIENT_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const singleClientDetailsReducer = (state = { client: {} }, action) => {
  switch (action.type) {
    case CLIENT_SINGLE_DETAILS_REQ:
      return { ...state, loading: true };
    case CLIENT_SINGLE_DETAILS_SUCCESS:
      return { loading: false, client: action.payload };
    case CLIENT_SINGLE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case CLIENT_SINGLE_DETAILS_RESET:
      return { client: {} };

    default:
      return state;
  }
};
