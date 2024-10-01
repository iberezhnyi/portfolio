import { mailServiceConfig } from './mailServiceConfig'
import {
  userTextMessageTemplate,
  adminTextMessageTemplate,
  adminHtmlMessageTemplate,
  userHtmlMessageTemplate,
} from './emailTemplates'
import { IContactFormDataDto } from '@/interfaces/interfaces'

const adminMail = process.env.ADMIN_MAIL
const adminName = process.env.ADMIN_NAME

export const mailService = async (props: IContactFormDataDto) => {
  const { firstname, lastname, email, phone, message } = props
  let name = firstname

  if (lastname) name = `${firstname} ${lastname}`

  try {
    if (!adminMail || !adminName) {
      throw new Error('Server configuration error')
    }

    const adminMessage = await mailServiceConfig({
      from: { address: email, name },
      to: { address: adminMail, name: adminName },
      subject: `Contact Form Submission`,
      html: adminHtmlMessageTemplate({
        name,
        firstname,
        lastname,
        email,
        phone,
        message,
        adminMail,
        adminName,
      }),
      text: adminTextMessageTemplate({
        name,
        firstname,
        lastname,
        email,
        phone,
        message,
        adminMail,
        adminName,
      }),
    })

    const userMessage = await mailServiceConfig({
      from: { address: adminMail, name: adminName },
      to: { address: email, name },
      // subject: `Response from ${adminName}`,
      subject: `Thank you for contacting me!`,
      html: userHtmlMessageTemplate({
        name: `${firstname} ${lastname}`,
        firstname,
        lastname,
        email,
        phone,
        message,
        adminMail,
        adminName,
      }),
      text: userTextMessageTemplate({
        name,
        firstname,
        lastname,
        email,
        phone,
        message,
        adminMail,
        adminName,
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
