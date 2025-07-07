import React from 'react'
import { useNavigate } from 'react-router-dom';

function Story() {
   const navigate = useNavigate();

  const handleStageClick = (stageNumber) => {
    navigate(`/stage/${stageNumber}`);
  };

const rows = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
  ];

  return (
   <div className="text-center p-10">
      <h2 className='text-2xl text-black font-[Mali] mb-8 mt-10'>เส้นทางแห่งดวงจันทร์</h2>
{rows.map((row, rowIndex) => (
        <div key={rowIndex} className="relative flex justify-center gap-50 mb-8 pt-20">
          {row.map((stageNumber, i) => (
            <div key={stageNumber} className="relative">
              {i < row.length - 1 && (
                <div className="absolute top-1/2 left-full h-2 w-50 bg-sky-700 translate-y-[-50%]"></div>
              )}
              <button
                onClick={() => handleStageClick(stageNumber)}
                className="w-20 h-20 rounded-full bg-sky-700 text-white text-2xl font-bold hover:bg-sky-800 hover:scale-110 transition-transform duration-200"
              >
                {stageNumber}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Story;