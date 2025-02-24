import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import ArrowBack from '@/components/ArrowBack/ArrowBack'
import FooterCart from '@/components/FooterCart/FooterCart'
import Image from 'next/image'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import TabCartItem from '@/components/TabCartItem/TabCartItem'


const namespaces = ['adventures', 'header']

export default async function Adventures({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white md:px-20 px-10 relative pb-40">
            <ArrowBack absolute/>
            <div className='flex flex-col justify-center items-center'>
                <img src="/assets/images/logo_v1.png" alt="logo" className="w-[150px]" />
                <h1 className="italictiempos_title">{t('adventures:title')}</h1>
            </div>
            <LanguageSwitcher />
            <TabCartItem collection={"adventures"} type={"Aventura"} />
            <span className="font-futura text-lg text-black py-2">{t('adventures:text3')}</span>
            <FooterCart />
        </div>
    </TranslationsProvider>
  )
}