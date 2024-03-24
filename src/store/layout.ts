import { createSlice } from "@reduxjs/toolkit";

interface LayoutState {
  isSidebarOpen: boolean;
}

const initialState: LayoutState = {
  isSidebarOpen: true,
};

const layoutSlice = createSlice({
  initialState,
  name: "layout",
  reducers: {
    sidebarToggler: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { sidebarToggler } = layoutSlice.actions;
export default layoutSlice;
