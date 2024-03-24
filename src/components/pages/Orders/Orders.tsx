import React from "react";
import Search from "../../common/Search/Search";
import "./Orders.css";
import { ordersList, ordersStats } from "../../../utils/data";
import OrderTable from "../../common/Table/OrderTable";
import Filter from "../../common/Filter/Filter";
import FileIcons from "../../common/FileIcons/FileIcons";
const Orders = () => {
  return (
    <div className="orders_page">
      <div className="orders_page_top">
        <Search />
        <FileIcons />
      </div>
      <div className="orders_page_center">
        <div>
          <div className="orders_stats">
            <p>
              Machines: <span>{ordersStats.machines}</span>
            </p>
            <p>
              Orders: <span>{ordersStats.orders}</span>
            </p>
            <p>
              Customers: <span>{ordersStats.customers}</span>
            </p>
            <p>
              Drinks: <span>{ordersStats.drinks}</span>
            </p>
            <p>
              Total Amount: <span>₹{ordersStats.totalAmount}</span>
            </p>
            <p>
              Refunds Initiated: <span>{ordersStats.refundsInitiated}</span>
            </p>
          </div>
          <OrderTable tableData={ordersList} />
        </div>
        <Filter />
      </div>
    </div>
  );
};

export default Orders;
