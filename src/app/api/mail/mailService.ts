import { mailServiceConfig } from './mailServiceConfig'
import { NextResponse } from 'next/server'
import {
  userTextMessageTemplate,
  adminTextMessageTemplate,
  adminHtmlMessageTemplate,
  userHtmlMessageTemplate,
} from './emailTemplates'
import { IContactFormDataDto } from '@/interfaces/interfaces'

const fromMail = process.env.FROM_MAIL
const fromName = process.env.FROM_NAME

export const mailService = async (props: IContactFormDataDto) => {
  const { firstname, lastname, email, phone, message } = props

  if (!fromMail || !fromName) {
    return NextResponse.json(
      { message: 'Server configuration error' },
      { status: 500 },
    )
  }

  try {
    const adminMessage = await mailServiceConfig({
      from: { address: email, name: `${firstname} ${lastname}` },
      to: { address: fromMail, name: fromName },
      subject: `Contact Form Submission`,
      html: adminHtmlMessageTemplate({
        name: `${firstname} ${lastname}`,
        firstname,
        lastname,
        email,
        phone,
        message,
      }),
      text: adminTextMessageTemplate({
        name: `${firstname} ${lastname}`,
        firstname,
        lastname,
        email,
        phone,
        message,
      }),
    })

    const userMessage = await mailServiceConfig({
      from: { address: fromMail, name: fromName },
      to: { address: email, name: `${firstname} ${lastname}` },
      subject: `Response from ${fromName}`,
      html: userHtmlMessageTemplate({
        name: `${firstname} ${lastname}`,
        firstname,
        lastname,
        email,
        phone,
        message,
      }),
      text: userTextMessageTemplate({
        name: `${firstname} ${lastname}`,
        firstname,
        lastname,
        email,
        phone,
        message,
      }),
    })

    console.log('userMessage :>> ', userMessage)
    console.log('adminMessage :>> ', adminMessage)
    if (userMessage || adminMessage) {
      return new Error('Failed to send email')
    }

    return NextResponse.json({ message: 'Email sent successfully!' })
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 },
    )
  }
}
