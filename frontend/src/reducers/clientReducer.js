import {
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
      return { clients: {} };

    default:
      return state;
  }
};
