import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {
  const isSentByCurrentUser = user.trim().toLowerCase() === name.trim().toLowerCase();

  return (
    isSentByCurrentUser ? (
      <div className='flex justify-end mt-2'>
        <div className='bg-gray-800 rounded-md p-2'>
          <p className='py-1 px-2 mr-2 text-sm bg-gray-700 text-gray-300 border-x-2 border-x-gray-800 rounded-t-lg'>you</p>
          <div className='flex items-center p-3 bg-gray-800 rounded-md'>
            <p className='text-white'>{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      </div>
    ) : (
      <div className='flex justify-start mt-2'>
        <div className='bg-orange-500 rounded-md p-1'>
          <p className='py-1 px-2 mr-2 text-sm bg-orange-400 text-gray-300 border-x-2 border-x-orange-500 rounded-t-lg'>{user}</p>
          <div className='flex items-center p-2 bg-orange-500 rounded-md'>
            <p className='text-white'>{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Message;
