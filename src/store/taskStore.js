import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTaskLists = createAsyncThunk('tasks/getTaskLists', async () => {
  const url = 'http://localhost:4000/tasks';
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetching tasks failed:', error);
  }
});

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    dataLoad: (state, action) => {
      state.tasks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTaskLists.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTaskLists.fulfilled, (state, action) => {
        state.status = 'success';
        state.tasks = action.payload;
      })
      .addCase(getTaskLists.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { extraReducers } = tasks.actions;
export default tasks;
