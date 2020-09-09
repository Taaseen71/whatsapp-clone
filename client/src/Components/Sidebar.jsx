import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';

import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

const sidebar = () => {
    return (
        <div className="sidebar">

            <div className="sidebar_header">
                <div className="sidebar_headerLeft">
                    <IconButton><Avatar src="https://pbs.twimg.com/profile_images/1252483890595364871/j4C3DACK.jpg" /></IconButton>
                </div>
                <div className="sidebar_headerRight">
                    <IconButton><DonutLargeIcon /></IconButton>
                    <IconButton><ChatIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
            </div>


            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar_chats">
                <h3>Add New Chat</h3>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div >
    )
}

export default sidebar
