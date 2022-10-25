import { Search } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Who to follow</h2>
        {
          
        }
      </div>
    </div>
  );
}

export default Widgets;
