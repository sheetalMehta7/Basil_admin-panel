import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orders from "../pages/Orders/Orders";
import ViewOrder from "../pages/ViewOrder/ViewOrder";
import Layout from "./Layout";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Orders />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:orderID" element={<ViewOrder />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
