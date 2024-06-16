import * as Yup from 'yup';

type TranslationFunction = (key: string) => string;

export const validationSchema = (t: TranslationFunction) =>
  Yup.object({
    name: Yup.string().required(t('nameError')),
    email: Yup.string().email(t('emailIncorrect')).required(t('emailError')),
    subject: Yup.string().required(t('subjectError')),
    message: Yup.string().required(t('messageError')),
  });
