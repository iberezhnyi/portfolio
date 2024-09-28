'use client'

import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '@/components/contacts/ContactForm'
import ContactsList from '@/components/contacts/ContactsList'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { IContactFormDataDto } from '@/interfaces/interfaces'
import { fetchMail } from '@/lib/fetchMail'
import { useSnackbar } from 'notistack'
import * as Yup from 'yup'
import { validationSchema } from '@/lib/validationSchema'

const Contacts: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const onSubmit = async (formData: IContactFormDataDto): Promise<boolean> => {
    try {
      setIsSubmitting(true)

      await validationSchema.validate(formData, { abortEarly: false })

      const { attempt } = await fetchMail(formData)

      console.log('attempt :>> ', attempt)

      if (attempt) {
        enqueueSnackbar('Your message has been successfully sent!', {
          variant: 'success',
        })
        return true
      } else {
        enqueueSnackbar('Error sending message.', { variant: 'error' })
        return false
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          enqueueSnackbar(err.message, { variant: 'error' })
        })

        console.log('error :>> ', error)
      }

      console.log('error :>> ', error)
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <VisuallyHidden>
          <h1>Get in Touch for Collaboration or Feedback</h1>
        </VisuallyHidden>

        <div className="flex flex-col xl:flex-row gap-[30px]">
          <ContactForm onSubmit={onSubmit} isSubmitting={isSubmitting} />

          <ContactsList />
        </div>
      </div>
    </motion.section>
  )
}

export default Contacts
