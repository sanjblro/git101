import React from 'react'
import { Link } from 'react-router-dom';

function Hello() {
  const name = localStorage.getItem('name') || '';
  return (
    <div className='flex flex-col items-center justify-center min-h-screen font-[Mali]'>
     <h1 className='mb-4 text-4xl'> สวัสดี คุณ {name} </h1>
      <Link to="/story" className="bg-gray-600 rounded-full py-3 px-10 mt-10 mb-5 font-[Mali] text-white text-center block">
                 ต่อไป
                </Link>
    </div>
  )
}

export default Hello
