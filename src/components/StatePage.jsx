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
    content: "ก่อนโอนเงินออนไลน์ ควรตรวจสอบชื่อและเลขบัญชีในเว็บ blacklist และขอหลักฐานจากผู้ขายหากไม่มั่นใจ",
  },
  "2": {
    title: "ตอนที่ 2",
    content:
      "วันนี้คุณไปนั่งร้านกาแฟเพื่อทำรายงานเมื่อเปิดโน้ตบุ๊ก คุณเจอ Wi-Fi ชื่อ coffee_free_wifi เครือข่ายนี้ไม่ต้องใส่รหัสเชื่อมต่อได้ทันทีซึ่งดูแล้วสะดวกมาก และแรงกว่าสัญญาณอื่นด้วย คุณกำลังจะกดเชื่อมต่อ และตั้งใจจะเข้าเว็บธนาคารหลังจากนั้น แต่คุณก็เริ่มรู้สึกไม่แน่ใจว่า Wi-Fi นี้ปลอดภัยหรือไม่ มันอาจจะไม่ใช่ของร้านก็ได้ คุณจะทำอย่างไร",
    Image: `${import.meta.env.BASE_URL}image/phoneprp.PNG`,
    choices: [
      { text: "เชื่อมต่อเลย เพราะฟรีและเร็ว", next: "wrong2" },
      { text: "เชื่อมต่อ แล้วเข้าเว็บธนาคารตามแผน", next: "wrong2" },
      { text: "ไม่ไว้ใจ ใช้ Hotspot จากมือถือแทน", next: "correct2" },
    ],
  },
  correct2: {
    title: "เยี่ยมมาก!",
    content:
      "การใช้ Hotspot ส่วนตัวจะปลอดภัยกว่า เพราะคุณควบคุมเครือข่ายเองได้ และไม่มีใครแอบดักข้อมูลได้ง่ายๆ ถ้าจำเป็นต้องใช้ Wi-Fi สาธารณะจริง ๆ ควรหลีกเลี่ยงการเข้าสู่ระบบเว็บไซต์สำคัญ",
  },
  wrong2: {
    title: "โอ้ไม่...",
    content:
      "Wi-Fi สาธารณะโดยเฉพาะที่ไม่มีรหัสผ่าน อาจถูกตั้งขึ้นโดยแฮกเกอร์เพื่อดักจับข้อมูลของเหยื่อที่หลงเชื่อ โดยเฉพาะเมื่อคุณเข้าเว็บไซต์สำคัญ เช่น ธนาคาร อีเมล หรือโซเชียลมีเดีย ซึ่งสิ่งนี้เรียกว่า Man-in-the-Middle Attack (MitM) ผู้ไม่หวังดีสามารถดักข้อมูลระหว่างคุณกับเว็บไซต์ได้",
  },
  "3": {
    title: "ตอนที่ 3",
    content:
      "คุณได้รับอีเมลฉบับหนึ่งที่ดูเหมือนส่งมาจากธนาคารที่คุณใช้บริการในอีเมลแจ้งว่าบัญชีของคุณถูกล็อกชั่วคราว เนื่องจากพบการใช้งานที่ผิดปกติ พร้อมกับมีลิงก์ให้คุณคลิกเพื่อปลดล็อกบัญชีโดยด่วน ข้อความในอีเมลดูจริงจังและน่ากลัวมาก คุณรู้สึกกังวลและต้องการเข้าใช้บัญชีของคุณโดยเร็วแต่คุณไม่แน่ใจว่าอีเมลนี้เป็นของธนาคารจริงหรือไม่ คุณจะทำอย่างไร",
    Image: `${import.meta.env.BASE_URL}image/phoneprp.PNG`,
    choices: [
      { text: "โทรหาธนาคารโดยตรง ไม่คลิกใดๆ", next: "correct3" },
      { text: "คลิกลิงก์ทันทีเพื่อปลดล็อกบัญชี ไม่อยากให้เกิดปัญหา", next: "wrong3" },
      { text: "กรอกข้อมูลส่วนตัวในแบบฟอร์มที่ลิงก์ให้มา เพื่อยืนยันตัวตน", next: "wrong3" },
    ],
  },
  correct3: {
    title: "ถูกต้อง!",
    content:
      "โทรหาธนาคารโดยตรงผ่านเบอร์โทรที่คุณรู้จัก หรือตรวจสอบเบอร์โทรจากเว็บไซต์อย่างเป็นทางการเพราะ อีเมลประเภทนี้มักเป็นการโจมตีแบบ “ฟิชชิ่ง” (Phishing) ที่พยายามหลอกลวงให้คุณคลิกลิงก์เพื่อขโมยรหัสผ่านหรือข้อมูลส่วนตัว",
  },
  wrong3: {
    title: "ระวัง! ข้อมูลของคุณอาจถูกขโมย",
    content:
      "แฮ็กเกอร์มักปลอมเป็นธนาคารเพื่อหลอกขโมยข้อมูล ถ้าคุณคลิกเข้าไปหรือกรอกข้อมูล อาจโดนดักรหัสหรือขโมยเงินได้เลยนะ!",
  },
  "4": {
    title: "ตอนที่ 4",
    content:
      "คุณกำลังทำโปรเจกต์ตัดต่อวิดีโอส่งครู แต่ไม่อยากเสียเงินซื้อโปรแกรมตัดต่อที่มีราคาค่อนข้างแพงจึงไปค้นหาในอินเทอร์เน็ต และเจอเว็บไซต์ที่ให้ดาวน์โหลดไฟล์ “Crack” เพื่อปลดล็อกโปรแกรมเต็มแบบไม่ต้องจ่ายเงิน เว็บไซต์นั้นดูไม่น่าเชื่อถือและไม่มีรีวิวมากนัก แต่คุณอยากได้โปรแกรมเร็ว ๆ เพื่อทำงานให้เสร็จทันเวลา เป็นคุณจะทำอยา่างไร",
    Image: `${import.meta.env.BASE_URL}image/phoneprp.PNG`,
    choices: [
      { text: "โหลดไฟล์ Crack มาทันที เพื่อใช้โปรแกรมเต็มฟีเจอร์โดยไม่ต้องเสียเงิน", next: "wrong4" },
      { text: "หาวิธีใช้เวอร์ชันทดลองหรือโปรแกรมฟรีที่คล้ายกันมาก่อน", next: "correct4" },
      { text: "อ่านรีวิวและตรวจสอบว่าเว็บไซต์นี้ปลอดภัยหรือไม่ก่อนดาวน์โหลด", next: "correct4" },
    ],
  },
  correct4: {
    title: "คุณทำถูกแล้ว!",
    content:
      "เลือกหาวิธีใช้เวอร์ชันทดลอง หรืออ่านรีวิวตรวจสอบเว็บก่อนดาวน์โหลด เพราะโปรแกรมเถื่อนหรือ Crack มักแฝงมัลแวร์หรือไวรัสที่อาจทำให้คอมพิวเตอร์ติดเชื้อและข้อมูลสำคัญถูกขโมยได้",
  },
  wrong4: {
    title: "เสี่ยงเกินไป!",
    content:
      "ถ้าคุณโหลดไฟล์ Crack ทันที คุณเสี่ยงต่อการโดนแฮกเกอร์แทรกซึมเข้ามาในเครื่อง การอ่านรีวิวและใช้เวอร์ชันทดลองช่วยให้คุณลดความเสี่ยงและตัดสินใจได้ดีกว่า นอกจากนี้การใช้โปรแกรมเถื่อนยังผิดกฎหมายและอาจส่งผลเสียในระยะยาวทั้งเรื่องความปลอดภัยและศีลธรรม",
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
  const currentScore = parseInt(localStorage.getItem("score")) || 0;
  let newScore = currentScore;

  if (stageNumber.startsWith("correct")) {
    newScore += 10;
    setScore(newScore);
    localStorage.setItem("score", newScore);
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

<p className={`text-lg ml-25 mr-25 mt-10 leading-relaxed ${textColor}`}>
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
