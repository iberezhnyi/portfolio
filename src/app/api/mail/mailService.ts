import { mailServiceConfig } from './mailServiceConfig'
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

  try {
    if (!fromMail || !fromName) {
      throw new Error('Server configuration error')
    }

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
        fromMail,
        fromName,
      }),
      text: adminTextMessageTemplate({
        name: `${firstname} ${lastname}`,
        firstname,
        lastname,
        email,
        phone,
        message,
        fromMail,
        fromName,
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
        fromMail,
        fromName,
      }),
      text: userTextMessageTemplate({
        name: `${firstname} ${lastname}`,
        firstname,
        lastname,
        email,
        phone,
        message,
        fromMail,
        fromName,
      }),
    })

    // console.log('userMessage :>> ', userMessage)
    // console.log('adminMessage :>> ', adminMessage)

    if (!userMessage.accepted.length || !adminMessage.accepted.length) {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    throw error
  }
}
