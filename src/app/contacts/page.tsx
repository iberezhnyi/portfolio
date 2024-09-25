'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '@/components/contacts/ContactForm'
import ContactsList from '@/components/contacts/ContactsList'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

export interface ContactFormData {
  firstname: string
  lastname: string
  email: string
  phone: string
  // service: string
  message: string
}

const Contacts: FC = () => {
  const onSubmit = async (formData: ContactFormData): Promise<boolean> => {
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      // if (response.ok) {
      //   return true
      // } else {
      //   return false
      // }

      return Boolean(response.ok)
    } catch (error) {
      console.error('Something went wrong:', error)

      return false
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
          <h1>Reach Out for Collaboration</h1>
        </VisuallyHidden>

        <div className="flex flex-col xl:flex-row gap-[30px]">
          <ContactForm onSubmit={onSubmit} />

          <ContactsList />
        </div>
      </div>
    </motion.section>
  )
}

export default Contacts
