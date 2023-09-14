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
    updateProject(state, action) {
      const updatedProject = action.payload.data;
      return state.map((project) => {
        if (project.id === updatedProject.id) {
          return {
            ...project,
            ...updatedProject,
            coverImg: updatedProject.coverImg,
          };
        } else {
          return project;
        }
      });
    },
  },
});

export const projectActions = projectSlice.actions;
export default projectSlice;
