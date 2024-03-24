import React from "react";
import "./Filter.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../../store/modalSlice";
import { modalType } from "../../../utils/constants";
import ButtonClose from "../ButtonClose/ButtonClose";

const Filter = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal(modalType.FILTER));
  };

  return (
    <section>
      <div className="filters">
        <h4>FILTERS</h4>
        <div className="filter_top">
          <button onClick={handleClick}>Select Filters</button>{" "}
          <button className="clear-btn">Clear All</button>
        </div>
        <div className="selected_filter">
          <p>Date From:</p> <ButtonClose label={"21/02/2022"} />
        </div>
        <div className="selected_filter">
          <p>Date To:</p> <ButtonClose label={"23/08/2024"} />
        </div>
        <div className="selected_filter">
          <p>Status:</p>
          <ButtonClose label={"Success"} />
          <ButtonClose label={"Sent"} />
          <ButtonClose label={"Failure"} />
          <ButtonClose label={"Pending"} />
        </div>
        <div className="filters_bottom">
          <button>See more</button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
