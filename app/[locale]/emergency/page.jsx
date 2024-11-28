import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import InfoDisplay from '@/components/InfoDisplay/InfoDisplay'
import PhoneItem from '@/components/PhoneItem/PhoneItem'
import FooterItem from '@/components/FooterItem/FooterItem'

const namespaces = ['home', 'emergency']

export default async function Emergency({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-green">
            <HeaderItem v={"v5"} />
            <div className='info_container'>
                <h2 className='italictiempos_title'>{t('emergency:title1')}</h2>
                <InfoDisplay collection="Emergency" />
                <h2 className='italictiempos_title'>{t('emergency:title2')}</h2>
                <div className='w-full flex md:flex-row flex-col md:justify-center justify-start items-center md:w-3/4 md:p-10 md:mx-0 mx-auto pb-10'>
                    <div className='flex flex-col justify-start items-center md:h-48 md:w-full w-48'>
                        <PhoneItem name={t('emergency:contact1')} p1="+501 523-2435;" p2="+501 610-1329" link1="tel:+5015232435" link2="tel:+5016101329" />
                        <PhoneItem name={t('emergency:contact2')} p1="+501 503-3142" link1="tel:+5015033142" />
                    </div>
                    <div className='flex flex-col justify-start items-center md:h-48 md:w-full w-48'>
                        <PhoneItem name={t('emergency:contact3')} p1="+501 503-3022" link1="tel:+5015033022" />
                        <PhoneItem name={t('emergency:contact4')} p1="+501 523- 3328" link1="tel:+5015233328" />
                    </div>
                </div>
                <FooterItem  transparent/>
            </div>
        </div>
        <LanguageSwitcher />
        </TranslationsProvider>
    );
}