import { Link, useParams } from "react-router-dom";

const stageData = {
  "1": {
    title: "ตอนที่ 1",
    content: "คุณอยากได้เสื้อผ้าร้านหนึ่งใน facebook ในราคาที่ถูกกว่าปกติ เป็นร้านที่ไม่มีรีวิว แต่มีผู้ติดตามเยอะ ตกลงซื้อขายเรียบร้อย ร้านส่งเลขบัญชีมาแล้ว คุณจะทำอย่างไร",
    Image:"/image/phoneprp.PNG",
    choices: [
      { text: "โอนให้เพราะร้านมีผู้ติดตามเยอะ น่าเชื่อถือ น่าจะไม่โกง", next: "wrong1" },
      { text: "น่าสงสัย? ลองนำชื่อบัญชีไปเช็คในเว็บบัญชีคนโกงดีกว่า", next: "correct1" },
      { text: "ไม่กล้าเสี่ยง ขอเครดิตผู้ขายเพิ่มเติมดีกว่า…", next: "correct1" },
    ],
  },
  correct1: {
    title: "เก่งมาก",
    content: "คุณทำถูกแล้ว ควรรักษาสิทธิของผู้ซื้อไว้นะ เรามีสิทธิเช็คให้ชัวร์ก่อนโอน คุณทำได้ดีมาก ทำแบบนี้ต่อไปล่ะ",
  },
  wrong1: {
    title: "ไม่นะ...",
    content: "คุณเจอกับมังกรยักษ์ในถ้ำ",
  },
  "2": {
    title: "ตอนที่ 2",
    content: "เนื้อหาของตอนที่ 2",
  },
  "3": {
    title: "ตอนที่ 3",
    content: "เนื้อหาของตอนที่ 3",
  },
  "4": {
    title: "ตอนที่ 4",
    content: "เนื้อหาของตอนที่ 4",
  },
};

function StatePage() {
  const { stageNumber } = useParams();
  const stage = stageData[stageNumber];

  if (!stage) {
    return <div className="text-center mt-10 text-red-500 text-xl">ไม่พบตอนนี้</div>;
  }

  return (
    <div className="text-center font-[Mali]">
      <h1 className="text-3xl font-bold text-sky-700 mb-4 mt-10">{stage.title}</h1>
      <p className="text-lg text-gray-800 mt-10">{stage.content}</p>
     <div className="flex items-start mt-10 gap-5 flex-wrap">
      {stage.Image && (
  <img
    src={stage.Image}
    alt="ภาพประกอบ"
    className=" mt-6 w-220 h-auto"
  />
)}

      <div className="space-y-5 text-center text-top py-50 px-30">
        {stage.choices?.map((choice, index) => (
          <Link
            key={index}
            to={`/stage/${choice.next}`}
            className="block bg-sky-800 hover:bg-sky-600 text-white py-2 px-4 rounded-md max-w-xs"
          >
            {choice.text}
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
}

export default StatePage;

