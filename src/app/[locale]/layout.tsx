import { NextIntlClientProvider, useMessages } from 'next-intl';
import Container from '@/components/Container';
import Header from '@/components/Header/Header';
import '../globals.css';

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: any };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Container>
            <Header />
            <main>{children}</main>
          </Container>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
