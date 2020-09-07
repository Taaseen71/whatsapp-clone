import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core'

function SidebarChat() {
    return (
        <div className="sidebarChat2">

            <div className="sidebarChat">
                <Avatar />
                <div className="sidebarChat_info">
                    <h2>ChatName</h2>
                    <p>Last Message</p>

                </div>
            </div>
        </div>
    )
}

export default SidebarChat
