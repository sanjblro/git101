import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function About() {
  const [age, setAge] = useState('');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageModalOpen(false);
  };

  const handleSubmit = () => {
    if (age) {
      navigate('/hello');
    } else {
      alert('Please enter your age!');
    }
  };

  return (
    <div className="bg-gradient-to-r from-amber-200 via-yellow-100 to-red-200 flex flex-col items-center justify-center min-h-screen font-[Mali]">
      <p className="mb-4 text-4xl">{t('petye')}</p>

      <input  
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder={t('etye')}
        className="p-2 border border-black rounded-full w-60 text-center"
      />
       <button
        onClick={handleSubmit}
        className="p-2 border w-40 rounded-full text-center mt-5 bg-purple-200"
      >
        {t('next')}
      </button>
    </div>
  );
}

export default About;

