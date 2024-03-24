import React, { useState } from "react";
import userImg from "../../../assets/images/profile-img.png";
import bellIcon from "../../../assets/images/bell-icon.svg";
import menuIcon from "../../../assets/images/menu-bar.png";
import "./Header.css";
import Search from "../../common/Search/Search";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sidebarToggler } from "../../../store/layout";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { orderID } = useParams();
  const navLinks = location.pathname.split("/");
  console.log(navLinks);
  return (
    <header className="app_header">
      <div className="header_left">
        <img
          src={menuIcon}
          alt="Menu icon"
          onClick={() => dispatch(sidebarToggler())}
        />
        <div>
          <h5>{orderID ? orderID : "All Orders"}</h5>
          <ul>
            {navLinks.slice(1).map((item, index) => {
              return (
                <li key={index}>
                  <Link to={index === 0 ? "/" : `${location.pathname}`}>
                    {item === "orders" ? "All Orders" : item}
                    {index !== navLinks.length - 2 && (
                      <span className="slash"> / </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="header_right">
        <Search />
        <div className="notification-icon">
          <img src={bellIcon} alt="Bell icon" />
        </div>
        <img src={userImg} alt="User Avatar" className="user-icon" />
      </div>
    </header>
  );
};

export default Header;
