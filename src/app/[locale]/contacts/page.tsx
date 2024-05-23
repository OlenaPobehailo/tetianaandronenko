import { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import ContactForm from '@/components/ContactForm';

export interface IPageProps {}

export const metadata: Metadata = {
  title: 'Tetiana Andronenko - Contacts',
  description: '',
};

export default function Page(props: IPageProps) {
  return (
    <PageWrapper>
      <ContactForm />
    </PageWrapper>
  );
}
