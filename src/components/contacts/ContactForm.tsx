'use client'

import { FC, FormEvent, useState } from 'react'
import { Input } from '@/components/ui/input'
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ContactFormData } from '@/app/contacts/page'
import { useSnackbar } from 'notistack'
import { cn } from '@/lib/utils'
import MoonLoader from 'react-spinners/MoonLoader'

interface ContactFormProps {
  onSubmit: (formData: ContactFormData) => Promise<boolean>
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  // const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsSubmitting(true)

    const success = await onSubmit({
      firstname,
      lastname,
      email,
      phone,
      // service,
      message,
    })

    if (success) {
      enqueueSnackbar('Your message has been successfully sent!', {
        variant: 'success',
      })

      setFirstname('')
      setLastname('')
      setEmail('')
      setPhone('')
      // setService('')
      setMessage('')

      setIsSubmitting(false)
    } else {
      enqueueSnackbar('Error sending message.', { variant: 'error' })

      setIsSubmitting(false)
    }
  }

  return (
    <div className="xl:w-[54%] order-2 xl:order-none">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-10 bg-[#27272C] rounded-xl"
      >
        <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
        <p className="text-white/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          voluptates harum sapiente nihil facilis!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            className={cn(
              firstname ? 'focus:border-accent' : 'focus:border-red-300',
            )}
            isRequired
            value={firstname.trim()}
            onChange={(e) => setFirstname(e.target.value)}
            type="firstname"
            placeholder="Firstname"
          />
          <Input
            className={cn(
              lastname ? 'focus:border-accent' : 'focus:border-red-300',
            )}
            isRequired
            value={lastname.trim()}
            onChange={(e) => setLastname(e.target.value)}
            type="lastname"
            placeholder="Lastname"
          />
          <Input
            className={cn(
              email ? 'focus:border-accent' : 'focus:border-red-300',
            )}
            isRequired
            value={email.trim()}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email address"
          />
          <Input
            className={cn(
              phone ? 'focus:border-accent' : 'focus:border-red-300',
            )}
            isRequired
            value={phone.trim()}
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            placeholder="Phone number"
          />
        </div>

        {/* <Select onValueChange={setService} required>
          <SelectTrigger className="w-ful ">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a service</SelectLabel>
              <SelectItem value="est">Web Development</SelectItem>
              <SelectItem value="cst">UI/UX Design</SelectItem>
              <SelectItem value="mst">Logo Design</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select> */}

        <Textarea
          className={cn(
            'h-[200px] outline-none',
            message ? 'focus:border-accent' : 'focus:border-red-300 ',
          )}
          isRequired
          value={message.trim()}
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
          <button
            type="button"
            onClick={() =>
              enqueueSnackbar('Your message has been successfully sent!', {
                variant: 'success',
              })
            }
          ></button>
          <p className="text-center text-white/60">
            All fields are required<sup className="text-red-300"> *</sup>
          </p>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
