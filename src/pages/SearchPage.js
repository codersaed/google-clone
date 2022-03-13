import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import {
  Description,
  Image,
  LocalOffer,
  Room,
  MoreVert,
} from "@material-ui/icons";
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img src="/images/googlelogo.png" alt="Google" />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButton />
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/">All</Link>
              </div>
              <div className="searchPage_option">
                <Description />
                <Link to="/">News</Link>
              </div>
              <div className="searchPage_option">
                <Image />
                <Link to="/">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOffer />
                <Link to="/">Shopping</Link>
              </div>
              <div className="searchPage_option">
                <Room />
                <Link to="/">Maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVert />
                <Link to="/">More</Link>
              </div>
            </div>
            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/">Setting</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
