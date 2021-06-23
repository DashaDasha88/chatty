import React from 'react';
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import './App.css';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="cee9c52b-44ac-41d7-b47e-c7067c60ebc7"
      userName="ChatCat"
      userSecret="123123"
      rederChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    
    />
  );
}

export default App;
