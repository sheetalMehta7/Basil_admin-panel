import React from "react";
import exportIcon from "../../../assets/images/export-icon.svg";
import pdfIcon from "../../../assets/images/pdf-icon.svg";
import "./FileIcons.css";
const FileIcons = () => {
  return (
    <div className="page_icons">
      <div className="icons">
        <img src={exportIcon} alt="Export Icon" />
      </div>
      <div className="icons">
        <img src={pdfIcon} alt="File Icon" />
      </div>
    </div>
  );
};

export default FileIcons;
