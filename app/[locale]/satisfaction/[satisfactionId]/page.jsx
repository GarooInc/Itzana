"use client";
import React, { useState, useEffect } from 'react'
import TranslationsProvider from '@/components/TranslationsProvider'
import initTranslations from '@/app/i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';

const namespaces = ['satisfaction', 'header'];
export default function Satisfaction({ params: { locale, satisfactionId }}) {
    const [translations, setTranslations] = useState({ t: () => '', resources: {} });
    const [rating, setRating] = useState(0);


    useEffect(() => {
      const loadTranslations = async () => {
        const { t, resources } = await initTranslations(locale, namespaces);
        setTranslations({ t, resources });
      };
      loadTranslations();
    }, [locale]);
  
    const { t, resources } = translations;


  return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <form className="flex flex-col items-center justify-center min-h-screen" style={{backgroundImage: `url(/assets/images/patron.png)`, backgroundSize: 'cover'}}>
            <div className='bg-white bg-opacity-90 p-10 rounded shadow-md flex flex-col items-center'>
                <img src='/assets/images/logo_v5.png' alt='Logo' className='w-32 mb-4' />
                <div className='text-center mb-6 flex flex-col'>
                    <h2 className="text-2xl font-bold mb-2 text-black">{t('satisfaction:title')}</h2>
                    <span className="text-gray-700">{t('satisfaction:desc')}</span>
                </div>
                <div className="flex space-x-4 mb-4 rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <input
                        key={star}
                        type="radio"
                        name="rating-1"
                        className={`mask mask-star-2  ${star <= rating ? 'bg-yellow-400' : 'bg-gray-600'} hover:bg-yellow-600`}
                        aria-label={`${star} star`}
                        onChange={() => setRating(star)}
                    />
                    ))}
                </div>
                <button
                    type="submit"
                    className="mt-4 mx-4 w-full py-2 bg-[#28433a] text-white rounded-full hover:bg-[#3e5d52] cursor-pointer disabled:opacity-50"
                    disabled={rating === 0}
                >
                    {t('satisfaction:btn')}
                </button>
            </div>
        </form>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}