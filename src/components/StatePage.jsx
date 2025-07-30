import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";



const stageData = {
  "1": {
    title: "ตอนที่ 1",
    content:
      "คุณอยากได้เสื้อผ้าร้านหนึ่งใน facebook ในราคาที่ถูกกว่าปกติ เป็นร้านที่ไม่มีรีวิว แต่มีผู้ติดตามเยอะ ตกลงซื้อขายเรียบร้อย ร้านส่งเลขบัญชีมาแล้ว คุณจะทำอย่างไร",
    Image: `${import.meta.env.BASE_URL}image/phoneprp.PNG`,
    choices: [
      { 
        text: "โอนให้เพราะร้านมีผู้ติดตามเยอะ น่าเชื่อถือ น่าจะไม่โกง",
        next: "wrong1",
      },
      {
        text: "น่าสงสัย? ลองนำชื่อบัญชีไปเช็คในเว็บบัญชีคนโกงดีกว่า",
        next: "correct1",
      },
      { text: "ไม่กล้าเสี่ยง ขอเครดิตผู้ขายเพิ่มเติมดีกว่า…", next: "correct1" },
    ],
  },
  correct1: {
    title: "เก่งมาก",
    content:
      "คุณทำถูกแล้ว ควรรักษาสิทธิของผู้ซื้อไว้นะ เรามีสิทธิเช็คให้ชัวร์ก่อนโอน คุณทำได้ดีมาก ทำแบบนี้ต่อไปล่ะ",
  },
  wrong1: {
    title: "ไม่นะ...",
    content: "คุณเจอกับมังกรยักษ์ในถ้ำ",
  },
  "2": {
    title: "ตอนที่ 2",
    content:
      "คุณใช้รหัสผ่านเดียวกันกับหลายเว็บไซต์ เพื่อความสะดวก แล้วมีข่าวว่าเว็บหนึ่งถูกแฮ็ก คุณจะทำอย่างไร?",
    Image: `${import.meta.env.BASE_URL}image/phoneprp.PNG`,
    choices: [
      { text: "ไม่สนใจ เพราะเว็บอื่นไม่น่าจะโดน", next: "wrong2" },
      { text: "เปลี่ยนรหัสผ่านทุกเว็บทันที และเปิด 2FA ถ้าได้", next: "correct2" },
      { text: "ใช้รหัสผ่านเดิมต่อไป เพราะจำง่ายดี", next: "wrong2" },
    ],
  },
  correct2: {
    title: "เยี่ยมมาก!",
    content:
      "การเปลี่ยนรหัสผ่านและเปิด 2FA คือวิธีที่ปลอดภัยที่สุดเมื่อบัญชีเสี่ยงโดนแฮ็ก คุณใส่ใจความปลอดภัยของข้อมูลตัวเองได้ดีมาก",
  },
  wrong2: {
    title: "โอ้ไม่...",
    content:
      "การใช้รหัสผ่านซ้ำหรือไม่เปลี่ยนรหัสอาจทำให้บัญชีอื่นๆ ถูกแฮ็กตามมาได้นะ ระวังข้อมูลของคุณจะหลุดออกไป",
  },
  "3": {
    title: "ตอนที่ 3",
    content:
      "คุณได้รับอีเมลที่ดูเหมือนธนาคาร แจ้งว่าบัญชีถูกล็อกและให้คลิกลิงก์ คุณจะทำอย่างไร?",
    Image: `${import.meta.env.BASE_URL}image/phoneprp.PNG`,
    choices: [
      { text: "คลิกลิงก์ทันทีเพื่อปลดล็อก", next: "wrong3" },
      { text: "โทรหาธนาคารโดยตรง ไม่คลิกใดๆ", next: "correct3" },
      { text: "ลบอีเมล เพราะไม่ใช่ธนาคารที่ใช้อยู่", next: "wrong3" },
    ],
  },
  correct3: {
    title: "ถูกต้อง!",
    content:
      "อย่าคลิกลิงก์จากอีเมลน่าสงสัยเด็ดขาด การโทรหาธนาคารหรือเช็คเว็บจริงเองคือทางเลือกที่ปลอดภัยที่สุด",
  },
  wrong3: {
    title: "ไม่ใช่แบบนั้น!",
    content:
      "แฮ็กเกอร์มักปลอมเป็นธนาคารเพื่อหลอกขโมยข้อมูล ถ้าคุณคลิกเข้าไป อาจโดนดักรหัสหรือขโมยเงินได้เลยนะ!",
  },
  "4": {
    title: "ตอนที่ 4",
    content:
      "คุณอยู่ในร้านกาแฟ และพบ Wi-Fi ฟรีที่ไม่มีรหัสผ่าน คุณจะทำอย่างไร?",
    Image: `${import.meta.env.BASE_URL}image/phoneprp.PNG`,
    choices: [
      { text: "ต่อทันที ใช้งานโซเชียลตามปกติ", next: "wrong4" },
      { text: "ต่อ Wi-Fi แต่ใช้ VPN ป้องกันข้อมูล", next: "correct4" },
      { text: "ไม่ต่อเพราะกลัวถูกดักข้อมูล", next: "correct4" },
    ],
  },
  correct4: {
    title: "ปลอดภัยไว้ก่อน!",
    content:
      "การหลีกเลี่ยง Wi-Fi สาธารณะที่ไม่ปลอดภัย หรือใช้ VPN จะช่วยปกป้องข้อมูลส่วนตัวคุณได้ดีมาก",
  },
  wrong4: {
    title: "เสี่ยงเกินไป!",
    content:
      "Wi-Fi สาธารณะอาจถูกดักข้อมูลโดยไม่รู้ตัว อย่าใช้สำหรับเข้าสู่ระบบหรือทำธุรกรรมสำคัญเด็ดขาด",
  },
  "5": {
    title: "ตอนที่ 5",
    content:
      "ระบบแจ้งให้คุณเปิดการยืนยันตัวตน 2 ชั้น (2FA) ด้วยแอป Authenticator แต่คุณรีบใช้งานคุณจะทำอย่างไร?",
    Image: `${import.meta.env.BASE_URL}image/phoneprp.PNG`,
    choices: [
      { text: "กดข้ามไปก่อน ค่อยกลับมาเปิดทีหลัง", next: "correct5" },
      { text: "เปิด 2FA ทันที เพื่อความปลอดภัย", next: "correct5" },
      { text: "ใช้รหัส SMS แทน เพราะง่ายกว่า", next: "wrong5" },
    ],
  },
  correct5: {
    title: "เก่งมาก!",
    content:
      "การเปิด 2FA จะช่วยปกป้องบัญชีของคุณจากผู้ไม่หวังดีแม้จะรู้รหัสผ่านไปแล้ว คุณเลือกทางที่ดีที่สุดแล้ว!",
  },
  wrong5: {
    title: "ไม่นะ...",
    content:
      "อย่าลืมว่าแค่รหัสผ่านอย่างเดียวไม่พอในโลกไซเบอร์ยุคนี้! เปิด 2FA ไว้ จะได้ปลอดภัยยิ่งขึ้น",
  },
  "6": {
    title: "ตอนที่ 6",
    content:
      "คุณเจอแอปฟรีที่แจกของรางวัลเยอะมาก แต่ขอสิทธิ์เข้าถึงไฟล์ รูป และ SMS คุณจะทำอย่างไร?",
    Image: `${import.meta.env.BASE_URL}image/phoneprp.PNG`,
    choices: [
      { text: "ติดตั้งเลย ของฟรีใครจะพลาด", next: "wrong6" },
      { text: "อ่านรีวิว แล้วติดตั้งถ้าไว้ใจได้", next: "correct6" },
      { text: "ไม่ติดตั้ง เพราะสิทธิ์เยอะเกินจำเป็น", next: "correct6" },
    ],
  },
  correct6: {
    title: "ระวังไว้ดีมาก!",
    content:
      "การสังเกตว่าขอสิทธิ์เกินความจำเป็น เป็นทักษะสำคัญเลย อย่าติดตั้งแอปที่ดูน่าสงสัยนะ",
  },
  wrong6: {
    title: "แอปฟรีแต่ไม่ฟรี!",
    content:
      "แอปที่ขอสิทธิ์เกินจำเป็นอาจขโมยข้อมูลคุณโดยที่ไม่รู้ตัว อย่าหลงกลของแถมง่ายๆ!",
  },
  "7": {
    title: "ตอนที่ 7",
    content:
      "คุณได้รับ SMS แจ้งว่า 'คุณถูกรางวัล iPhone' พร้อมลิงก์ให้กด คุณจะทำอย่างไร?",
    Image: `${import.meta.env.BASE_URL}image/phoneprp.PNG`,
    choices: [
      { text: "คลิกเลย เผื่อได้จริง", next: "wrong7" },
      { text: "ตรวจสอบแหล่งที่มาก่อน", next: "correct7" },
      { text: "ลบทิ้งทันที เพราะดูหลอกลวง", next: "correct7" },
    ],
  },
  correct7: {
    title: "ไม่หลงกล!",
    content:
      "คุณรู้ทันกลลวงแบบฟิชชิ่ง (phishing) ที่พบบ่อยมาก อย่าคลิกลิงก์สุ่มเด็ดขาด เก่งมาก!",
  },
  wrong7: {
    title: "ของฟรีไม่มีจริง!",
    content:
      "ลิงก์พวกนี้มักหลอกให้คุณกรอกข้อมูลส่วนตัว อย่าเสี่ยงเสียข้อมูลเพราะความหวังลมๆ แล้งๆ เลยนะ",
  },
  "8": {
    title: "ตอนที่ 8",
    content:
      "เพื่อนทักแชตมาขอให้โอนเงินด่วน แต่ใช้แอคเคานต์เดิม และพิมพ์ผิดแปลกๆ คุณจะทำอย่างไร?",
    Image: `${import.meta.env.BASE_URL}image/phoneprp.PNG`,
    choices: [
      { text: "โอนทันที เพราะใช้ชื่อเดิม", next: "wrong8" },
      { text: "อย่าไปคิดมาก เพื่อนอาจจะต้องการใช้เงินจริงๆ", next: "wrong8" },
      { text: "โทรหาเพื่อนก่อนทุกครั้งเพื่อยืนยัน", next: "correct8" },
    ],
  },
  correct8: {
    title: "สุดยอด!",
    content:
      "ระวังแชตปลอมจากมิจฉาชีพ แค่ใช้ชื่อเพื่อนไม่ได้แปลว่าเป็นคนจริงๆ โทรเช็คก่อนเสมอคือสิ่งที่ถูกต้อง",
  },
  wrong8: {
    title: "โดนหลอกง่ายเกินไป!",
    content:
      "บัญชีเพื่อนอาจโดนแฮ็ก และแชตที่คุณเห็นอาจเป็นมิจฉาชีพก็ได้ อย่าโอนทันทีเด็ดขาด!",
  },
  "9": {
    title: "ตอนที่ 9",
    content:
      "คุณเจอแฟลชไดรฟ์ในลานจอดรถ และอยากรู้ว่าเป็นของใคร คุณจะทำอย่างไร?",
    Image: `${import.meta.env.BASE_URL}image/phoneprp.PNG`,
    choices: [
      { text: "นำส่ง รปภ. หรือเจ้าหน้าที่ที่เกี่ยวข้อง", next: "correct9" },
      { text: "เสียบกับคอมของเพื่อนก่อนเพื่อความปลอดภัย", next: "wrong9" },
      { text: "เสียบเข้าคอมดูไฟล์ทันที", next: "wrong9" },
    ],
  },
  correct9: {
    title: "ปลอดภัยไว้ก่อน!",
    content:
      "แฟลชไดรฟ์ไม่รู้ที่มาอาจมีไวรัสหรือมัลแวร์ที่ทำลายข้อมูลคุณได้ ทางที่ดีควรส่งให้เจ้าหน้าที่จัดการ",
  },
  wrong9: {
    title: "อันตรายมาก!",
    content:
      "แฟลชไดรฟ์สุ่มๆ อาจถูกฝังไวรัสไว้ ถ้าเสียบเข้าคอมคุณอาจโดนเจาะระบบทันที!",
  },
  "10": {
    title: "ตอนที่ 10",
    content:
      "คุณจำเป็นต้องใช้คอมพิวเตอร์ที่ร้านอินเทอร์เน็ตเพื่อเข้าสู่ระบบอีเมลด่วน คุณจะทำอย่างไรให้ปลอดภัย?",
    Image: `${import.meta.env.BASE_URL}image/phoneprp.PNG`,
    choices: [
      { text: "ใช้โหมดไม่ระบุตัวตน (Incognito) และออกจากระบบเสมอ", next: "wrong10" },
      { text: "เข้าระบบตามปกติ แล้วออกให้เรียบร้อยก็พอ", next: "wrong10" },
      { text: "ไม่เข้าสู่ระบบบนคอมสาธารณะ เพราะเสี่ยงเกินไป", next: "correct10" },
    ],
  },
  correct10: {
    title: "ฉลาดมาก!",
    content:
      "การเลี่ยงเข้าสู่ระบบสำคัญบนคอมพ์สาธารณะช่วยลดความเสี่ยงข้อมูลรั่วไหลได้มากที่สุดเลย!",
  },
  wrong10: {
    title: "ระวังโดนดักข้อมูล!",
    content:
      "คอมพ์สาธารณะอาจมีโปรแกรมดักพาสเวิร์ด อย่าเสี่ยงเข้าสู่ระบบสำคัญโดยไม่จำเป็น!",
  },
};

