'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslations } from 'next-intl';
import { validationSchema } from '@/validation/validationSchema';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const t = useTranslations('Contacts');

  return (
    <Formik
      initialValues={{
        subject: '',
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={validationSchema(t)}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const mailToLink = `mailto:tetiana.andronenko@gmail.com?subject=${encodeURIComponent(values.subject)}&body=Name: ${values.name}%0D%0AEmail: ${values.email}%0D%0ASubject: ${values.subject}%0D%0AMessage: ${values.message}`;
          window.location.href = mailToLink;
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <div className={css.formWrapper}>
          <Form>
            <div className={css.allFieldsWrapper}>
              <div className={css.fieldWrapper}>
                <label htmlFor="name">{t('name')}</label>
                <Field
                  className={css.input}
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('name')}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.error}
                />
              </div>

              <div className={css.fieldWrapper}>
                <label htmlFor="email">{t('email')}</label>
                <Field
                  className={css.input}
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('email')}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.error}
                />
              </div>

              <div className={css.fieldWrapper}>
                <label htmlFor="subject">{t('subject')}</label>
                <Field
                  className={css.input}
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={t('subject')}
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className={css.error}
                />
              </div>

              <div className={css.fieldWrapper}>
                <label htmlFor="message">{t('message')}</label>
                <Field
                  className={css.input}
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder={t('message')}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className={css.error}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={css.submitButton}
            >
              {isSubmitting ? t('sending') : t('send')}
            </button>
            <p className={css.mail}>tetiana.andronenko@gmail.com</p>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
