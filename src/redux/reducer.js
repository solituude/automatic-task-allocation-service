import {SET_FULL_NAME, SET_LOGIN, SET_PASSWORD, SET_ROLE} from "../constants/constants";

const initialState = {
    login: 'пупупу',
    password: '',
    role: '',
    fullName: '',
    isFetching: false,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {...state, login: action.login}

        case SET_PASSWORD:
            return {...state, password: action.password}

        case SET_ROLE:
            return {...state, role: action.role}

        case SET_FULL_NAME:
            return {...state, fullName: action.fullName}

        default:
            return state;
    }
}