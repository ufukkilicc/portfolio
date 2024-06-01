import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companies: [
    {
      id: 1,
      name: "Graf Studios",
      description: "An Online Reservation Application",
      image: "/images/companies/graf_logo.svg",
      url: "https://grafstudios.com.tr",
    },
  ],
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
});
export const {} = companiesSlice.actions;
export const getAllCompanies = (state) => state.companies;

export default companiesSlice.reducer;
