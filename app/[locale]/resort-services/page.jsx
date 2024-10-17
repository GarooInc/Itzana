import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import FooterItem from '@/components/FooterItem/FooterItem'
import ServicesItem from '@/components/ServicesItem/ServicesItem'

const namespaces = ['resort-services', 'header']

export default async function ResortServices({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-green relative pb-10">
            <div className="flex flex-col w-full items-center">
                <HeaderItem v={"v2"} />
                <h2 className='italictiempos_title'>{t('resort-services:title')}</h2>
                <ServicesItem/>
            </div>
            <FooterItem transparent/>
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}