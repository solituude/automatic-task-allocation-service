import {SET_FULL_NAME, SET_LOGIN, SET_PASSWORD, SET_ROLE} from "../constants/constants";
import {setIsFetching} from "./reducers/employeeReducer/employeeActions";
import {accountsAPI} from "../api/accountsAPI";

export const setLogin = (login) => (
    {type: SET_LOGIN, login}
)

export const setPassword = (password) => (
    {type: SET_PASSWORD, password}
)
export const setRole = (role) => (
    {type: SET_ROLE, role}
)

export const setFullName = (fullName) => (
    {type: SET_FULL_NAME, fullName}
)

export const setNewLogin = (newLogin) => async (dispatch) => {
    dispatch(setLogin(newLogin));
}

export const setNewPassword = (newPassword) => async (dispatch) => {
    dispatch(setPassword(newPassword));
}

export const setNewRole = (newRole) => async (dispatch) => {
    dispatch(setRole(newRole));
}

export const setNewFullName = (newFullName) => async (dispatch) => {
    dispatch(setFullName(newFullName))
}

export const requestAccountsInfo = (header, login) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await accountsAPI.getAccountByLogin(header, login);
    console.log(response)
    let data = response.json();
    if (response.status === 200) {
        data.then(res => {
            dispatch(setFullName(res.fullName));
            dispatch(setRole(res.role));
        })
        // dispatch(setCurrentTask(response.json().items));
        dispatch(setIsFetching(false));
    } else {
        console.log(response)
        dispatch(setIsFetching(false));
    }
}

