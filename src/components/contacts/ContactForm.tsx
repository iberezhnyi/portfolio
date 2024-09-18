import { FC } from 'react'
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

const ContactForm: FC = () => {
  return (
    <div className="xl:w-[54%] order-2 xl:order-none">
      <form className="flex flex-col gap-6 p-10 bg-[#27272C] rounded-xl">
        <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
        <p className="text-white/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          voluptates harum sapiente nihil facilis!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input type="firstname" placeholder="Firstname" />
          <Input type="lastname" placeholder="Firstname" />
          <Input type="email" placeholder="Email address" />
          <Input type="phone" placeholder="Phone number" />
        </div>

        <Select>
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

        <Textarea className="h-[200px]" placeholder="Type your message here" />

        <Button size="md" className="max-w-40">
          Send message
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
