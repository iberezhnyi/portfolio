import { IMessageTemplate } from '@/interfaces/interfaces'

export const adminHtmlMessageTemplate = ({
  name,
  email,
  message,
  phone,
  adminName,
}: IMessageTemplate) => `
<!doctype html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>New Message Received</title>
    <style media="all" type="text/css">
      @media all {
        .btn-primary table td:hover {
          background-color: #ec0867 !important;
        }

        .btn-primary a:hover {
          background-color: #ec0867 !important;
          border-color: #ec0867 !important;
        }
      }
      @media only screen and (max-width: 640px) {
        .main p,
      .main td,
      .main span {
          font-size: 16px !important;
        }

        .wrapper {
          padding: 8px !important;
        }

        .content {
          padding: 0 !important;
        }

        .container {
          padding: 0 !important;
          padding-top: 8px !important;
          width: 100% !important;
        }

        .main {
          border-left-width: 0 !important;
          border-radius: 16 !important;
          border-right-width: 0 !important;
        }

        .btn table {
          max-width: 100% !important;
          width: 100% !important;
        }

        .btn a {
          font-size: 16px !important;
          max-width: 100% !important;
          width: 100% !important;
        }
      }
      @media all {
        .ExternalClass {
          width: 100%;
        }

        .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
          line-height: 100%;
        }

        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none;
        }

        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }
      }
    </style>
  </head>
  <body style="font-family: Helvetica, sans-serif; -webkit-font-smoothing: antialiased; font-size: 16px; line-height: 1.3; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f4f5f6; margin: 0; padding: 0;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="background-color: #f4f5f6; width: 100%;" width="100%" bgcolor="#f4f5f6">
      <tr>
        <td>&nbsp;</td>
        <td class="container" style="max-width: 600px; padding: 0; padding-top: 24px; width: 600px; margin: 0 auto;" width="600">
          <div class="content" style="max-width: 600px; padding: 0;">

            <!-- START MAIN CONTENT AREA -->
            <table role="presentation" class="main" style="background: #ffffff; border: 1px solid #eaebed; border-radius: 16px; width: 100%;" width="100%">
              <tr>
                <td class="wrapper" style="padding: 24px;">
                  <p>Hello,</p>
                  <p>You have received a new message from the contact form on your website <strong><a href="iberezhnyi.vercel.app" rel="noopener nofollow noreferrer" style="text-decoration: underline; color: #222222;">iberezhnyi.vercel.app</a>:<strong></p>
                  <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>Message:</strong> ${message}</li>
                  </ul>
                  <p>Please reply to this message as soon as possible.</p>
                </td>
              </tr>
            </table>
            <!-- END MAIN CONTENT AREA -->
            
            <!-- START FOOTER -->
            <div class="footer" style="text-align: center;">
              <table role="presentation" width="100%">
                <tr>
                  <td class="content-block" style="color: #9a9ea6; font-size: 16px; text-align: center; font-style: italic;">
                    <span class="apple-link" style="color: #9a9ea6; font-size: 16px; text-align: center;"><a href="iberezhnyi.vercel.app" rel="noopener nofollow noreferrer" style="text-decoration: underline; color: #9a9ea6; font-size: 16px; text-align: center;">${adminName}</a>, Kyiv, Ukraine</span>
                  </td>
                </tr>
              </table>
            </div>
            <!-- END FOOTER -->
          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
`

export const userHtmlMessageTemplate = ({
  name,
  adminName,
}: IMessageTemplate) => `
<!doctype html>
<html lang="ru">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Автоответ на запрос</title>
    <style media="all" type="text/css">
@media all {
  .btn-primary table td:hover {
    background-color: #ec0867 !important;
  }

  .btn-primary a:hover {
    background-color: #ec0867 !important;
    border-color: #ec0867 !important;
  }
}
@media only screen and (max-width: 640px) {
  .main p,
.main td,
.main span {
    font-size: 16px !important;
  }

  .wrapper {
    padding: 8px !important;
  }

  .content {
    padding: 0 !important;
  }

  .container {
    padding: 0 !important;
    padding-top: 8px !important;
    width: 100% !important;
  }

  .main {
    border-left-width: 0 !important;
    border-radius: 16px !important;
    border-right-width: 0 !important;
  }

  .btn table {
    max-width: 100% !important;
    width: 100% !important;
  }

  .btn a {
    font-size: 16px !important;
    max-width: 100% !important;
    width: 100% !important;
  }
}
@media all {
  .ExternalClass {
    width: 100%;
  }

  .ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
    line-height: 100%;
  }

  .apple-link a {
    color: inherit !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    text-decoration: none;
  }

  #MessageViewBody a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
}
</style>
  </head>
  <body style="font-family: Helvetica, sans-serif; -webkit-font-smoothing: antialiased; font-size: 16px; line-height: 1.3; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f4f5f6; margin: 0; padding: 0;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f5f6; width: 100%;" width="100%" bgcolor="#f4f5f6">
      <tr>
        <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td>
        <td class="container" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; max-width: 600px; padding: 0; padding-top: 24px; width: 600px; margin: 0 auto;" width="600" valign="top">
          <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 600px; padding: 0;">

            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Thank you for getting in touch! I've successfully received your message and will respond to you as soon as possible.</span>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border: 1px solid #eaebed; border-radius: 16px; width: 100%;" width="100%">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box; padding: 24px;" valign="top">
                  <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;"><strong>Hi ${name},</strong></p>
                  <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">Thank you for getting in touch! I've successfully received your message and will respond to you as soon as possible.</p>
                  <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">In the meantime, if you have any further questions, don't hesitate to reach out to me. Additional contacts are on my website: <strong><a href="iberezhnyi.vercel.app" rel="noopener nofollow noreferrer" style="text-decoration: underline; color: #222222;">iberezhnyi.vercel.app</a></strong></p>
                  <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;"><strong>Best regards,</strong></p>
                  <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;"><strong>${adminName}.</strong></p>
                </td>
              </tr>

              <!-- END MAIN CONTENT AREA -->
              </table>

            <!-- START FOOTER -->
            <div class="footer" style="clear: both; padding-top: 24px; text-align: center; width: 100%;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                <tr>
                  <td class="content-block" style="font-family: Helvetica, sans-serif; vertical-align: top; color: #9a9ea6; font-size: 16px; text-align: center; font-style: italic;" valign="top" align="center">
                    <span class="apple-link" style="color: #9a9ea6; font-size: 16px; text-align: center;"><a href="iberezhnyi.vercel.app" rel="noopener nofollow noreferrer" style="text-decoration: underline; color: #9a9ea6; font-size: 16px; text-align: center;">${adminName}</a>, Kyiv, Ukraine</span>
                  </td>
                </tr>
              </table>
            </div>

            <!-- END FOOTER -->
            
<!-- END CENTERED WHITE CONTAINER --></div>
        </td>
        <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
`

export const adminTextMessageTemplate = ({}: IMessageTemplate) => `
Some admin text message
`

export const userTextMessageTemplate = ({}: IMessageTemplate) => `
Some user text message
`

// <br> Если вы не хотите получать уведомления, <a href="#" style="text-decoration: underline; color: #9a9ea6; font-size: 16px; text-align: center;">отпишитесь здесь</a>.
