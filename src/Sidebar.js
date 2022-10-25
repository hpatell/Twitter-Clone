import React from "react";
import './Sidebar.css'
import SidebarOption from "./SidebarOption";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

function Sidebar()
{
    return (
        <div className="sidebar">
            {/* Twitter Icon */}
            <TwitterIcon className="sidebar__twitterIcon" />
            {/* Home Page */}
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <SidebarOption Icon={HomeIcon} text="Home" path="/"> </SidebarOption> 
            </Link>
            {/* Explore Page */}
            <Link to="/explore" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <SidebarOption Icon={SearchIcon} text="Explore" path="/explore"> </SidebarOption> 
            </Link>
            {/* Messages Page */}
            <Link to="/messages" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <SidebarOption Icon={MailIcon} text="Messages" path="/messages"> </SidebarOption>
            </Link>
            {/* Profile Page */}
            <Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <SidebarOption Icon={PersonIcon} text="Profile" path="/profile"> </SidebarOption> 
            </Link>
            {/* Sidebar Tweet Button */}
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Button variant="outlined" className="sidebar__tweetButton" fullWidth>Tweet</Button>
            </Link>
        </div>
    );
}

export default Sidebar;
