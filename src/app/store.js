import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/projectsSlice";
import companiesReducer from "../features/companiesSlice";
import skillsReducer from "../features/skillsSlice";
import settingsReducer from "../features/settingsSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    companies: companiesReducer,
    skills: skillsReducer,
    settings: settingsReducer,
  },
});
