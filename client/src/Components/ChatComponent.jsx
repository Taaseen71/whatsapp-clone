import React from 'react'

function ChatComponent({ messages }) {
    return (
        <div>
            {messages.map(message => (
                <p className={`chat_message ${!message.received && "chat_receiver"}`} >
                    <span className="chat_name">{message.name}</span> {message.message} <span className="chat_timestamp">
                        {new Date().toUTCString()}
                        {/* {message.timestamp} */}
                    </span>
                </p>
            ))}
            {/* <p className="chat_message chat_receiver">
                <span className="chat_name">Saad</span> outgoing message
                </p> */}
        </div>
    )
}

export default ChatComponent
