import { configureStore } from "@reduxjs/toolkit";
import languageCodeReducer from "../redux/slice/languageCodeSlice";

const store = configureStore({
  reducer: {
    code: languageCodeReducer,
  },
});

export default store;
