import React from "react";
import logo from "../../../assets/images/basil-logo.svg";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { menuLinks } from "../../../utils/data";
import { useSelector } from "react-redux";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const isSidebarOpen = useSelector((state: any) => state.layout.isSidebarOpen);

  return (
    <aside>
      <div className="app_sidebar ">
        <Link to="/">
          <img src={logo} alt="Basil logo" className="logo" />
        </Link>
        <ul>
          {menuLinks.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  location.pathname.includes(item.url) ||
                  (location.pathname === "/" && index === 2)
                    ? "active"
                    : ""
                }
              >
                <Link to={item.url}>
                  <img src={item.img} alt={item.alt} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
