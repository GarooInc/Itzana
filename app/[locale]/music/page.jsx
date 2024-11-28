import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import FooterItem from '@/components/FooterItem/FooterItem'
import ButtonNav from '@/components/ButtonNav/ButtonNav'

const namespaces = ['home', 'music']

export default async function Music({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-green relative">
            <HeaderItem v={"v5"} />
            <div className='info_container'>
                <h2 className='italictiempos_title'>{t('music:title')}</h2>
                <div className='md:w-1/2 w-full flex justify-center items-center p-10'>
                    <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/10SjAr9c0VciBLWsEOXw3R?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <ButtonNav title={t('music:playlists')} link="https://open.spotify.com/user/31bt7tjjtwyhemq7hwf7kourkl2m" />
            </div>
            <FooterItem  transparent/>
        </div>
        <LanguageSwitcher />
        </TranslationsProvider>
    );
}