import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  modal: boolean;
  type: string;
}

const initialState: ModalState = {
  modal: false,
  type: "",
};

const modalSlice = createSlice({
  initialState,
  name: "modal",
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.modal = true;
      state.type = action.payload;
    },
    closeModal: (state) => {
      state.modal = false;
      state.type = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice;
