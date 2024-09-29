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

    if (userMessage || adminMessage) {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    throw error
  }
}
