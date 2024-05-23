import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import PageWrapper from '@/components/PageWrapper';
import PhotoGallery from '@/components/PhotoGallery';

export const metadata: Metadata = {
  title: 'Tetiana Andronenko',
  description: 'Tetiana Andronenko - model from Ukraine.',
  keywords:
    'model, photo model, model agency, models over 30, fashion model, beautiful models, beautiful model.',
};

export default function Home() {
  const t = useTranslations('Index');
  return (
    <>
      <PageWrapper>
        <PhotoGallery />
      </PageWrapper>
    </>
  );
}
