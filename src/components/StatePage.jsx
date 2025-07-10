import { useParams } from 'react-router-dom';

const stageData = {
  1: { title: "ตอนที่ 1", 
    content: "เนื้อหาของตอนที่ 1" },

  2: { title: "ตอนที่ 2", 
    content: "เนื้อหาของตอนที่ 2" },

  3: { title: "ตอนที่ 3", 
    content: "เนื้อหาของตอนที่ 3" },
    
  4: { title: "ตอนที่ 4", 
    content: "เนื้อหาของตอนที่ 4" },
};

function StatePage() {
  const { stageNumber } = useParams();
  const stage = stageData[stageNumber];

  if (!stage) {
    return <div className="text-center mt-10 text-red-500 text-xl">ไม่พบตอนนี้</div>;
  }

  return (
    <div className="text-center mt-10 px-4">
      <h1 className="text-3xl font-bold text-sky-700 mb-4">{stage.title}</h1>
      <p className="text-lg text-gray-800">{stage.content}</p>
    </div>
  );
}

export default StatePage;


