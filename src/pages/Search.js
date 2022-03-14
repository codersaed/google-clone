import React, { useState } from "react";
import "./Search.css";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Search = ({ hideButton }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate("/search");
  };
  return (
    <>
      <from className="search">
        <div className="search_input">
          <SearchIcon />
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <MicIcon />
        </div>
        {!hideButton && (
          <div className="search_button">
            <Button type="submit" onClick={search} variant="outlined">
              Google Search
            </Button>
            <Button variant="outlined">I am feeling lucky</Button>
          </div>
        )}
      </from>
    </>
  );
};

export default Search;
