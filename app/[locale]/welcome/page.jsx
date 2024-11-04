import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import Carousel from '@/components/Carousel/Carousel'
import ChatBubble from '@/components/ChatBubble/ChatBubble'
import HeaderItem from '@/components/HeaderItem/HeaderItem'

const namespaces = ['welcome', 'header', 'general']

export default async function Welcome({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)
    const images = []

    for (let i = 2; i < 9; i++) {
        images.push(`/assets/images/welcome/welcome${i}.jpg`)
    }

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
    <div className="page">
        <div className="flex flex-col w-full h-screen">
            <HeaderItem v={"v5"}/>
            <div className="w-full md:h-3/5">
                <Carousel images={images} />
            </div>
            <div className='welcome_container'>
                <div className="principal_title m-0 flex justify-center items-center gap-2 md:flex-row flex-col">
                    <h1>{t('welcome:title')}</h1>
                    <h1 className='italictiempos_title m-0'>ITZ&#39;ANA RESORT &amp; RESIDENCES</h1>
                </div>
                <p className="welcome_paragraph">{t('welcome:subtitle')}</p>
                <span className="welcome_description">
                    {t('welcome:description1')}
                </span>
                <span className="welcome_description">
                    {t('welcome:description2')}
                </span>
            </div>
        </div>
        <ChatBubble text={t('general:chat_bubble')}/>
      </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}