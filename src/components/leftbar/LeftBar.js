import React from "react";
import "./leftBar.scss";
import { Avatar } from "@mui/material";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Event from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Message from "../../assets/10.png";
import Video from "../../assets/9.png";
import Fundraiser from "../../assets/11.png";
import Tutorials from "../../assets/12.png";
import Course from "../../assets/13.png";

function LeftBar() {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <Avatar style={{ width: "30px", height: "30px", color: "blue" }} />
            <p>Anas Sabah</p>
          </div>
          <div className="item">
            <img src={Friends} alt="friends" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="group" />
            <span>Groups</span>
          </div>
        </div>
        <hr style={{ marginTop: "20px" }} />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Event} alt="event" />
            <span>Event</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="gaming" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="gallery" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Message} alt="message" />
            <span>Message</span>
          </div>
          <div className="item">
            <img src={Video} alt="video" />
            <span>Videos</span>
          </div>
        </div>
        <hr style={{ marginTop: "20px" }} />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Event} alt="event" />
            <span>Event</span>
          </div>
          <div className="item">
            <img src={Fundraiser} alt="Fundraiser" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="Tutorials" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Course} alt="Course" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
