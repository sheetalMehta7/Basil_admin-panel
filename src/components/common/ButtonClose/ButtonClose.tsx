import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./ButtonClose.css";

interface ButtonCloseProps {
  label: string;
}

const ButtonClose: React.FC<ButtonCloseProps> = ({ label }) => {
  return (
    <button className="btn_close">
      {label}
      <CloseOutlinedIcon />
    </button>
  );
};

export default ButtonClose;
