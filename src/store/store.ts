import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import layoutSlice from "./layout";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    layout: layoutSlice.reducer,
  },
});

export default store;
