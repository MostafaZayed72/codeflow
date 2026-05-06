import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, whatsapp, message } = body

  // Configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER, // Your email: codeflowegypt@gmail.com
      pass: process.env.SMTP_PASS  // Your App Password (16 characters)
    }
  })

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'codeflowegypt@gmail.com', // Where you want to receive the mail
    subject: `New Lead from CodeFlow: ${name}`,
    text: `
      Name: ${name}
      WhatsApp: ${whatsapp}
      Message: ${message}
    `,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #0ea5e9;">New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/${whatsapp.replace(/\s/g, '')}">${whatsapp}</a></p>
        <p><strong>Message:</strong></p>
        <p style="background: #f8fafc; padding: 15px; border-radius: 5px;">${message}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #64748b;">Sent from CodeFlow Website</p>
      </div>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('SMTP Error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email'
    })
  }
})
