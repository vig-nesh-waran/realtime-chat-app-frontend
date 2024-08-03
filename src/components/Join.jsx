import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-900'>
      <div className='flex flex-col items-center justify-center w-11/12 sm:w-1/2 lg:w-1/3 bg-gray-800 p-6 rounded-md shadow-md'>
        <h1 className='text-3xl text-orange-500 mb-6'>Join this Room Chat</h1>
        <input 
          type="text" 
          placeholder='Username' 
          className='w-full p-3 mb-4 text-gray-300 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500' 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder='Room ID' 
          className='w-full p-3 mb-4 text-gray-300 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500' 
          onChange={(e) => setRoom(e.target.value)} 
        />
        <Link to={`/chat?name=${name}&room=${room}`}>
          <button 
            onClick={e => (!name || !room) ? e.preventDefault() : null} 
            className='w-60 py-3 mt-6 bg-orange-500 rounded text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500'
          >
            Go To Room
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
