import {
    SET_CURRENT_TASK,
    SET_FULL_NAME, SET_IS_FETCHING,
    SET_ROLE,
    SET_TASKS
} from "../../../constants/constants";
import {tasksAPI} from "../../../api/tasksAPI";
import {setLogin} from "../../actions";

export const setFullName = (fullName) => (
    {type: SET_FULL_NAME, fullName}
)

// export const setRole = (role) => (
//     {type: SET_ROLE, role}
// )

export const setTasks = (tasks) => (
    {type: SET_TASKS, tasks}
)

export const setCurrentTask = (currentTask) => (
    {type: SET_CURRENT_TASK, currentTask}
)

export const setIsFetching = (isFetching) => (
    {type: SET_IS_FETCHING, isFetching}
)


export const requestAllTask = (header) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await tasksAPI.getAllTasks(header, 0, 10, 0, 0, 0);
    console.log(response.json())
    if (response.status === 200) {
        dispatch(setTasks(response.json()));
        dispatch(setIsFetching(false));
    } else {
        console.log(response)
        dispatch(setIsFetching(false));
    }
}

export const requestTaskByID = (header, id) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await tasksAPI.getTaskByID(header, id);
    console.log(response.data)
    if (response.status === 200) {
        dispatch(setCurrentTask(response.data));
        dispatch(setIsFetching(false));
    } else {
        console.log(response)
        dispatch(setIsFetching(false));
    }
}

export const requestChangeTaskStatus = (header, body, taskID) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await tasksAPI.changeTaskStatus(header, body, taskID);
    console.log(response.data)
    if (response.status === 200) {
        dispatch(setCurrentTask(response.data));
        dispatch(setIsFetching(false));
    } else {
        console.log(response)
        dispatch(setIsFetching(false));
    }
}


