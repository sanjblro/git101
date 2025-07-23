
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Home = ({ onStart }) => {
  return (
    <div className="relative min-h-screen w-full bg-yellow-100 flex flex-col text-black fixed">


      <img src={`${import.meta.env.BASE_URL}image/logo.PNG`} alt="logo" className="w-200 h-auto relative z-10 mb-6" />
      <img src={`${import.meta.env.BASE_URL}image/phone.PNG`} alt="phone" className='absolute w-270 z-0 bottom-0 left-1/3' />

      <Link
        to="/about"
        className="w-100 h-auto bg-gray-600 rounded-full p-6 ml-50 mb-3 font-[Mali] text-white text-center block"
      >
        START
      </Link>

      <Link
        to="/contact"
<<<<<<< HEAD
        className="w-100 h-auto bg-gray-600 rounded-full p-6 ml-50 mb-6 font-[Dyna] text-white text-center block"
=======
        className="w-100 h-auto bg-gray-600 rounded-full p-6 ml-50 mb-3 font-[Mali] text-white text-center block"
>>>>>>> b854e60fb1a391c06bd101358541288a1b7e0f3f
      >
        SETTING
      </Link>

      <Link
<<<<<<< HEAD
        to="/License"
        className="w-50 h-auto bg-red-200 rounded-full p-6 ml-75 mb-3 font-[Dyna] text-white text-center block"
      >
        License
=======
        to="/license"
        className="w-100 h-auto bg-gray-600 rounded-full p-6 ml-50 mb-3 font-[Mali] text-white text-center block"
      >
        LICENSE
>>>>>>> b854e60fb1a391c06bd101358541288a1b7e0f3f
      </Link>
    </div>

  );
};

export default Home;
