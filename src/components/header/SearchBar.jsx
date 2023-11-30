// import { useState } from "react";
import "./SearchBar.css";
import { setSearch } from "../../redux/searchSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <input
        onChange={(event) => {
          dispatch(setSearch({ value: event.currentTarget.value }));
        }}
        className="search_input"
        type="text"
        placeholder="Search note..."
      />
    </>
  );
};

export default SearchBar;
