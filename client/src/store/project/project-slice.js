import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
  name: 'project',
  initialState: [],
  reducers: {
    setProject(state, action) {
      return action.payload || [];
    },
    deleteProject(state, action) {
      const projectId = action.payload;
      return state.filter((project) => project.id !== projectId);
    },
  },
});

export const projectActions = projectSlice.actions;
export default projectSlice;
