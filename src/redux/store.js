import { applyMiddleware,combineReducers, createStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/useReducer";
import { thunk } from "redux-thunk";

const reducers = combineReducers({user:userReducer})
const store= createStore(reducers,applyMiddleware(thunk))

export default store