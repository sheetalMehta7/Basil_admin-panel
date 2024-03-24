import React from "react";
import MUIDataTable, {
  MUIDataTableOptions,
  MUIDataTableColumn,
} from "mui-datatables";
import Chip from "@mui/material/Chip";
import { TableProps } from "../../../interfaces/tableInterfaces";
import "./Table.css";
import { getStatusChipColor } from "../../../utils/functions";
import { useNavigate } from "react-router-dom";

const columns: MUIDataTableColumn[] = [
  {
    name: "no",
    label: "S.NO.",
  },
  {
    name: "date",
    label: "DATE",
  },
  {
    name: "orderId",
    label: "ORDER ID",
  },
  {
    name: "machineName",
    label: "MACHINE NAME",
  },
  {
    name: "customerName",
    label: "CUSTOMER NAME",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        const str = value.split(",");
        return (
          <>
            {str[0]} <span style={{ opacity: "0.5" }}>({str[1]})</span>
          </>
        );
      },
    },
  },
  {
    name: "contactNumber",
    label: "CONATCT NUMBER",
    options: {
      sort: true,
    },
  },
  {
    name: "totalAmount",
    label: "TOTAL AMOUNT",
    options: {
      sort: true,
    },
  },
  {
    name: "staus",
    label: "STATUS",
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
];

const OrderTable: React.FC<TableProps> = ({ tableData }) => {
  const navigate = useNavigate();
  const handleRowClick = (rowData: any) => {
    console.log("clicked", rowData);
    navigate(`/orders/${rowData[2]}`);
  };
  const options: MUIDataTableOptions = {
    filterType: "checkbox",
    selectableRows: "none",
    viewColumns: false,
    search: false,
    filter: false,
    sort: true,
    download: false,
    print: false,
    onRowClick: handleRowClick,
  };
  const data: string[][] = tableData.orders.map((item, index) => [
    `${index + 1}.`,
    item.date,
    item.orderId,
    item.machineName,
    `${item.user.f_name} ${item.user.l_name} ${item.user.age},${item.user.id}`,
    item.user.phone,
    `₹${item.totalAmount}`,
    item.status,
  ]);

  return (
    <div className="table order_table">
      <MUIDataTable title="" data={data} columns={columns} options={options} />
    </div>
  );
};

export default OrderTable;
