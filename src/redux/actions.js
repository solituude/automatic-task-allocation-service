import {SET_FULL_NAME, SET_LOGIN, SET_PASSWORD, SET_ROLE} from "../constants/constants";

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

