import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Hellodark() {
 const name = localStorage.getItem('name') || '';

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageModalOpen(false);
  };

   return (
     <div className='flex flex-col items-center justify-center min-h-screen font-[Mali] bg-gradient-to-r from-indigo-950 via-indigo-800 to-sky-700'>
      <h1 className='mb-4 text-4xl'>{t('สวัสดี',{ name })}</h1>
       <Link to="/storydark" className="bg-gray-600 rounded-full py-3 px-10 mt-10 mb-5 font-[Mali] text-white text-center block">
                  {t('next')}
                 </Link>
     </div>
  )
}

export default Hellodark
