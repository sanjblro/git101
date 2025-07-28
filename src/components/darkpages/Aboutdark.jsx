import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Aboutdark() {
  const [age, setAge] = useState('');
   const navigate = useNavigate();
 
   const handleSubmit = () => {
     if (age) {
       navigate('/hellodark');
     } else {
       alert('Please enter your age!');
     }
   };
 
   return (
     <div className="flex flex-col items-center justify-center min-h-screen font-[Mali] bg-blue-100">
       <p className="mb-4 text-4xl">กรุณาใส่อายุของคุณ</p>
 
       <input  
         type="number"
         value={age}
         onChange={(e) => setAge(e.target.value)}
         placeholder="Enter your age"
         className="p-2 border border-black rounded-full w-60 text-center"
       />
        <button
         onClick={handleSubmit}
         className="p-2 border w-40 rounded-full text-center mt-5 bg-purple-200"
       >
         ต่อไป
       </button>
     </div>
   );
 }

export default Aboutdark
