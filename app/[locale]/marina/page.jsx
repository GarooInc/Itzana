import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import FooterItem from '@/components/FooterItem/FooterItem'
import InfoDisplay from '@/components/InfoDisplay/InfoDisplay'

const namespaces = ['marina', 'header']

export default async function Marina({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-green relative">
            <div className="flex flex-col w-full items-center">
                <HeaderItem v={"v2"} />
                <h2 className='italictiempos_title'>{t('marina:title')}</h2>
                <span className="welcome_description px-10">
                    {t('marina:description')}
                </span>
                <InfoDisplay collection={"marina"} />
                <div className='info_container'>
                    <span className="welcome_description">
                    {t('marina:contact1')} <a href="https://wa.me/5016292736">+501 629 2736</a>
                    </span>
                    <span className="welcome_description">
                        {t('marina:contact2')}
                    </span>
                </div>
            </div>
            <FooterItem transparent/>
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}