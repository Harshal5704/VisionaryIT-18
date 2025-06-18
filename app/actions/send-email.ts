"use server"

import { Resend } from "resend"

const resend = new Resend("re_NBEjEnDn_Ar1eb2NHioM9RX3czfiXTA9U")

export async function sendContactEmail(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    // Send email to your business email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "contact@visionflowtech.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Contact Details:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This email was sent from the Vision Flow Technologies contact form.
            </p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to the user
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Thank you for contacting Vision Flow Technologies",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">Thank You for Reaching Out!</h2>
          
          <p>Dear ${firstName},</p>
          
          <p>Thank you for contacting Vision Flow Technologies. We have received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Your Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Visit our website to learn more about our services</li>
            <li>Connect with us on social media</li>
            <li>Call us directly at +91 9731070591</li>
          </ul>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #4f46e5; border-radius: 8px; text-align: center;">
            <h3 style="color: white; margin-top: 0;">Vision Flow Technologies</h3>
            <p style="color: white; margin-bottom: 0;">Innovative Solutions for the Digital Era</p>
          </div>
          
          <div style="margin-top: 20px; text-align: center;">
            <p style="color: #6b7280; font-size: 14px;">
              📧 contact@visionflowtech.com | 📞 +91 9731070591
            </p>
          </div>
        </div>
      `,
    })

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send email. Please try again." }
  }
}
