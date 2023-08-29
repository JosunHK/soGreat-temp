import { NextIntlClientProvider } from 'next-intl';
import '#/styles/globals.css';
import { TopNav } from '#/ui/nav/top-nav';
import { notFound } from 'next/navigation';
import { ThemeProvider } from "#/ui/theme-provider"
 
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'tc'}];
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
          {/* child from the original template, for testing only*/}
          <div className="w-[50%]">
            {children}
          </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}