import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import InfoDisplay from '@/components/InfoDisplay/InfoDisplay'
import { FaWhatsapp, FaPhone, FaClock, FaWifi } from "react-icons/fa"
import FooterItem from '@/components/FooterItem/FooterItem'

const namespaces = ['home', 'header','general']

export default async function FrontDesk({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-green">
            <HeaderItem v={"v5"} />
            <div className='info_container'>
                <h2 className='italictiempos_title'>{t('home:nav2')}</h2>
                    <div className="bg-cream md:p-10 p-8 rounded-lg font-serif flex flex-col md:gap-8 gap-4">
                        <div className='flex md:flex-row flex-col md:items-center justify-start gap-4'>
                            <div className="flex items-center">
                                <FaWhatsapp className="mr-2 text-green text-2xl" />
                                <a href="https://wa.link/ek6xjb" className="md:text-lg text-gray-700">{t('general:front_desk_0')}</a>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="mr-2 text-green text-2xl" />
                                <span className="md:text-lg text-gray-700">{t('general:front_desk_1')}</span>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col items-start gap-4">
                            <div className="flex items-center">
                                <FaWifi className="mr-2 text-green text-2xl" />
                                <span className="md:text-lg text-gray-700">{t('general:front_desk_2')}</span>
                            </div>
                            <div className="flex items-center">
                                <FaWifi className="mr-2 text-green text-2xl" />
                                <span className="md:text-lg text-gray-700">{t('general:front_desk_3')}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaClock className="mr-2 text-green text-2xl" />
                            <span className="md:text-lg text-gray-700">{t('general:front_desk_4')}</span>
                        </div>
                    </div>
                <InfoDisplay collection="Front_Desk" />
                <FooterItem  transparent/>
            </div>
        </div>
        <LanguageSwitcher />
        </TranslationsProvider>
    );
}