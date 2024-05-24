import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PageWrapper from '@/components/PageWrapper';
import PhotoGallery from '@/components/PhotoGallery';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('HomeMetaData');
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
};

export default function Home() {
  return (
    <PageWrapper>
      <PhotoGallery />
    </PageWrapper>
  );
}
