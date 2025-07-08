import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // ใช้ icon จาก lucide-react หรือเปลี่ยนเป็นไฟล์รูปก็ได้

const Setting = () => {
  const navigate = useNavigate();
  const [volume, setVolume] = useState(50);

  return (
    <div className="relative min-h-screen w-full bg-yellow-100 flex flex-col items-center justify-center">

      <button
        onClick={() => navigate(-1)}
        className="absolute top-50 left-116 rounded-full p-2"
      >
        <img src="/image/back-button.png" className="w-14 h-14 cursor-pointer" />
      </button>


      <div className="bg-white rounded-full px-20 py-5 text-2xl font-[Dyna] mb-15 mt-12">
        SETTING
      </div>


      <div className="flex items-center w-full max-w-md mb-8 ">
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


      <button className="bg-gray-400 rounded-full px-20 py-5 text-white text-xl font-[Dyna] mb-15 mt-10 cursor-pointer">
        LANGUAGE
      </button>


      <div className="flex gap-6 ">
        <button className="bg-blue-700 rounded-full px-20 py-5 text-white text-xl font-[Dyna] cursor-pointer">
          DARK MODE
        </button>
        <button className="bg-yellow-300 rounded-full px-20 py-5 text-black text-xl font-[Dyna] cursor-pointer">
          LIGHT MODE
        </button>
      </div>
    </div>
  );
};

export default Setting;
