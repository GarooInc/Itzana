import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import ArrowBack from '@/components/ArrowBack/ArrowBack'
import FooterCart from '@/components/FooterCart/FooterCart'
import Image from 'next/image'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import TabCartItem from '@/components/TabCartItem/TabCartItem'
import TripAdvisorEmbed from '@/components/TripAdvisorEmbed/TripAdvisorEmbed'


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
                <div className='flex flex-col py-4 justify-center items-center md:w-3/4 gap-10'>
                    <Image src="/assets/images/adventures/jaime.png" alt="line" width={800} height={500} className='md:w-60 w-40 object-cover' />
                    <div className='flex flex-col gap-2'>
                        <span className="tiempos_description">
                            {t('adventures:text1')}
                        </span>
                        <span className="tiempos_description">
                            {t('adventures:text2')}
                        </span>
                        <Image src="/assets/images/adventures/firma.png" alt="adventures" width={800} height={500} className='w-20 h-20' />
                    </div>
                </div>
            </div>
            <LanguageSwitcher />
            <TabCartItem collection={"adventures"} />
            <span className="font-futura text-lg text-black py-2">{t('adventures:text3')}</span>
            <TripAdvisorEmbed />
            <FooterCart />
        </div>
    </TranslationsProvider>
  )
}