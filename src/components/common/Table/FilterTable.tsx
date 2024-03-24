import React from "react";
import MUIDataTable, {
  MUIDataTableOptions,
  MUIDataTableColumn,
} from "mui-datatables";
import { FilterProps } from "../../../interfaces/tableInterfaces";
import "./Table.css";

const columns: MUIDataTableColumn[] = [
  {
    name: "machineName",
    label: "MACHINE NAME",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        const str = value.split(",");
        return (
          <div className="machine_name">
            <img src={str[2]} alt="Machine Icon" />
            {str[0]} <span style={{ opacity: "0.5" }}>({str[1]})</span>
          </div>
        );
      },
    },
  },
  {
    name: "address",
    label: "ADDRESS",
    options: {
      sort: true,
    },
  },
];

const FilterTable: React.FC<FilterProps> = ({ filterData }) => {
  function handleRowClick() {
    console.log("clicked");
  }

  const options: MUIDataTableOptions = {
    filterType: "checkbox",
    viewColumns: false,
    search: false,
    filter: false,
    sort: true,
    download: false,
    print: false,
    onRowClick: handleRowClick,
  };
  const data: string[][] = filterData.filters.map((item) => [
    `${item.machineName.name} ${item.machineName.no},${item.machineName.id},
    ${item.machineName.icon}`,
    `${item.address}`,
  ]);

  return (
    <div className="filter_table table">
      <MUIDataTable title="" data={data} columns={columns} options={options} />
    </div>
  );
};

export default FilterTable;
