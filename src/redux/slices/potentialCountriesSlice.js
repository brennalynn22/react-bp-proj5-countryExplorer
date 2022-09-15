import { createSlice } from "@reduxjs/toolkit";

export const potentialCountriesSlice = createSlice({
  name: "potentialCountries",
  initialState: {
    value: [
        {
            name: {
                common: "America",
            },
        },
    ],
    // value: [{ name: [{common: 'America'}]}], I think this is what the directions have listed.
  },
  reducers: {
    setPotentialCountries: (state, action) => {
      state.value = action.payload;
    },
    deletePotentialCountries: (state) => {
      state.value = null;
    },
  },
});

export const { setPotentialCountries, deletePotentialCountries } =
  potentialCountriesSlice.actions;
export const selectPotentials = (state) => {
  return state.potentialCountries.value;
};
export default potentialCountriesSlice.reducer;
