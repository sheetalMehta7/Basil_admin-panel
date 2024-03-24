import React from "react";
import Search from "../Search/Search";
import "./Modal.css";
import ButtonClose from "../ButtonClose/ButtonClose";
import FilterTable from "../Table/FilterTable";
import { filterList } from "../../../utils/data";
import Status from "../Status/Status";
import DateCom from "../Date/DateCom";

const FilterModal = () => {
  return (
    <div className="filter_modal">
      <Search />
      <div className="filter_center">
        <div className="filter_center-head">
          <h5>Machines</h5>
          <button className="clear-btn">Clear All</button>
        </div>
        <div className="filter_center-btns">
          <ButtonClose label={"Aahaar Stall 3"} />
          <ButtonClose label={"Aahaar Stall 23"} />
          <ButtonClose label={"Aahaar Stall 33"} />
        </div>
        <Search />
        <FilterTable filterData={filterList} />
      </div>
      <div className="filter_status">
        <h5>Status</h5>
        <Status />
      </div>
      <div>
        <h5>Date Range</h5>
        <DateCom />
      </div>
    </div>
  );
};

export default FilterModal;
