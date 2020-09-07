import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core'

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <h3>Add New Chat</h3>
            <Avatar />
            <div className="sidebarChat_infor"></div>
        </div>
    )
}

export default SidebarChat
