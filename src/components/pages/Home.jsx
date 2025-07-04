
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Home = ({ onStart }) => {
  return (
    <div className="relative min-h-screen w-full bg-yellow-100 flex flex-col text-black fixed">


      <img src="/image/logo.PNG" alt="logo" className="w-200 h-auto relative z-10 mb-6" />
      <img src="/image/phone.PNG" alt="phone" className='absolute w-270 z-0 bottom-0 left-1/4' />

      <Link
        to="/about"
        className="w-100 h-auto bg-gray-600 rounded-full p-6 ml-50 mb-6 font-[Dyna] text-white text-center block"
      >
        START
      </Link>

      <Link
        to="/contact"
        className="w-100 h-auto bg-gray-600 rounded-full p-6 ml-50 mb-3 font-[Dyna] text-white text-center block"
      >
        SETTING
      </Link>
    </div>
  );
};

export default Home;
