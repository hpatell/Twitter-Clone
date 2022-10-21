import React from "react";
import './Sidebar.css'
import SidebarOption from "./SidebarOption";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
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
            {/* Notifications Page */}
            <SidebarOption Icon={NotificationsIcon} text="Notifications" />
            {/* Messages Page */}
            <SidebarOption Icon={MailIcon} text="Messages" />
            {/* Profile Page */}
            <Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <SidebarOption Icon={PersonIcon} text="Profile" path="/profile"> </SidebarOption> 
            </Link>
            {/* Sidebar Tweet Button */}
            <Button variant="outlined" className="sidebar__tweetButton" fullWidth>Tweet</Button>
        </div>
    );
}

export default Sidebar;
