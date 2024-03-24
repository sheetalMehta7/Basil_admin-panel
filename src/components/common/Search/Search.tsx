import React from "react";
import "./Search.css";
import searchIcon from "../../../assets/images/search-icon.svg";

const Search: React.FC = () => {
  const [searchText, setSearchText] = React.useState("");

  return (
    <form className="search_form" onSubmit={(e) => e.preventDefault()}>
      <img src={searchIcon} alt="Search icon" />
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default Search;
