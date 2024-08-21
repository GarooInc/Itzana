import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import HeaderItem from '@/components/HeaderItem/HeaderItem'
import TvItem from '@/components/TvItem/TvItem'


const namespaces = ['tv', 'header']

export default async function TV({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className="page bg-white">
            <div className="flex flex-col w-full h-screen items-center">
                <HeaderItem v={"v5"} />
                    <div className="w-full  bg-cream rounded-lg shadow p-10 mt-10 font-futura text-black text-center flex flex-col justify-center items-center gap-4">
                    <h2 className='italictiempos_title'>TV Guide</h2>
                    <span className='md:w-1/3 tiempos_description'>
                        Find ocean-view rooms, eclectic cuisine, and sparkling pools along the Caribbean Sea. Explore our all-inclusive resort ahead of your stay and
                        imagine what&apos;s possible.
                    </span>
                </div>
                <TvItem />
            </div>
        </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}