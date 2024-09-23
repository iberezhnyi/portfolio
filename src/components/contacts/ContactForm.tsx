import { FC, FormEvent, useState } from 'react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ContactFormData } from '@/app/contacts/page'

interface ContactFormProps {
  onSubmit: (formData: ContactFormData) => void
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData: ContactFormData = {
      firstname,
      lastname,
      email,
      phone,
      service,
      message,
    }

    onSubmit(formData)
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
            isRequired
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="firstname"
            placeholder="Firstname"
          />
          <Input
            isRequired
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="lastname"
            placeholder="Firstname"
          />
          <Input
            isRequired
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email address"
          />
          <Input
            isRequired
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            placeholder="Phone number"
          />
        </div>

        <Select onValueChange={setService}>
          <SelectTrigger className="w-full">
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
        </Select>

        <Textarea
          isRequired
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-[200px]"
          placeholder="Type your message here"
        />

        <Button
          type="submit"
          size="md"
          className="max-w-40"
          // disabled={!lastname || !email || !phone || !service || message}
        >
          Send message
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
