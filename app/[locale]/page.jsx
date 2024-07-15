import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'


const namespaces = ['room', 'header'];
export default async function Home({ params: { locale }}) {
  const { t, resources } = await initTranslations(locale, namespaces)
  return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">{t('room:form_title')}</h1>
      </main>
    <LanguageSwitcher />
    </TranslationsProvider>
  );
}
