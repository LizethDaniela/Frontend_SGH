import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { authRegister } from "../reducers/authRegister";

const reducers = combineReducers ({
    auth: authReducer,
    authRegEstudents: authRegister
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);
const store = createStore(reducers, enhancer);

export default store;