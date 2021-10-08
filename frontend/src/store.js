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
} from "./reducers/clientReducer.js";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  clientDetails: clientDetailsReducer,
  auditorsDetails: auditorsDetailReducer,
  clientDelete: clientDeleteReducer,
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
