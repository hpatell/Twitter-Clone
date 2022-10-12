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

function Sidebar()
{
    return (
        <div className="sidebar">
            {/* Twitter Icon */}
            <TwitterIcon className="sidebar__twitterIcon" />
            {/* Sidebar Page Options */}
            <SidebarOption Icon={HomeIcon} text="Home" active={true} />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsIcon} text="Notifications" />
            <SidebarOption Icon={MailIcon} text="Messages" />
            <SidebarOption Icon={PersonIcon} text="Profile" />
            {/* Sidebar Tweet Button */}
            <Button variant="outlined" className="sidebar__tweetButton" fullWidth>Tweet</Button>
        </div>
    );
}

export default Sidebar;
