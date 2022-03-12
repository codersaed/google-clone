import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import React from "react";
import "./Home.css";
import Search from "./Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <p>About</p>
          <p>Store</p>
        </div>
        <div className="home_headerRight">
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img src="/images/googlelogo.png" alt="Google" />
        <div className="home_inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
