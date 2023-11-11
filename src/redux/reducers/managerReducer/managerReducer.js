import {
    SET_AGENT_POINTS,
    SET_CURRENT_AGENT_POINT, SET_DELIVERY_MANUAL,
    SET_DEPARTURE_MANUAL,
    SET_EMPLOYEES,
    SET_TASKS, SET_TUITION_MANUAL
} from "../../../constants/constants";

const initialState = {
    isFetching: false,
    agentPoints: [],
    currentAgentPoint: {},
    employees: [],
    tasks: {
        totalItemCount: 0,
        items: [],
    },
    archivedTasks: {
        totalItemCount: 0,
        items: [],
    },
    departureManual: {},
    tuitionManual: {},
    deliveryManual: {}
}

export const managerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AGENT_POINTS:
            return {...state, agentPoints: action.agentPoints}
        case SET_CURRENT_AGENT_POINT:
            return {...state, currentAgentPoint: action.currentAgentPoint}
        case SET_EMPLOYEES:
            return {...state, employees: action.employees}
        case SET_TASKS:
            return {...state, tasks: action.tasks}
        case SET_DEPARTURE_MANUAL:
            return {...state, departureManual: action.departureManual}
        case SET_TUITION_MANUAL:
            return {...state, tuitionManual: action.tuitionManual}
        case SET_DELIVERY_MANUAL:
            return {...state, deliveryManual: action.deliveryManual}
        case 'SET_ARCHIVED_TASKS':
            return {...state, archivedTasks: action.archivedTasks}


        default:
            return state;
    }
}