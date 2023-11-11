import {
    SET_AGENT_POINTS,
    SET_CURRENT_AGENT_POINT, SET_DELIVERY_MANUAL,
    SET_DEPARTURE_MANUAL,
    SET_EMPLOYEES,
    SET_TASKS, SET_TUITION_MANUAL
} from "../../../constants/constants";
import {tasksAPI} from "../../../api/tasksAPI";
import {setIsFetching} from "../employeeReducer/employeeActions";
import {employeesAPI} from "../../../api/employeesAPI";
import {agentPointsAPI} from "../../../api/agentPointsAPI";
import {tasksManualAPI} from "../../../api/tasksManualAPI";

export const setAgentPoints = (agentPoints) => (
    {type: SET_AGENT_POINTS, agentPoints}
);
export const setNewAgentPoints = (newPayload) => async (dispatch) => {
    dispatch(setAgentPoints(newPayload));
}



export const setCurrentAgentPoint = (currentAgentPoint) => (
    {type: SET_CURRENT_AGENT_POINT, currentAgentPoint}
);
export const setNewCurrentAgentPoint = (newPayload) => async (dispatch) => {
    dispatch(setCurrentAgentPoint(newPayload));
}




export const setEmployees = (employees) => (
    {type: SET_EMPLOYEES, employees}
);
export const setNewEmployees = (newPayload) => async (dispatch) => {
    dispatch(setEmployees(newPayload));
}




export const setTasks = (tasks) => (
    {type: SET_TASKS, tasks}
);
export const setNewTasks = (newPayload) => async (dispatch) => {
    dispatch(setTasks(newPayload));
}


export const setArchivedTasks = (archivedTasks) => (
    {type: 'SET_ARCHIVED_TASKS', archivedTasks}
);
export const setNewArchivedTasks = (newPayload) => async (dispatch) => {
    dispatch(setArchivedTasks(newPayload));
}



export const setDepartureManual = (departureManual) => (
    {type: SET_DEPARTURE_MANUAL, departureManual}
)
export const setNewDepartureManual = (newPayload) => async (dispatch) => {
    dispatch(setDepartureManual(newPayload));
}




export const setTuitionManual = (tuitionManual) => (
    {type: SET_TUITION_MANUAL, tuitionManual}
)
export const setNewTuitionManual = (newPayload) => async (dispatch) => {
    dispatch(setTuitionManual(newPayload));
}




export const setDeliveryManual = (deliveryManual) => (
    {type: SET_DELIVERY_MANUAL, deliveryManual}
)
export const setNewDeliveryManual = (newPayload) => async (dispatch) => {
    dispatch(setDeliveryManual(newPayload));
}

export const updateDeliveryManual = (header, body) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await tasksManualAPI.changeDepartureManual(header, body);
    let data = response.json();
    console.log(response)
    if (response.status === 200) {
        data.then(res => dispatch(setDeliveryManual(res.items)))
        // dispatch(setCurrentTask(response.json().items));
        dispatch(setIsFetching(false));
    } else {
        console.log(response)
        dispatch(setIsFetching(false));
    }
}


export const requestEmployees = (header) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await employeesAPI.getAllEmployees(header, 0, 100);
    let data = response.json();
    console.log(response)
    if (response.status === 200) {
        data.then(res => dispatch(setEmployees(res.items)))
        // dispatch(setCurrentTask(response.json().items));
        dispatch(setIsFetching(false));
    } else {
        console.log(response)
        dispatch(setIsFetching(false));
    }
}

export const requestAgentPoints = (header) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await agentPointsAPI.getAllAgentPoints(header, 0, 10);
    let data = response.json();
    if (response.status === 200) {
        data.then(res => dispatch(setAgentPoints(res.items)))
        // dispatch(setCurrentTask(response.json().items));
        dispatch(setIsFetching(false));
    } else {
        console.log(response)
        dispatch(setIsFetching(false));
    }
}

export const requestDepartureManual = (header) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await tasksManualAPI.getDepartureManual(header);
    let data = response.json();
    console.log(data)
    if (response.status === 200) {
        data.then(res => dispatch(setDepartureManual(res)))
        // dispatch(setCurrentTask(response.json().items));
        dispatch(setIsFetching(false));
    } else {
        console.log(response)
        dispatch(setIsFetching(false));
    }
}

export const requestTuitionManual = (header) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await tasksManualAPI.getTuitionManual(header);
    let data = response.json();
    console.log(data)
    if (response.status === 200) {
        data.then(res => dispatch(setTuitionManual(res)))
        // dispatch(setCurrentTask(response.json().items));
        dispatch(setIsFetching(false));
    } else {
        console.log(response)
        dispatch(setIsFetching(false));
    }
}

export const requestDeliveryManual = (header) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await tasksManualAPI.getDeliveryManual(header);
    let data = response.json();
    console.log(data)
    if (response.status === 200) {
        data.then(res => dispatch(setDeliveryManual(res)))
        // dispatch(setCurrentTask(response.json().items));
        dispatch(setIsFetching(false));
    } else {
        console.log(response)
        dispatch(setIsFetching(false));
    }
}

export const requestAllTasks = (header) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await tasksAPI.getAllTasks(header);
    let data = response.json();
    console.log(data)
    if (response.status === 200) {
        data.then(res => dispatch(setTasks(res)))
        // dispatch(setCurrentTask(response.json().items));
        dispatch(setIsFetching(false));
    } else {
        console.log(response)
        dispatch(setIsFetching(false));
    }
}

export const requestPointByID = (header, id) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await agentPointsAPI.getAgentPointByID(header, id);
    let data = response.json();
    console.log(data)
    if (response.status === 200) {
        data.then(res => dispatch(setCurrentAgentPoint(res)))
        // dispatch(setCurrentAgentPoint(data));
        dispatch(setIsFetching(false));
    } else {
        console.log(response)
        dispatch(setIsFetching(false));
    }
}

export const createNewPoint = (header, body) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await agentPointsAPI.createAgentPoint(header, JSON.stringify(body));
    let data = response.json();
    if (response.status === 200) {
        data.then(res => dispatch(setAgentPoints(res)))
        dispatch(setAgentPoints(response.json()));
        dispatch(setIsFetching(false));
    } else {
        console.log(response)
        dispatch(setIsFetching(false));
    }
}

export const editPoint = (header, body, id) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await agentPointsAPI.updateAgentPointByID(header, body, id);
    let data = response.json();
    if (response.status === 200) {
        data.then(res => console.log(res))

        dispatch(setIsFetching(false));
    } else {
        console.log(response)
        dispatch(setIsFetching(false));
    }
}