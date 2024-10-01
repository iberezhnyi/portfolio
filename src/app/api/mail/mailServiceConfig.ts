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
  try {
    if (!from || !to) {
      throw new Error('Invalid email addresses')
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    } as SMTPTransport.Options)

    // console.log('object :>> ', {
    //   from,
    //   to,
    //   subject,
    //   html,
    //   text,
    // })

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
      return info
    } else {
      throw new Error('400 - Message was not accepted by any recipients.')
    }
  } catch (error) {
    throw error
  }
}
