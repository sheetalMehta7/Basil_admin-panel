import React from "react";
import { createPortal } from "react-dom";
import FilterModal from "./FilterModal";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/modalSlice";
import { modalType } from "../../../utils/constants";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Modal = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {createPortal(
        <div className="modal_backdrop" onClick={handleClose}></div>,
        document.getElementById("backdrop-root")!
      )}
      {createPortal(
        <div className="modal_wrapper">
          <div className="modal_head">
            <h4>{modalType.FILTER}</h4>
            <CloseOutlinedIcon
              onClick={handleClose}
              style={{ color: "red", fontSize: "medium" }}
            />
          </div>
          <div className="modal_body">
            <FilterModal />
          </div>
          <div className="modal_foot">
            <button className="clear-btn">Clear All</button>
            <button className="btn-primary">Apply</button>
          </div>
        </div>,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default Modal;
