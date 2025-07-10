import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
  const navigate = useNavigate();
  const [volume, setVolume] = useState(50);

  return (
    <div className="relative w-full bg-yellow-100 flex flex-col items-center justify-center min-h-screen font-[Mali]">

      <button
        onClick={() => navigate(-1)}
        className="absolute top-20 left-50 rounded-full p-2"
      >
        <img src="/image/back-button.png" className="w-14 h-14 cursor-pointer" />
      </button>


      <div className="top-20 text-6xl font-[Mali] absolute">
        SETTING
      </div>


      <div className="flex items-center w-full max-w-md mt-20 ">
        <img src="/image/sound.png" alt="volume" className="w-8 h-8 mr-4" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="w-full accent-black cursor-pointer"
        />
      </div>


      <button className="bg-gray-600 rounded-full w-80 h-20 text-white text-4xl mt-20 cursor-pointer">
        LANGUAGE
      </button>


      <div className="flex gap-50 mt-20 ">
        <button className="bg-sky-700 rounded-full w-80 h-20 text-white text-4xl cursor-pointer">
          DARK MODE
        </button>
        <button className="bg-yellow-200 rounded-full px-20 py-5 text-black text-4xl cursor-pointer">
          LIGHT MODE
        </button>
      </div>
    </div>
  );
};

export default Setting;
