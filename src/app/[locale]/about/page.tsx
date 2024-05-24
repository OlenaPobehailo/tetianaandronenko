import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PageWrapper from '@/components/PageWrapper';
import About from '@/components/About';

export interface IPageProps {}

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('AboutMetaData');
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
};

export default function Page(props: IPageProps) {
  return (
    <PageWrapper>
      <About />
    </PageWrapper>
  );
}
