import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { studentReducer } from "../reducers/studentReducer";

const reducers = combineReducers ({
    auth: authReducer,
    student: studentReducer
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