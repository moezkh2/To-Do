import { createSlice } from '@reduxjs/toolkit';
/** this is redux slice */
export const initialState = [
  {
    id: 1,
    description: "go to the gym",
    isDone: "warning"
  },
  {
    id: 2,
    description: "drink water",
    isDone: "warning"
  }
];
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    createTask: (state, action) => {
      state.push(action.payload);
    },
    editeTask: (state, action) => {
      state.find((el) => { return el.id === action.payload.id }).description = action.payload.description;
    },
    doneTask: (state, action) => {
      action.payload.isDone === "warning"? state.find((el) => { return el.id === action.payload.id }).isDone = "success" : state.find((el) => { return el.id === action.payload.id }).isDone = "warning"
    },
    deleteTask:(state,action)=>{
      state.splice(state.findIndex(el=>{return el.id === action.payload.id}),1);
    }
  }
});
export const { editeTask, createTask, doneTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;