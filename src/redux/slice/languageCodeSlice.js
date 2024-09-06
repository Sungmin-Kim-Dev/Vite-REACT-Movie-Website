import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
  country: "US",
  code: "en-US",
};

const languageCodeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    setCode(state, actions) {
      const { language, country } = actions.payload;
      state.language = language;
      state.country = country;
      state.code = `${language}-${country}`;
      console.log("slice: ", language, country, state.code);
    },
  },
});

export const { setCode } = languageCodeSlice.actions;
export default languageCodeSlice.reducer;
