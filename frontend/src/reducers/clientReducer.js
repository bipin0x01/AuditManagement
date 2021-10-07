import {
    CLIENT_DEL_FAIL,
    CLIENT_DEL_REQ,
    CLIENT_DEL_SUCCESS,
  CLIENT_DETAILS_FAIL,
  CLIENT_DETAILS_REQUEST,
  CLIENT_DETAILS_RESET,
  CLIENT_DETAILS_SUCCESS,
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