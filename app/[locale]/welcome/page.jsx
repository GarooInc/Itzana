import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import ArrowBack from '@/components/ArrowBack/ArrowBack'
import Carousel from '@/components/Carousel/Carousel'
import ChatBubble from '@/components/ChatBubble/ChatBubble'



const namespaces = ['welcome', 'header']

export default async function Welcome({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)
    const images = []

    //lista de imagenes que estan en la carpeta public/assets/images/welcome
    for (let i = 2; i < 9; i++) {
        images.push(`/assets/images/welcome/welcome${i}.jpg`)
    }

return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
    <div className="page">
        <div className="flex flex-col w-full h-screen">
            <div className='bg-light-brown w-full flex justify-center items-center h-1/5 relative'>
                <ArrowBack absolute/>
                <img src="/assets/images/logo_v1.png" alt="logo" className="w-[150px]" />
            </div>
            <div className="w-full md:h-3/5">
                <Carousel images={images} />
            </div>
            <div className='flex flex-col justify-center items-center w-full h-full bg-white px-10 md:p-14'>
                <h1 className="text-xl md:text-2xl text-center text-oxblood font-futura font-bold m-2">WELCOME TO ITZ&#39;ANA RESORT &amp; RESIDENCES</h1>
                <p className="text-center md:text-xl text-md  text-darkgray font-futura font-bold">A Luxury Oasis on the Caribbean Sea</p>
                <span className="text-center text-darkgray font-futura-light my-4">
                    Escape the ordinary to a breathtaking destination on the Belize coast, where the emerald colors
                    of the Caribbean Sea and the rhythm of the Mayan jungle create an oasis of relaxation and
                    adventure. Relax on the white sand beach. Enjoy local cuisine fresh from the garden. Renew
                    your senses with a spa treatment overlooking the ocean. Discover the tranquillity and cultural
                    spirit of our Placencia resort, where the reef meets the rainforest. Life imitates luxury at Itz&#39;ana.
                </span>
            </div>
        </div>
        <ChatBubble />
      </div>
        <LanguageSwitcher />
    </TranslationsProvider>
  )
}