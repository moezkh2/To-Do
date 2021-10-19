import { CREATE_TASK, DONE_TASK, DELETE_TASK, EDITE_TASK } from "../Constant/Constant"
const initialTasks = [
    /* {
        id: 1,
        description: "go to the gym",
        isDone: false
    },
    {
        id: 2,
        description: "drink water",
        isDone: false
    } */
];
const TaskReducer = (state = initialTasks, action) => {
    switch (action.type) {
        case CREATE_TASK:
            return [...state, action.payload];

        case EDITE_TASK:
            return state.map((el) => { return el.id === action.payload.id ? { ...el, description: action.payload.description } : el })

        case DONE_TASK:
            return state.map((el) => { return el.id === action.payload.id ? { ...el, isDone: !el.isDone } : el })

        case DELETE_TASK:
            return state.filter((el) => el.id !== action.payload.id)

        default: return state;
    }
}
export default TaskReducer;