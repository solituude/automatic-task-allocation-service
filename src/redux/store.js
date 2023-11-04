import thunkMiddleware from "redux-thunk"
import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore } from "redux";
import { appReducer } from "./reducer";

const reducers = combineReducers({
    main: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
))

window.store = store