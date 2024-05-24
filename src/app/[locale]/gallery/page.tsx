import { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import PhotoGallery from '@/components/PhotoGallery';
import { getTranslations } from 'next-intl/server';

export interface IPageProps {}

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('GalleryMetaData');
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
};

export default function Page(props: IPageProps) {
  return (
    <>
      <PageWrapper>
        <PhotoGallery />
      </PageWrapper>
    </>
  );
}
