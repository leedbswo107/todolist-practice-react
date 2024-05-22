import { configureStore } from '@reduxjs/toolkit';
import tasks from './taskStore';

export const store = configureStore({
  reducer: {
    tasks: tasks.reducer,
  },
});
