import React from "react";
import MUIDataTable, {
  MUIDataTableOptions,
  MUIDataTableColumn,
} from "mui-datatables";
import Chip from "@mui/material/Chip";
import { OrderDetailsTable } from "../../../interfaces/tableInterfaces";
import "./Table.css";
import {
  getStatusChipColor,
  getActionChipColor,
} from "../../../utils/functions";
import Button from "@mui/material/Button";

const columns: MUIDataTableColumn[] = [
  {
    name: "id",
    label: "ID",
  },
  {
    name: "drinkName",
    label: "DRINK NAME",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        const str = value.split(",");
        return (
          <div className="machine_name">
            <img src={str[1]} alt="Machine Icon" />
            {str[0]}
          </div>
        );
      },
    },
  },
  {
    name: "customisation  ",
    label: "CUSTOMISATION",
  },
  {
    name: "totalAmount",
    label: "TOTAL AMOUNT",
    options: {
      sort: true,
    },
  },
  {
    name: "drinkStaus",
    label: "DRINK STATUS",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Chip
            label={value.toUpperCase()}
            style={{
              color: getStatusChipColor(value),
              fontWeight: "700",
              fontSize: "12px",
              borderColor: getStatusChipColor(value),
            }}
            variant="outlined"
          />
        );
      },
    },
  },
  {
    name: "action",
    label: "ACTION",
    options: {
      customBodyRender: (value) => {
        return (
          <Button
            style={{
              backgroundColor: getActionChipColor(value),
            }}
          >
            {value}
          </Button>
        );
      },
    },
  },
];

const OrderDetailTable: React.FC<OrderDetailsTable> = ({ tableData }) => {
  const options: MUIDataTableOptions = {
    filterType: "checkbox",
    selectableRows: "none",
    viewColumns: false,
    search: false,
    filter: false,
    sort: true,
    download: false,
    print: false,
  };
  const data: string[][] = tableData.orderDetails.map((item) => [
    item.id,
    `${item.drinkName},${item.drinkImg}`,
    item.customisation,
    `₹${item.amount}`,
    item.drinkStatus,
    item.action,
  ]);

  return (
    <div className="table order_detail">
      <MUIDataTable title="" data={data} columns={columns} options={options} />
    </div>
  );
};

export default OrderDetailTable;
