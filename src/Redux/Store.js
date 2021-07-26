import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './ToDoSlice';
/** this is redux store */
export default configureStore({
  reducer: {
    task : taskSlice,
  
  },
})