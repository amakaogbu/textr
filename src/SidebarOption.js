import React from "react";
import "./SidebarOption.css";

// props is used to add an argument to your given function
// pass an argument when buildidng components
function SidebarOption( {active, text, Icon }) {
  return (
    //if you are active add sidebar option
    //string interpretaion
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon/>
        <h2>{text}</h2>

    </div>
  );
}

export default SidebarOption;