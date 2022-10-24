import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function HomePage() {
    return (
        <>
        <Sidebar />
        <Feed />
        <Widgets /> 
        </>
    );
}

export default HomePage;
