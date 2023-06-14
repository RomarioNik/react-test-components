import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handleFullfilledFetchTasks = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleFullfilledAddTask = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handleFullfilledDeleteTask = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex((task) => task.id === action.payload.id);
  state.items.splice(index, 1);
};

const handleFullfilledToggleCompleted = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex((task) => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, handleFullfilledFetchTasks)
      .addCase(addTask.fulfilled, handleFullfilledAddTask)
      .addCase(deleteTask.fulfilled, handleFullfilledDeleteTask)
      .addCase(toggleCompleted.fulfilled, handleFullfilledToggleCompleted)
      .addMatcher((action) => {
        action.type.endsWith("/pendind");
      }, handlePending)
      .addMatcher((action) => {
        action.type.endsWith("/rejected");
      }, handleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;
