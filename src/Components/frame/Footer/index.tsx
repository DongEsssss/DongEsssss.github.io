import React from 'react'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const {t }= useTranslation();
  return (
    <div>{t('title')}</div>
  )
}
