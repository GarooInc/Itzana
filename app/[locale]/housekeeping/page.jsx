import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import InfoDisplay from '@/components/InfoDisplay/InfoDisplay'

const namespaces = ['home', 'header']

export default async function HouseKeeping({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-green">
            <HeaderItem v={"v5"} />
            <h2 className='italictiempos_title'>{t('home:nav3')}</h2>
            <InfoDisplay collection="Housekeeping" />
        </div>
        <LanguageSwitcher />
        </TranslationsProvider>
    );
}