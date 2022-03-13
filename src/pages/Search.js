import React from "react";
import "./Search.css";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";

const Search = ({ hideButton }) => {
  return (
    <from className="search">
      <div className="search_input">
        <SearchIcon />
        <input />
        <MicIcon />
      </div>
      {!hideButton && (
        <div className="search_button">
          <Button type="submit" variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I am feeling lucky</Button>
        </div>
      )}
    </from>
  );
};

export default Search;
