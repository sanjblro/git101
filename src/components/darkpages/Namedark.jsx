import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Namedark() {
 const [name, setName] = useState('');
   const navigate = useNavigate();
 
   const handleSubmit = (e) => {
     e.preventDefault();
 
   if (name.trim() !== '') {
       localStorage.setItem('name', name); 
     navigate('/aboutdark');
   } else {
     alert('กรุณากรอกชื่อของคุณ');
   }
   };
   return (
     <div className='h-screen flex justify-center items-center bg-blue-100'>
        <div className='w-full max-w-md text-center'>
       <h2 className='font-[Mali] text-3xl mb-10'>กรุณากรอกชื่อของคุณตรงนี้</h2>
       <form onSubmit={handleSubmit}>
         <input
           type="text"
           value={name}
           onChange={(e) => setName(e.target.value)}
           placeholder="ใส่ชื่อของคุณ"
           className='font-[Mali] mr-5'
         />
         <button type="submit" className='font-[Mali] p-2 border w-30 rounded-full bg-purple-200'>ต่อไป</button>
       </form>
     </div>
       
     </div>
   )
 }

export default Namedark
