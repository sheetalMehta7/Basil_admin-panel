import React from "react";
import "./Status.css";
import { status } from "../../../utils/data";
const Status: React.FC = () => {
  return (
    <div className="status">
      {status.map((item, index) => (
        <div key={index} className={index === 0 ? "active" : ""}>
          <img src={item.img} alt={`${item.label} icon`} />
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Status;
