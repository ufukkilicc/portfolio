import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      id: 1,
      title: "Megaverse",
      description: "An Online Reservation Application",
      image: "/images/projects/megaverse.png",
      tag: ["All", "Web"],
      gitUrl: null,
      role: "Backend Developer",
      previewUrl: "https://megaverse.coach/",
      companyId: 1,
    },
  ],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});
export const {} = projectsSlice.actions;
export const getAllProjects = (state) => state.projects;

export default projectsSlice.reducer;
