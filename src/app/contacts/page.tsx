'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '@/components/contacts/ContactForm'
import ContactsList from '@/components/contacts/ContactsList'

export interface ContactFormData {
  firstname: string
  lastname: string
  email: string
  phone: string
  service: string
  message: string
}

const Contacts: FC = () => {
  const onSubmit = async (formData: ContactFormData) => {
    console.log('formData :>> ', formData)
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log('Message sent!')
      }
      // else {
      // console.log('Failed to send message.')
      // }
    } catch (error) {
      console.log('Something went wrong.')
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
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <ContactForm onSubmit={onSubmit} />

          <ContactsList />
        </div>
      </div>
    </motion.section>
  )
}

export default Contacts
