'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '@/components/contacts/ContactForm'
import ContactsList from '@/components/contacts/ContactsList'

const Contacts: FC = () => {
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
          <ContactForm />

          <ContactsList />
        </div>
      </div>
    </motion.section>
  )
}

export default Contacts
