import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


function Storydark() {
 const navigate = useNavigate();
   const isMobile414 = useMediaQuery({ maxWidth: 414, maxHeight: 896 });
 
    const [score, setScore] = useState(0);
   const [showRewardButton, setShowRewardButton] = useState(false);
 
  useEffect(() => {
   const rawScore = localStorage.getItem("score");
   const parsed = rawScore !== null && !isNaN(parseInt(rawScore)) ? parseInt(rawScore) : 0;
 
   console.log("Raw score:", rawScore);
   console.log("Parsed score:", parsed);
 
   setScore(parsed);
   setShowRewardButton(parsed >= 50);
 }, []);
 useEffect(() => {
   const rawScore = localStorage.getItem("score");
   const parsed = rawScore !== null && !isNaN(parseInt(rawScore)) ? parseInt(rawScore) : 0;
 
   console.log("Raw score:", rawScore);
   console.log("Parsed score:", parsed);
 
   setScore(parsed);
   setShowRewardButton(parsed >= 50);
 }, []);
 
 
   const handleStageClick = (stageNumber) => {
     navigate(`/stagedark/${stageNumber}`);
   };
 
    const handleRewardClick = () => {
     navigate('/cer');
     setShowRewardButton(true);
   };
 
   const allStages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
 
   const mobileRows = [];
   for (let i = 0; i < allStages.length; i += 2) {
     mobileRows.push(allStages.slice(i, i + 2));
   }
 
 
   const desktopRows = [allStages.slice(0, 5), allStages.slice(5, 10)];
 
 
   if (isMobile414) {
     return (
       <div className="text-center p-6 bg-gradient-to-r from-indigo-950 via-indigo-800 to-sky-700 min-h-screen font-[Mali]">
         <h2 className="text-3xl text-black mb-6 mt-6">Cyber Smart</h2>
 
         {mobileRows.map((row, rowIndex) => (
           <div key={rowIndex} className="flex justify-center gap-20 mb-20 mt-20">
             {row.map((stageNumber) => (
               <button
                 key={stageNumber}
                 onClick={() => handleStageClick(stageNumber)}
                 className="w-14 h-14 rounded-full bg-sky-800 text-white text-lg font-bold hover:bg-sky-900 transition duration-150"
               >
                 {stageNumber}
               </button>
             ))}
           </div>
         ))}
       </div>
     );
   }
 
 
   return (
      <div className={`text-center p-6 min-h-screen font-[Mali] bg-gradient-to-r from-indigo-950 via-indigo-800 to-sky-700 bg-cover bg-center ${isMobile414 ? '' : 'bg-gradient-to-r from-indigo-950 via-indigo-800 to-sky-600 bg-cover bg-center'}`}>
       <h2 className={`text-3xl ${isMobile414 ? 'mb-6 mt-6' : 'text-4xl mb-5 mt-10 text-black'}`}>Cyber Smart</h2>
 
       {isMobile414 ? (
         mobileRows.map((row, rowIndex) => (
           <div key={rowIndex} className="flex justify-center gap-20 mb-20 mt-20">
             {row.map((stageNumber) => (
               <button
                 key={stageNumber}
                 onClick={() => handleStageClick(stageNumber)}
                 className="w-14 h-14 rounded-full bg-sky-800 text-white text-lg font-bold hover:bg-sky-900 transition duration-150"
               >
                 {stageNumber}
               </button>
             ))}
           </div>
         ))
       ) : (
         desktopRows.map((row, rowIndex) => (
           <div key={rowIndex} className="relative flex justify-center gap-50 mb-20 pt-30">
             {row.map((stageNumber) => (
               <div key={stageNumber} className="relative">
                 <button
                   onClick={() => handleStageClick(stageNumber)}
                   className="w-20 h-20 rounded-full bg-sky-800 text-white text-2xl font-bold hover:bg-sky-900 hover:scale-110 transition-transform duration-200"
                 >
                   {stageNumber}
                 </button>
               </div>
             ))}
           </div>
         ))
       )}
       {showRewardButton && (
   <button
     onClick={handleRewardClick}
     className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-full shadow-lg transition duration-200"
   >
     รับรางวัล 🎉
   </button>
 )}
 
     </div>
   );
 }

export default Storydark
