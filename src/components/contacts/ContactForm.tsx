'use client'

import { FC, FormEvent, useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import MoonLoader from 'react-spinners/MoonLoader'
import { IContactFormDataDto } from '@/interfaces/interfaces'

interface ContactFormProps {
  onSubmit: (formData: IContactFormDataDto) => Promise<boolean>
  isSubmitting: boolean
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit, isSubmitting }) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {}, [isSubmitting])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData: IContactFormDataDto = {
      firstname,
      lastname,
      email,
      phone,
      message,
    }

    const success = await onSubmit(formData)

    if (!success) return

    setFirstname('')
    setLastname('')
    setEmail('')
    setPhone('')
    setMessage('')
  }

  return (
    <div className="xl:w-[54%] order-2 xl:order-none">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-10 bg-[#27272C] rounded-xl"
      >
        <h3 className="text-4xl text-accent">
          Let&apos;s connect or share your feedback
        </h3>
        <p className="text-white/60">
          Whether you have a project to collaborate on, or just want to share
          some feedback, feel free to send a message. I&apos;d love to hear from
          you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            className={cn(
              firstname ? 'focus:border-accent' : 'focus:border-red-300',
            )}
            isRequired
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            name="firstname"
            placeholder="Firstname"
          />
          <Input
            className={cn(
              lastname ? 'focus:border-accent' : 'focus:border-red-300',
            )}
            isRequired
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            name="lastname"
            placeholder="Lastname"
          />
          <Input
            className={cn(
              email ? 'focus:border-accent' : 'focus:border-red-300',
            )}
            isRequired
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email address"
          />
          <Input
            className={cn(
              phone ? 'focus:border-accent' : 'focus:border-red-300',
            )}
            isRequired
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            name="phone"
            placeholder="Phone number"
          />
        </div>

        <Textarea
          className={cn(
            'h-[200px] outline-none',
            message ? 'focus:border-accent' : 'focus:border-red-300 ',
          )}
          isRequired
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
        />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <Button
            type="submit"
            size="md"
            className="max-w-40 disabled:bg-white/60 max-sm:mb-[20px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex justify-center items-center">
                <span className="mr-[10px]">Sending...</span>
                <MoonLoader size={14} color={'#1C1C22'} speedMultiplier={1} />
              </div>
            ) : (
              'Send message'
            )}
          </Button>
          <p className="text-center text-white/60">
            All fields are required<sup className="text-red-300"> *</sup>
          </p>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
