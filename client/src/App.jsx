import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import Pusher from 'pusher-js';
import axios from "axios";


function App() {

    const [messages, setMessages] = useState([]);

    const instance = axios.create({
        baseURL: 'http://localhost:3001',
    })

    useEffect(() => {
        instance.get('/messages/sync')
            .then(res => {
                setMessages(res.data)
            })
    }, [])


    useEffect(() => {
        const pusher = new Pusher('446a5868e105ded7d86d', {
            cluster: 'us2'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', function (newMessage) {
            // alert(JSON.stringify(newMessage));
            setMessages([...messages, newMessage]);
        });

        //cleanup function
        // THIS doesn't make it alert twice
        return () => {
            channel.unbind_all()
            channel.unsubscribe()
        }
    }, [messages])


    console.log(messages)

    return (
        <div className="app">
            <h1>WhatsApp</h1>
            <div className="app_body">
                <Sidebar />
                <Chat messages={messages} />
            </div>
        </div>
    );
}

export default App;
