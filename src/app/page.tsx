import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import PhotoGallery from '@/components/PhotoGallery';

export const metadata: Metadata = {
  title: 'Tetiana Andronenko',
  description: 'Tetiana Andronenko - model from Ukraine.',
  keywords:
    'model, photo model, model agency, models over 30, fashion model, beautiful models, beautiful model.',
};

export default function Home() {
  return (
    <>
      <PageWrapper>
        <PhotoGallery />
      </PageWrapper>
    </>
  );
}
