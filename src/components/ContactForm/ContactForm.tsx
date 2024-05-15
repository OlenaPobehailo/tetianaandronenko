'use client'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import css from './ContactForm.module.css'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <Formik
            initialValues={{
                subject: '',
                name: '',
                email: '',
                message: '',
            }}
            validationSchema={Yup.object({
                subject: Yup.string().required('Please enter subject'),
                name: Yup.string().required('Please enter your name'),
                email: Yup.string()
                    .email('Please enter correct email address')
                    .required('Please enter your email'),
                message: Yup.string().required('Please enter your message'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    const mailToLink = `mailto:tetiana.andronenko@gmail.com?subject=${encodeURIComponent(values.subject)}&body=Name: ${values.name}%0D%0AEmail: ${values.email}%0D%0ASubject: ${values.subject}%0D%0AMessage: ${values.message}`
                    window.location.href = mailToLink
                    setSubmitting(false)
                }, 400)
            }}
        >
            {({ isSubmitting }) => (
                <div className={css.formWrapper}>
                    <Form>
                        <div className={css.allFieldsWrapper}>

                        <div className={css.fieldWrapper}>
                            <label htmlFor="name">Your name:</label>
                            <Field
                                className={css.input}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name:"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className={css.error}
                            />
                        </div>

                        <div className={css.fieldWrapper}>
                            <label htmlFor="email">Your email:</label>
                            <Field
                                className={css.input}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your email:"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className={css.error}
                            />
                        </div>

                        <div className={css.fieldWrapper}>
                            <label htmlFor="subject">Subject:</label>
                            <Field
                                className={css.input}
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject:"
                            />
                            <ErrorMessage
                                name="subject"
                                component="div"
                                className={css.error}
                            />
                        </div>

                        <div className={css.fieldWrapper}>
                            <label htmlFor="message">Your message:</label>
                            <Field
                                className={css.input}
                                as="textarea"
                                id="message"
                                name="message"
                                placeholder="Your message:"
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
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default ContactForm
