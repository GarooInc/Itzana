import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import ButtonNav from '@/components/ButtonNav/ButtonNav'
import ChatBubble from '@/components/ChatBubble/ChatBubble'
import { HiInformationCircle } from "react-icons/hi2"

const namespaces = ['home', 'header','general']

export default async function Menu({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)
    const nav = [
        {
            title: t('home:nav1'),
            link: '/welcome',
            icon: '/assets/images/icons_menu/WELCOME.png'
        },
        {
            title: t('home:nav2'),
            link: '/frontdesk',
            icon: '/assets/images/icons_menu/RECEPTION.png'
        },
        {
            title: t('home:nav3'),
            link: '/housekeeping',
            icon: '/assets/images/icons_menu/HOUSEKEEPER.png'
        },
        {
            title: t('home:nav5'),
            link: '/food_drinks',
            icon: '/assets/images/icons_menu/FOODANDDRINKS.png'
        },
        {
            title: t('home:nav8'),
            link: '/roomservice',
            icon: '/assets/images/icons_menu/ROOMSERVICE.png'
        },
        {
            title: t('home:nav14'),
            link: '/resort-services',
            icon: '/assets/images/icons_menu/RESORTSERVICES.png'
        },
        {
            title: t('home:nav4'),
            link: '/amenities',
            icon: '/assets/images/icons_menu/AMENITIES.png'
        },
        {
            title: t('home:nav7'),
            link: '/adventures',
            icon: '/assets/images/icons_menu/ADVENTURES.png'
        },
        {
            title: t('home:nav12'),
            link: '/vip',
            icon: '/assets/images/icons_menu/VIP.png'
        },
        {
            title: t('home:nav6'),
            link: '/activities',
            icon: '/assets/images/icons_menu/ACTIVITIES.png'
        },
        {
            title: t('home:nav13'),
            link: '/marina',
            icon: '/assets/images/icons_menu/MARINA.png'
        },
        {
            title: t('home:nav10'),
            link: '/emergency',
            icon: '/assets/images/icons_menu/EMERGENCY.png'
        },
        {
            title: t('home:nav17'),
            link: '/music',
            icon: '/assets/images/icons_menu/MUSIC.png'
        },
        {
            title: t('home:nav18'),
            link: 'https://www.tripadvisor.com/Hotel_Review-g291977-d12844316-Reviews-Itz_ana_Belize_Resort_Residences-Placencia_Stann_Creek.html',
            icon: '/assets/images/icons_menu/TRIP.png'
        },
        {
            title: t('home:nav19'),
            link: '/social-media',
            icon: '/assets/images/icons_menu/MEDIA.png'
        }
    ]

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <main className="page bg-green pt-10 pb-20 md:py-10 background">
            <div className='flex flex-col justify-center items-center'>
                <img src="/assets/images/logo_v6.png" alt="logo" className="w-[150px]" />
                <div className="flex flex-col justify-center items-center gap-4 py-10">
                    {
                        nav.map((item, index) => (
                            <ButtonNav key={index} title={item.title} link={item.link} icon={item.icon} />
                        ))
                    }
                </div>
            </div>
            <ChatBubble text={t('general:chat_bubble')} />
        </main>
        <LanguageSwitcher />
        <a href='https://garooinc.com/' className="fixed top-10 left-10">
            <HiInformationCircle className="info-icon text-4xl text-cream" />
        </a>
        </TranslationsProvider>
    );
}