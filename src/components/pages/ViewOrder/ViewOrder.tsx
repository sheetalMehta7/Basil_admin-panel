import React from "react";
import FileIcons from "../../common/FileIcons/FileIcons";
import arrowIcon from "../../../assets/images/arrow-curved.svg";
import "./ViewOrder.css";
import OrderDetailTable from "../../common/Table/OrderDetailTable";
import { useParams } from "react-router-dom";
import { Chip } from "@mui/material";
import { ordersList } from "../../../utils/data";
import { getStatusChipColor } from "../../../utils/functions";

const ViewOrder = () => {
  const { orderID } = useParams();

  const currentOrder = ordersList.orders.find(
    (item) => item.orderId === orderID
  );
  const statusLabel = currentOrder
    ? currentOrder.status.toUpperCase()
    : "Status Not Found";
  const statusColor = currentOrder
    ? getStatusChipColor(currentOrder.status)
    : "gray";

  return (
    <div className="view_order_page">
      <div className="view_order_page_top">
        <button className="btn-primary">
          <img src={arrowIcon} alt="arrow icon" />
          Refund Complete Order
        </button>
        <FileIcons />
      </div>
      <div className="view_order_page_center">
        <div>
          <div className="order-summary">
            <div>
              <h6>{orderID}</h6>
              <Chip
                label={statusLabel}
                style={{
                  color: statusColor,
                  fontWeight: "700",
                  fontSize: "12px",
                  borderColor: statusColor,
                }}
                variant="outlined"
              />
            </div>
            <div className="summary-item">
              <h4>BASIC INFORMATION</h4>
              <div className="item-info">
                <div>
                  <h5>Date and Time</h5>
                  <p>{currentOrder?.date}</p>
                </div>
                <div>
                  <h5>Machine</h5>
                  <p>{currentOrder?.machineName}</p>
                </div>
              </div>
            </div>
            <div className="summary-item">
              <h4>ORDER SUMMARY</h4>
              <div className="item-info">
                <div>
                  <h5>Payment ID</h5>
                  <p>TX1042480129481</p>
                </div>
                <div>
                  <h5>Total Amount</h5>
                  <p>{currentOrder?.totalAmount}</p>
                </div>
              </div>
            </div>
            <div className="summary-item">
              <h4>CUSTOMER INFORMATION</h4>
              <div className="item-info">
                <div>
                  <h5>Name ID</h5>
                  <p>
                    {currentOrder?.user.f_name} {currentOrder?.user.l_name}
                  </p>
                </div>
                <div>
                  <h5>Contact Number</h5>
                  <p> {currentOrder?.user.phone}</p>
                </div>
                <div>
                  <h5>Email</h5>
                  <p> {currentOrder?.user.email}</p>
                </div>
              </div>
            </div>
            <div className="summary-item">
              <h4>REFUND INFORMATION</h4>
              <div className="item-info">
                <div>
                  <h5>Refund Transaction ID</h5>
                  <p>TX1042480129481</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-details">
          {currentOrder && <OrderDetailTable tableData={currentOrder || {}} />}
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
