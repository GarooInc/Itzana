import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import ButtonNav from '@/components/ButtonNav/ButtonNav'
import ChatBubble from '@/components/ChatBubble/ChatBubble'

const namespaces = ['home', 'header']

export default async function Home({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)
    const nav = [
        {
            title: t('home:nav1'),
            link: '/welcome'
        },
        {
            title: t('home:nav2'),
            link: '/experiences'
        },
        {
            title: t('home:nav3'),
            link: '/roomservice'
        },
        {
            title: "Activities",
            link: '/activities'
        },
        {
            title: "TV Guide",
            link: '/tv'
        }
    ]

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <main className="page bg-white py-20">
            <div className='flex flex-col justify-center items-center'>
                <img src="/assets/images/logo_v3.png" alt="logo" className="w-[100px]" />
                <h1 className="principal_title">Fam</h1>
                <div className="flex flex-col justify-center items-center gap-4 pt-10">
                    {
                        nav.map((item, index) => (
                            <ButtonNav key={index} title={item.title} link={item.link} />
                        ))
                    }
                </div>
            </div>
            <ChatBubble />
        </main>
        <LanguageSwitcher />
        </TranslationsProvider>
    );
    }