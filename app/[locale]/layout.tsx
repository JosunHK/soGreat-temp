import {NextIntlClientProvider} from 'next-intl';
import '#/styles/globals.css';
import { AddressBar } from '#/ui/address-bar';
import Byline from '#/ui/byline';
import { GlobalNav } from '#/ui/global-nav';
import { Metadata } from 'next';
import { TopNav } from '#/ui/top-nav';
import {notFound} from 'next/navigation';
import { ThemeProvider } from "#/ui/theme-provider"
 
 
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'de'}];
}
 
export default async function LocaleLayout({children, params: {locale}} : {children: any, params : any}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body className='bg-off-white dark:bg-charcoal'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TopNav />
          {/* {children} */}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}