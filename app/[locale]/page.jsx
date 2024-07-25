import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import Input from '@/components/Input/Input';


const namespaces = ['room', 'header'];
export default async function Home({ params: { locale }}) {
  const { t, resources } = await initTranslations(locale, namespaces)
  return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
      <main className="page">
        <div className="flex flex-col w-full h-screen">
          <div className='bg-light-brown w-full flex justify-center items-center h-1/2'>
            <img src="/assets/images/logo_v1.png" alt="logo" className="w-[150px]" />
          </div>
          <div className='bg-white w-full h-1/2 flex flex-col justify-start items-center py-10'>
            <span className="text-2xl text-lightgray w-full text-center">{t('room:form_title')}</span>
            <div className="w-full flex flex-col items-center gap-2 pt-10">
              <Input text={t('room:form_input1')} />
              <Input text={t('room:form_input2')} />
            </div>
          </div>
        </div>
      </main>
    <LanguageSwitcher />
    </TranslationsProvider>
  );
}
