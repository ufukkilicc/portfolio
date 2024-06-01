import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settings: {
    language: "en",
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeLanguage: (state) => {
      state.settings.language = state.settings.language === "tr" ? "en" : "tr";
    },
  },
});
export const { changeLanguage } = settingsSlice.actions;
export const getAllSettings = (state) => state.settings;

export default settingsSlice.reducer;
