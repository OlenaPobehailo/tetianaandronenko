import { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import About from '@/components/About';

export interface IPageProps {}

export const metadata: Metadata = {
  title: 'About Tetiana Andronenko',
  description: '',
};

export default function Page(props: IPageProps) {
  return (
    <PageWrapper>
      <About />
    </PageWrapper>
  );
}
