import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import ArrowBack from '@/components/ArrowBack/ArrowBack'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import SocialMediaItem from '@/components/SocialMediaItem/SocialMediaItem'
import FooterItem from '@/components/FooterItem/FooterItem'

const namespaces = ['media', 'home']

export default async function SocialMedia({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-green md:px-20 px-10 relative h-screen">
            <ArrowBack absolute white/>
            <div className='info_container'>
                <h2 className='italictiempos_title'>{t('home:nav19')}</h2>
            </div>
            <SocialMediaItem />
            <LanguageSwitcher />
            <FooterItem  transparent/>
        </div>
    </TranslationsProvider>
  )
}