import { NextResponse, NextRequest } from 'next/server'
import { validationSchema } from '@/lib/validationSchema'
import * as Yup from 'yup'
import { mailService } from './mailService'
import { IContactFormDataDto } from '@/interfaces/interfaces'

export async function POST(req: NextRequest) {
  const { firstname, lastname, email, phone, message } = await req.json()

  if (
    !firstname.trim() ||
    !lastname.trim() ||
    !email.trim() ||
    !phone.trim() ||
    !message.trim()
  ) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 },
    )
  }

  const contactFormData: IContactFormDataDto = {
    firstname,
    lastname,
    email,
    phone,
    message,
  }

  try {
    await validationSchema.validate(contactFormData, { abortEarly: false })

    await mailService(contactFormData)

    return NextResponse.json({ message: 'Email sent successfully!' })
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      error.inner.forEach((err) => {
        console.log(err.message, { variant: 'error' })
      })
    }

    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 },
    )
  }
}
