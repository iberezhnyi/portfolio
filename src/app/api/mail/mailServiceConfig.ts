import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import Mail from 'nodemailer/lib/mailer'

type ISendEmailDto = {
  from: Mail.Address
  to: Mail.Address
  subject: string
  html: string
  text: string
}

export const mailServiceConfig = async ({
  from,
  to,
  subject,
  html,
  text,
}: ISendEmailDto): Promise<nodemailer.SentMessageInfo> => {
  if (!from || !to) {
    throw new Error('Invalid email addresses')
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    } as SMTPTransport.Options)

    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html,
      text,
    })

    // const info: { accepted: Mail.Address[] } = await new Promise((resolve) => {
    //   setTimeout(function () {
    //     resolve({
    //       accepted: [],
    //     })
    //   }, 250)
    // })

    if (info.accepted.length > 0) {
      console.log('Message sent successfully to:', info.accepted)
      return info
    } else {
      console.log('Message was not accepted by any recipients.')
      throw new Error('Message was not accepted by any recipients.')
    }
  } catch (error) {
    console.log('error :>> ', error)
  }
}
