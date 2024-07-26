import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import ExperiencesItem from '@/components/ExperiencesItem/ExperiencesItem'


const namespaces = ['experiences', 'header']

export default async function Experiences({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white py-20 md:px-20 px-10">
            <div className='flex flex-col justify-center items-center'>
                <img src="/assets/images/logo_v3.png" alt="logo" className="w-[100px]" />
                <h1 className="text-4xl text-center text-oxblood font-futura font-bold">Experiences</h1>
            </div>
            <div className="flex justify-between w-full">
                <div className="filters">
                    <div className="text_filter">Browse by feature</div>
                </div>
                <div className="filters">
                    <div className="text_filter">Room #112</div>
                </div>
            </div>
            <ExperiencesItem />
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}