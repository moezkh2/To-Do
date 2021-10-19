import { CREATE_TASK, DONE_TASK, DELETE_TASK, EDITE_TASK } from "../Constant/Constant"
export const createTask = (payload) => {
    return {
        type: CREATE_TASK,
        payload
    }
}

export const editeTask = (payload) => {
    return {
        type: EDITE_TASK,
        payload
    }
}

export const doneTask = (payload) => {
    return {
        type: DONE_TASK,
        payload
    }
}

export const deleteTask = (payload) => {
    return {
        type: DELETE_TASK,
        payload
    }
}