import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import "./Chat.css"
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons'

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />

                <div className="chat_headerInfo">
                    <h3>Chat Room Name</h3>
                    <p>last seen</p>
                </div>

                <div className="chat_headerRight ">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>


            <div className="chat_body">
                <p><span className="chat_name">Chandni:</span> incoming message <span className="chat_timestamp">{new Date().toUTCString()}</span>  </p>
                <p><span className="chat_name">Saad:</span>outgoing message</p>
            </div>
            <div className="chat_inputfield"></div>
        </div>
    )
}

export default Chat
