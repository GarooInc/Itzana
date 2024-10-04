import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import InfoDisplay from '@/components/InfoDisplay/InfoDisplay'
import { FaWhatsapp, FaPhone, FaClock, FaWifi } from "react-icons/fa"
import FooterItem from '@/components/FooterItem/FooterItem'

const namespaces = ['home', 'header']

export default async function FrontDesk({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-green">
            <HeaderItem v={"v5"} />
            <div className='info_container'>
                <h2 className='italictiempos_title'>{t('home:nav2')}</h2>
                    <div className="bg-cream p-6 rounded-lg font-serif flex flex-col gap-4 mx-10">
                        <div className='flex md:flex-row flex-col items-center gap-4'>
                            <div className="flex items-center mt-6">
                                <FaWhatsapp className="mr-2 text-green text-2xl" />
                                <a href="https://wa.link/ek6xjb" className="md:text-lg text-gray-700">WhatsApp: +501 610 1329</a>
                            </div>
                            <div className="flex items-center mt-4">
                                <FaPhone className="mr-2 text-green text-2xl" />
                                <span className="md:text-lg text-gray-700">Extension: Dial Ext #1000</span>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col items-center mt-4 gap-4">
                            <div className="flex items-center mt-4">
                                <FaWifi className="mr-2 text-green text-2xl" />
                                <span className="md:text-lg text-gray-700">Wi-Fi Network: ItzanaGuest</span>
                            </div>
                            <div className="flex items-center mt-4">
                                <FaWifi className="mr-2 text-green text-2xl" />
                                <span className="md:text-lg text-gray-700">Wi-Fi Password: Itzana123</span>
                            </div>
                        </div>

                        <div className="flex items-center mt-4">
                            <FaClock className="mr-2 text-green text-2xl" />
                            <span className="md:text-lg text-gray-700">Hours: From 6:00 am to 10:00 pm</span>
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