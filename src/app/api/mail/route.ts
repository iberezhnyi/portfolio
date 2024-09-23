import { mailService } from '@/lib/mailService'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const { firstname, lastname, email, phone, service, message } =
    await req.json()

  const fromMail = process.env.FROM_MAIL
  const fromName = process.env.FROM_NAME

  if (!fromMail || !fromName) {
    return NextResponse.json(
      { message: 'Server configuration error' },
      { status: 500 },
    )
  }

  try {
    await mailService({
      from: { address: email, name: firstname },
      email: { address: fromMail, name: fromName },
      subject: `Contact Form Submission: ${service}`,
      message: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    })

    await mailService({
      from: { address: fromMail, name: fromName },
      email: { address: email, name: firstname },
      subject: `Response from ${fromName}`,
      message: `
        Your message to ${fromName} sent successfully!
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully!' })
  } catch (error) {
    console.error('Error sending email:', error)

    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 },
    )
  }
}

// import type { NextApiRequest, NextApiResponse } from 'next'
// import nodemailer from 'nodemailer'
// import SMTPTransport from 'nodemailer/lib/smtp-transport'

// export default async function POST(req: NextApiRequest, res: NextApiResponse) {
//   // if (req.method === 'POST') {
//   const { firstname, lastname, email, phone, service, message } = req.body

//   const transporter = nodemailer.createTransport({
//     host: process.env.MAIL_HOST,
//     port: Number(process.env.MAIL_PORT),
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS,
//     },
//   } as SMTPTransport.Options)

//   const reqMessage = {
//     from: {
//       name: process.env.FROM_MAIL,
//       address: 'iBer',
//     },
//     recepients: {
//       name: firstname,
//       address: email,
//     },
//     subject: 'Contact Form Submission',
//     message: 'Please enter your',
//   }

//   try {
//     await transporter.sendMail(reqMessage)
//     console.log('reqMessage :>> ', reqMessage)

//     res.status(200).json({ message: 'Email sent successfully!' })
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to send email.' })
//   }
//   // } else {
//   //   res.status(405).json({ error: 'Method not allowed' })
//   // }
// }
