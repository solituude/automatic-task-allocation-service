import thunkMiddleware from "redux-thunk"
import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore } from "redux";
import { appReducer } from "./reducer";
import {managerReducer} from "./reducers/managerReducer/managerReducer";
import {employeeReducer} from "./reducers/employeeReducer/employeeReducer";

const reducers = combineReducers({
    main: appReducer,
    manager: managerReducer,
    employee: employeeReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
))

window.store = store