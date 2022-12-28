import React from "react";
import "./navbar.scss";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link>
          {" "}
          <h1>
            Infinity{" "}
            <AllInclusiveIcon style={{ height: "30px", width: "30px" }} />
          </h1>
        </Link>
        <HomeOutlinedIcon
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        />
        <Brightness4OutlinedIcon
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        />
        <GridViewOutlinedIcon
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        />
        <div className="search">
          <SearchOutlinedIcon style={{ marginLeft: "10px" }} />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        />
        <EmailOutlinedIcon
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        />
        <NotificationsNoneOutlinedIcon
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        />
        <div className="user">
          <Avatar style={{ width: "30px", height: "30px" }} />
          <p>Anas</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
