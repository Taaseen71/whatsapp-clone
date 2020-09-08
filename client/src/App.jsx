import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import Pusher from 'pusher-js';

function App() {

    useEffect(() => {
        const pusher = new Pusher('446a5868e105ded7d86d', {
            cluster: 'us2'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', function (data) {
            alert(JSON.stringify(data));
        });


    }, [])

    return (
        <div className="app">
            <h1>WhatsApp</h1>
            <div className="app_body">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
}

export default App;
