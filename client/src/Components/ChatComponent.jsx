import React from 'react'

function ChatComponent() {
    return (
        <div>
            <p className="chat_message">
                <span className="chat_name">Chandni</span> incoming message <span className="chat_timestamp">{new Date().toUTCString()}</span>
            </p>
            <p className="chat_message chat_receiver">
                <span className="chat_name">Saad</span> outgoing message
                </p>
        </div>
    )
}

export default ChatComponent
