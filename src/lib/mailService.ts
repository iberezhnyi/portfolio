import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

type SendEmailDto = {
  from: Mail.Address
  email: Mail.Address
  subject: string
  message: string
}

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
} as SMTPTransport.Options)

export const mailService = async ({
  from,
  email,
  subject,
  message,
}: SendEmailDto) => {
  if (!from || !email) {
    throw new Error('Invalid email addresses')
  }

  return await transporter.sendMail({
    from,
    to: email,
    subject,
    text: message,
    html: message,
  })
}
