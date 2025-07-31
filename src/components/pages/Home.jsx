import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

const Home = () => {

  const isMobile414 = useMediaQuery({ maxWidth: 414, maxHeight: 896 });
    const { t, i18n } = useTranslation();
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      setIsLanguageModalOpen(false);
    };

  if (isMobile414) {

    return (
      <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center text-black px-6 pt-8">

        <img
          src={`${import.meta.env.BASE_URL}image/logo.PNG`}
          alt="logo"
          className="w-100 mb-40"
        />


        <div className="space-y-4 w-full max-w-sm">
          <Link to="/name" className="bg-gray-600 rounded-full py-3 mb-5 font-[Mali] text-white text-center block">
            {t('start')}
          </Link>
          <Link to="/contact" className="bg-gray-600 rounded-full py-3 mb-5 font-[Mali] text-white text-center block">
            {t('setting')}
          </Link>
          <Link to="/license" className="bg-gray-600 rounded-full py-3 font-[Mali] text-white text-center block">
            {t('license')}
          </Link>
        </div>


      </div>
    );
  }

  
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-r from-amber-200 via-yellow-100 to-red-200 flex flex-col text-black fixed">
      <img src={`${import.meta.env.BASE_URL}image/logo.PNG`} alt="logo" className="w-200 h-auto relative z-10 mb-6" />
      <img src={`${import.meta.env.BASE_URL}image/phone.PNG`} alt="phone" className='absolute w-270 z-0 bottom-0 left-1/3 ' />

      <Link
        to="/name"
        className="w-100 h-auto bg-gray-600 rounded-full p-6 ml-50 mb-3 font-[Mali] text-white text-center block"
      >
        {t('start')}
      </Link>

      <Link
        to="/contact"
        className="w-100 h-auto bg-gray-600 rounded-full p-6 ml-50 mb-3 font-[Mali] text-white text-center block"
      >
        {t('setting')}
      </Link>

      <Link
        to="/license"
        className="w-100 h-auto bg-gray-600 rounded-full p-6 ml-50 mb-3 font-[Mali] text-white text-center block"
      >
        {t('license')}
      </Link>
    </div>
  );
};

export default Home;
