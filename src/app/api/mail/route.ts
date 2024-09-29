import { NextResponse, NextRequest } from 'next/server'
import { validationSchema } from '@/lib/validationSchema'
import * as Yup from 'yup'
import { mailService } from './mailService'
import { IContactFormDataDto } from '@/interfaces/interfaces'

export async function POST(req: NextRequest) {
  const { firstname, lastname, email, phone, message } = await req.json()

  try {
    if (
      !firstname.trim() ||
      !lastname.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !message.trim()
    ) {
      throw new Error('400 - All fields are required')
    }

    const contactFormData: IContactFormDataDto = {
      firstname,
      lastname,
      email,
      phone,
      message,
    }

    await validationSchema.validate(contactFormData, { abortEarly: false })

    await mailService(contactFormData)

    return NextResponse.json({ message: 'Email sent successfully!' })
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      const validationErrors = error.inner.map((err) => err.message).join(', ')

      return NextResponse.json(
        { message: `Validation failed: ${validationErrors}` },
        { status: 400 },
      )
    }

    if (error instanceof Error) {
      if (error.message.includes('400')) {
        return NextResponse.json(
          { message: `Failed to send email: ${error.message}` },
          { status: 400 },
        )
      }

      if (error.message.includes('500')) {
        return NextResponse.json(
          // { message: `Failed to send email: ${error.message}` },
          { message: 'Failed to send email.' },
          { status: 500 },
        )
      }
    }

    return NextResponse.json(
      // { message: `An unexpected error occurred. ${error}` },
      { message: 'An unexpected error occurred.' },
      { status: 500 },
    )
  }
}
