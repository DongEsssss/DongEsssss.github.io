import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import MainEn from "../asset/locale/en/main.json";
import MainKr from "../asset/locale/kr/main.json";

const resources = {
  en: {
    translation: MainEn
  },
  kr: {
    translation: MainKr
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "kr", // 기본 설정 언어, 'cimode'로 설정할 경우 키 값으로 출력된다.
    fallbackLng: "en", // 번역 파일에서 찾을 수 없는 경우 기본 언어
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;