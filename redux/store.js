import { createStore, applyMiddleware, combineReducers } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import userReducer from "./engineReducer";

const combinedReducer = combineReducers({ rootReducer, userReducer });
const initStore = () => {
  return createStore(combinedReducer, composeWithDevTools(applyMiddleware()));
};

export const wrapper = createWrapper(initStore);
