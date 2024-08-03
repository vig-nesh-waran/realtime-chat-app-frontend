import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from './InfoBar.jsx';
import InputDiv from './InputDiv.jsx';
import Messages from './Messages.jsx';

let socket;

function Chat() {
  const [name, setName] = useState(''); 
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://realtime-chat-app-backend-hh7u.onrender.com';

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {});

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [ENDPOINT, window.location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className='flex flex-col h-screen bg-gray-900'>
      <div className='flex flex-col flex-grow'>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <InputDiv message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;
