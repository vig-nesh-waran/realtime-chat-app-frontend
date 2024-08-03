import React from 'react';
import { TiGroup } from "react-icons/ti";
import { GiCrossMark } from "react-icons/gi";

const InfoBar = ({ room }) => (
  <div className='flex justify-between items-center p-5 bg-orange-500 text-white'>
    <div className='w-80'>
      <TiGroup className='size-16'/>
      <h3 className='text-lg'>Room ID: {room}</h3>
    </div>
    <div>
      <a href="/" className='text-white'>
        <GiCrossMark className='size-10'/>
      </a>
    </div>
  </div>
);

export default InfoBar;
