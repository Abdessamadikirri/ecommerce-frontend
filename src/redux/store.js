import { applyMiddleware,combineReducers, createStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/useReducer";
import productReduser from "./reducers/productReduser";
import { thunk } from "redux-thunk";

const reducers = combineReducers({user:userReducer,product:productReduser})
const store= createStore(reducers,applyMiddleware(thunk))

export default store