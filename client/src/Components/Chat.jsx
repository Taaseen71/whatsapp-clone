import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import "./Chat.css"
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons'
import ChatComponent from './ChatComponent'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat({ messages }) {

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("message Sent")
    }

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
                <ChatComponent messages={messages} />
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />

                <form>
                    <input
                        type="text"
                        placeholder="Insert Text Here"
                    />
                    <button
                        onClick={sendMessage}
                        type="submit"
                    >
                        Send
                        </button>
                </form>

                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
