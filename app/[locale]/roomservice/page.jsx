import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import { FaShoppingCart } from "react-icons/fa"
import Menu from '@/components/Menu/Menu'
import { TbHome } from "react-icons/tb"
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2"
import ArrowBack from '@/components/ArrowBack/ArrowBack'


const namespaces = ['room-service', 'header']

export default async function RoomService({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)



    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <main className="page bg-white py-20 px-10">
            <div className='flex justify-between items-center w-full py-4'>
                <ArrowBack />
                <div className='flex justify-center items-center gap-4'>
                    <img src="/assets/images/logo_v2.png" alt="logo" className="w-[100px]" />
                </div>
                <a href="/cart" className="flex justify-center items-center gap-4">
                <FaShoppingCart className="text-3xl text-lightgray" />
                </a>
            </div>
            <Menu />
            <div className="md:w-[40%] w-[90%] h-20 bg-white rounded-tl-2xl rounded-tr-2xl shadow-2xl border-black fixed bottom-0 flex justify-evenly" >
                <div className="flex justify-center items-center gap-4 flex-col">
                    <TbHome className="text-3xl text-lightgray" />
                    <p className="text-xs text-lightgray font-futura">Home</p>
                </div>
                <div className="flex justify-center items-center gap-4 flex-col">
                    <HiOutlineChatBubbleBottomCenterText className="text-3xl text-lightgray" />
                    <p className="text-xs text-lightgray font-futura">Chat</p>
                </div>
            </div>
        </main>
        <LanguageSwitcher />
        </TranslationsProvider>
    );
    }