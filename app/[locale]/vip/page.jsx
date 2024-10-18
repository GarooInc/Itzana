import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import AdventuresVip from '@/components/AdventuresVip/AdventuresVip'
import ArrowBack from '@/components/ArrowBack/ArrowBack'
import FooterCart from '@/components/FooterCart/FooterCart'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'


const namespaces = ['vip', 'home']

export default async function Adventures({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white md:px-20 px-10 relative">
            <ArrowBack absolute/>
            <div className='flex flex-col justify-center items-center'>
                <img src="/assets/images/logo_v1.png" alt="logo" className="w-[150px]" />
                <h1 className="italictiempos_title">{t('vip:title')}</h1>
                <span className="tiempos_description py-4">
                    {t('vip:text')}
                </span>
            </div>
            <LanguageSwitcher />
            <AdventuresVip />
            <FooterCart />
        </div>
    </TranslationsProvider>
  )
}