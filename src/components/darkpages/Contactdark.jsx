import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { AudioContext } from '../../AudioContext';
import { useTranslation } from 'react-i18next';

const Setting = () => {
  const navigate = useNavigate();
  const { volume, setVolume } = useContext(AudioContext);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const isMobile414 = useMediaQuery({ maxWidth: 414, maxHeight: 896 });
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageModalOpen(false);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value / 100);
  };

  if (isMobile414) {
    return (
      <div className="relative w-full bg-gradient-to-r from-indigo-950 via-indigo-800 to-sky-700 flex flex-col items-center justify-center min-h-screen pt-10 px-4 font-[Mali]">
        <button onClick={() => navigate(-1)} className="absolute top-4 left-4">
          <img src={`${import.meta.env.BASE_URL}/image/back-button.png`} className="w-10 h-10" />
        </button>

        <h1 className="text-4xl font-bold mt-12 mb-30">{t('setting')}</h1>

        <div className="flex items-center w-full mb-20">
          <img src={`${import.meta.env.BASE_URL}/image/sound.png`} alt="volume" className="w-6 h-6 mr-3" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={handleVolumeChange}
            className="w-full accent-black"
          />
        </div>

        <button
          className="bg-gray-600 rounded-full w-full max-w-xs h-16 text-white text-2xl mb-4"
          onClick={() => setIsLanguageModalOpen(true)}
        >
          {t('language')}
        </button>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button className="bg-sky-700 rounded-full w-full h-16 text-white text-2xl">
            {t('dark_mode')}
          </button>
          <button className="bg-yellow-200 rounded-full w-full h-16 text-black text-2xl">
            {t('light_mode')}
          </button>
        </div>

        {isLanguageModalOpen && (
          <div className="fixed inset-0 bg-blue-50 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-200 p-6 rounded-xl w-80 text-center relative">
              <h2 className="text-xl font-bold mb-2">Change language</h2>
              <button
                className="absolute top-2 right-4 text-xl text-gray-600 hover:text-black"
                onClick={() => setIsLanguageModalOpen(false)}
              >
                ✕
              </button>
              <div className="space-y-3 mt-4">
                <button 
                className="w-full py-2 bg-sky-700 text-white rounded"
                onClick={() => changeLanguage('th')}
                >ไทย</button>
                <button 
                className="w-full py-2 bg-sky-700 text-white rounded"
                onClick={() => changeLanguage('en')}
                >English</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full bg-gradient-to-r from-indigo-950 via-indigo-800 to-sky-700 flex flex-col items-center justify-center min-h-screen font-[Mali]">
      <Link to="/homedark" className="absolute top-20 left-50 rounded-full p-2">
        <img src={`${import.meta.env.BASE_URL}/image/back-button.png`} className="w-14 h-14 cursor-pointer" />
      </Link>

      <div className="top-20 text-6xl font-[Mali] absolute">{t('setting')}</div>

      <div className="flex items-center w-full max-w-md mt-20">
        <img src={`${import.meta.env.BASE_URL}/image/sound.png`} alt="volume" className="w-8 h-8 mr-4" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume * 100}
          onChange={handleVolumeChange}
          className="w-full accent-black cursor-pointer"
        />
      </div>

      <button
        className="bg-gray-600 rounded-full w-80 h-20 text-white text-4xl mt-20 cursor-pointer"
        onClick={() => setIsLanguageModalOpen(true)}
      >
        {t('language')}
      </button>

      {isLanguageModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-200 p-10 rounded-xl shadow-lg w-96 text-center relative">
            <h2 className="text-2xl font-bold mb-4">Change language</h2>
            <button
              className="absolute top-2 right-4 text-xl text-gray-600 hover:text-black cursor-pointer"
              onClick={() => setIsLanguageModalOpen(false)}
            >
              ✕
            </button>
            <div className="space-y-4 mt-4">
              <button 
                className="w-full py-2 bg-sky-700 text-white rounded cursor-pointer"
                onClick={() => changeLanguage('th')}
                >ไทย</button>
              <button 
                className="w-full py-2 bg-sky-700 text-white rounded cursor-pointer"
                onClick={() => changeLanguage('en')}
                >English</button>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-10 mt-20">
        <Link
          to="/contactdark"
          className="bg-sky-700 rounded-full px-20 py-5 text-black text-4xl cursor-pointer"
        >
          {t('dark_mode')}
        </Link>
        <Link
          to="/contact"
          className="bg-yellow-200 rounded-full px-20 py-5 text-black text-4xl cursor-pointer"
        >
          {t('light_mode')}
        </Link>
      </div>
    </div>
  );
};

export default Setting;
