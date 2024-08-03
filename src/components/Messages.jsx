import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className='flex flex-col flex-grow p-3 mb-20 text-2xl bg-gray-900'>
    {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
  </ScrollToBottom>
);

export default Messages;
