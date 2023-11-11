import {
    SET_CURRENT_TASK,
    SET_FULL_NAME, SET_IS_FETCHING,
    SET_LOGIN,
    SET_PASSWORD,
    SET_ROLE,
    SET_TASKS
} from "../../../constants/constants";

const employeeState = {
    fullName: '',
    tasks: [],
    currentTask: {},
    header: new Headers(),

    isFetching: false,
}

export const employeeReducer = (state = employeeState, action) => {
    switch (action.type) {
        case SET_FULL_NAME:
            return {...state, fullName: action.fullName}

        case SET_TASKS:
            return {...state, tasks: action.tasks}

        case SET_CURRENT_TASK:
            return {...state, currentTask: action.currentTask}

        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state;
    }
}