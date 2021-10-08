import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  auditorsDetailReducer,
  userLoginReducer,
} from "./reducers/userReducers";
import {
  clientDeleteReducer,
  clientDetailsReducer,
  clientUpdateProfileReducer,
  singleClientDetailsReducer,
} from "./reducers/clientReducer.js";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  clientDetails: clientDetailsReducer,
  currentClientDetails: singleClientDetailsReducer,
  auditorsDetails: auditorsDetailReducer,
  clientDelete: clientDeleteReducer,
  clientUpdate: clientUpdateProfileReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
