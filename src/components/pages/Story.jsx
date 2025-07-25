import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function Story() {
  const navigate = useNavigate();
  const isMobile414 = useMediaQuery({ maxWidth: 414, maxHeight: 896 });

  const handleStageClick = (stageNumber) => {
    navigate(`/stage/${stageNumber}`);
  };


  const allStages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  const mobileRows = [];
  for (let i = 0; i < allStages.length; i += 2) {
    mobileRows.push(allStages.slice(i, i + 2));
  }


  const desktopRows = [allStages.slice(0, 5), allStages.slice(5, 10)];


  if (isMobile414) {
    return (
      <div className="text-center p-6 bg-yellow-100 min-h-screen font-[Mali]">
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
    <div className="text-center p-10 bg-yellow-100 bg-cover bg-center min-h-screen font-[Mali]">
      <h2 className="text-4xl text-black mb-8 mt-10">Cyber Smart</h2>

      {desktopRows.map((row, rowIndex) => (
        <div key={rowIndex} className="relative flex justify-center gap-60 mb-40 pt-30">
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
      ))}
    </div>
  );
}

export default Story;
