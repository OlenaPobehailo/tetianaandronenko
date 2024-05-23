import { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import PhotoGallery from '@/components/PhotoGallery';

export interface IPageProps {}

export const metadata: Metadata = {
  title: 'Tetiana Andronenko - Gallery',
  description: '',
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
