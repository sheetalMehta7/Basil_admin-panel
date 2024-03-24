import React from "react";
import Modal from "../common/Modal/Modal";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

const Layout = () => {
  const isModalOpen = useSelector((state: any) => state.modal.modal);
  return (
    <div className="app_container">
      <Sidebar />
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      {isModalOpen && <Modal />}
    </div>
  );
};

export default Layout;
