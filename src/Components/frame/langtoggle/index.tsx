import { useEffect, useState } from 'react'
import store from 'store'
//캐시로 사용자가 정해놨던 언어 설정 불러옴
import i18n from '../../../service/i18next'

const storedLang = store.get('wanted.language') || 'EN'

const LangeBtn = () => {
  const [lang, setLang] = useState(storedLang)

  useEffect(() => {
    store.set('wanted.language', lang)
  }, [lang])

  const handleLangClick = () => {
    setLang(lang === 'EN' ? 'KR' : 'EN')
    i18n.changeLanguage(lang.toLowerCase())
  }

  return (
    <button type='button' onClick={handleLangClick}>
      {lang}
    </button>
  )
}

export default LangeBtn  