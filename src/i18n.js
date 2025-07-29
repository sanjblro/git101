import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      setting: "SETTING",
      language: "LANGUAGE",
      dark_mode: "DARK MODE",
      light_mode: "LIGHT MODE",
      start: "START",
      license: "LISENCE",
      petyn: "Please enter your name here",
      etyn: "Enter your name",
      next: "Next",
      petye: "Please enter your age",
      etye: "Enter your age",
      hello: "Hello! {{name}}",
      stage1: "You want to buy clothes from a shop on Facebook at a price lower than usual. It is a shop with no reviews but has many followers. The transaction is agreed upon and the shop has sent the account number. What will you do?",

      
    },
  },
  th: {
    translation: {
      welcome: "ยินดีต้อนรับ",
      setting: "ตั้งค่า",
      language: "ภาษา",
      dark_mode: "โหมดมืด",
      light_mode: "โหมดสว่าง",
      start: "เริ่ม",
      license: "ข้อตกลงในการใช้ซอฟต์แวร์",
      petyn: "กรุณากรอกชื่อของคุณตรงนี้",
      etyn: "ใส่ชื่อของคุณ",
      next: "ต่อไป",
      petye: "กรุณาใส่อายุของคุณ",
      etye: "ใส่อายุของคุณ",
      hello: "สวัสดี คุณ {{name}}",
      
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
