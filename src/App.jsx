import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';

function App() {
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
