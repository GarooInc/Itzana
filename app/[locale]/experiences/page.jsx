import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import ExperiencesItem from '@/components/ExperiencesItem/ExperiencesItem'
import ArrowBack from '@/components/ArrowBack/ArrowBack'


const namespaces = ['experiences', 'header']

export default async function Experiences({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white py-20 md:px-20 px-10">
            <ArrowBack absolute/>
            <div className='flex flex-col justify-center items-center'>
                <img src="/assets/images/logo_v1.png" alt="logo" className="w-[150px]" />
                <h1 className="principal_title">Experiences</h1>
            </div>
            <ExperiencesItem />
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}