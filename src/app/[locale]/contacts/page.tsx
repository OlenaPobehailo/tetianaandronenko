import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PageWrapper from '@/components/PageWrapper';
import ContactForm from '@/components/ContactForm';

export interface IPageProps {}

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('ContactsMetaData');
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
};

export default function Page(props: IPageProps) {
  return (
    <PageWrapper>
      <ContactForm />
    </PageWrapper>
  );
}
