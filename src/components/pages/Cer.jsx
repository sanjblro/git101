import React from 'react'

function Cer() {
const name = localStorage.getItem('name');
 const handleReset = () => {
   
    localStorage.setItem("score", "0");

    window.location.href = "/git101/story";
  };

  return (
     <div className="flex flex-col items-center justify-center p-6 min-h-screen bg-yellow-100 font-[Mali] text-center relative">
      <h1 className="text-4xl mb-8">เกียรติบัตร</h1>

      <div className="relative w-[800px]">
        <img
          src={`${import.meta.env.BASE_URL}image/Red_and_Gold_Elegant_Business_Certificate.png`}
          alt="certificate"
          className="w-full h-auto z-10"
        />
        
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-black mt-10">
          {name}
        </div>
      </div>

      <button
        onClick={handleReset}
        className="mt-8 bg-red-400 hover:bg-red-500 text-white py-3 px-6 rounded-full shadow-lg transition duration-200"
      >
        เริ่มใหม่
      </button>
    </div>
  );
}

export default Cer
