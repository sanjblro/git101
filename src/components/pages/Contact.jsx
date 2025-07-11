import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
  const navigate = useNavigate();
  const [volume, setVolume] = useState(50);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

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

  
      <button
        className="bg-gray-600 rounded-full w-80 h-20 text-white text-4xl mt-20 cursor-pointer"
        onClick={() => setIsLanguageModalOpen(true)} 
      >
        LANGUAGE
      </button>

      {isLanguageModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-200 p-10 rounded-xl shadow-lg w-96 text-center relative">
            <h2 className="text-2xl font-bold mb-4">เปลี่ยนภาษา</h2>
            <button
              className="absolute top-2 right-4 text-xl text-gray-600 hover:text-black cursor-pointer"
              onClick={() => setIsLanguageModalOpen(false)}
            >
              ✕
            </button>
            <div className="space-y-4 mt-4">
              <button className="w-full py-2 bg-sky-700 text-white rounded cursor-pointer">ไทย</button>
              <button className="w-full py-2 bg-sky-700 text-white rounded cursor-pointer">English</button>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-10 mt-20">
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