function StatePage() {
 const { stageNumber } = useParams();
 const stage = stageData[stageNumber];
 const [score, setScore] = useState(() => parseInt(localStorage.getItem("score")) || 0);
 const navigate = useNavigate();

 const bgColor = stageNumber.startsWith("correct")
    ? "bg-green-200"
    : stageNumber.startsWith("wrong")
    ? "bg-red-200"
    : "bg-yellow-100";

    const textColor = stageNumber.startsWith("correct")
    ? "text-green-800"
    : stageNumber.startsWith("wrong")
    ? "text-red-800"
    : "text-gray-800";



  const isMobile = useMediaQuery({ maxWidth: 414, maxHeight: 896 });

  if (!stage) {
    return (
      <div className="text-center mt-10 text-red-500 text-xl font-[Mali]">
        ไม่พบตอนนี้
      </div>
    );
  }

  function handleFinish() {

    if (stageNumber.startsWith("correct")) {
      setScore(prev => prev + 10);

      localStorage.setItem("score", (parseInt(localStorage.getItem("score")) || 0) + 10);
    } else {

      localStorage.setItem("score", localStorage.getItem("score") || 0);
    }

    navigate("/Story");
  }

  if (isMobile) {
    return (
      <div className="flex flex-col items-center px-4 py-6 bg-yellow-100 min-h-screen font-[Mali] text-center">
        <h1 className="text-2xl text-sky-700 font-bold mb-4">{stage.title}</h1>
        <p className="text-base text-gray-800 mb-20">{stage.content}</p>

        {stage.Image && (
          <img
            src={stage.Image}
            alt="ภาพประกอบ"
            className="w-100 h-auto mb-20"
          />
        )}

        {stage.choices && (
          <div className="flex flex-col gap-4 w-full max-w-xs">
            {stage.choices.map((choice, index) => (
              <Link
                key={index}
                to={`/stage/${choice.next}`}
                className="bg-sky-800 text-white py-3 px-4 rounded-lg hover:bg-sky-600 transition"
              >
                {choice.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
      <div className={`min-h-screen px-6 py-10 font-[Mali] text-center ${bgColor}`}>
     <h1 className={`text-3xl lg:text-4xl font-bold mb-4 mt-10 ${textColor}`}>
  {stage.title}
</h1>

<p className={`text-lg mt-10 leading-relaxed ${textColor}`}>
  {stage.content}
</p>


      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-6 flex-wrap">
        {stage.Image && (
          <img
            src={stage.Image}
            alt="ภาพประกอบ"
            className="w-full max-w-xs rounded-lg shadow-md"
          />
        )}

        {stage.choices && (
          <div className="space-y-5 text-center py-8 px-6 max-w-md w-full">
            {stage.choices.map((choice, index) => (
              <Link
                key={index}
                to={`/stage/${choice.next}`}
                className="block bg-sky-800 hover:bg-sky-600 text-white py-3 px-5 rounded-md shadow-md transition duration-200"
              >
                {choice.text}
              </Link>
            ))}
          </div>
        )}
      </div>
       {(stageNumber.startsWith("correct") || stageNumber.startsWith("wrong")) && (
        <button
          onClick={handleFinish}
          className="mt-10 bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-6 rounded-md shadow-lg transition duration-200"
        >
          เสร็จสิ้น
        </button>
      )}
    </div>
  );
}

export default StatePage;
