import React from "react";
import "./SidebarOption.css";
import {useLocation} from "react-router-dom";

function SidebarOption({ Icon, text, active, path }) {
  const location = useLocation();
  if(location.pathname === path) 
  {
    active=true;
  }
  return (
    <div className={`sidebarOption  ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
