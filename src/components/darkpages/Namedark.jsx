import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Namedark() {
 const [name, setName] = useState('');
 const { t, i18n } = useTranslation();
   const navigate = useNavigate();
 
   const handleSubmit = (e) => {
     e.preventDefault();
    
        const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsLanguageModalOpen(false);
      };
 
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
       <h2 className='font-[Mali] text-3xl mb-10'>{t('petyn')}</h2>
       <form onSubmit={handleSubmit}>
         <input
           type="text"
           value={name}
           onChange={(e) => setName(e.target.value)}
           placeholder={t('etyn')}
           className='p-2 border border-black rounded-full w-60 text-center font-[Mali] mr-5'
         />
         <button type="submit" className='font-[Mali] p-2 border w-30 rounded-full bg-purple-200'>{t('next')}</button>
       </form>
     </div>
       
     </div>
   )
 }

export default Namedark
