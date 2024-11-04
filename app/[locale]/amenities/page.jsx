import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import AmenitiesItem from '@/components/AmenitiesItem/AmenitiesItem'
import HeaderItem from '@/components/HeaderItem/HeaderItem'


const namespaces = ['amenities', 'header']

export default async function Amenities({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <HeaderItem v={"v5"} />
        <div className="page bg-white py-10 md:px-20 px-10">
            <h1 className="principal_title">{t('amenities:title')}</h1>
            <AmenitiesItem />
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}