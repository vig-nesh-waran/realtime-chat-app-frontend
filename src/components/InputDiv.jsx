import React, { useState, useRef, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { RiSendPlaneFill } from "react-icons/ri";

const InputDiv = ({ message, setMessage, sendMessage }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);

  const onEmojiClick = (emojiObject) => {
    setMessage(prevMessage => prevMessage + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const handleClickOutside = (event) => {
    if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage(e);
      setShowEmojiPicker(false);
    }
  };

  return (
    <div className='fixed bottom-0 w-full mt-8'>
      <div className="relative w-full">
        {showEmojiPicker && (
          <div ref={emojiPickerRef} className="absolute bottom-16 left-0 w-full bg-gray-800 border-t border-gray-700 z-10">
            <EmojiPicker onEmojiClick={onEmojiClick} disableAutoFocus native />
          </div>
        )}
        <form className="flex items-center size-20 w-full bg-gray-800 p-2" onSubmit={(e) => e.preventDefault()}>
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="text-gray-300 hover:text-orange-500 focus:outline-none text-3xl"
          >
            😊
          </button>
          <input
            type="text"
            className="flex-grow p-2 mx-2 text-gray-300 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="button"
            onClick={sendMessage}
            className="px-4 py-2 text-2xl text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <RiSendPlaneFill />
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputDiv;
