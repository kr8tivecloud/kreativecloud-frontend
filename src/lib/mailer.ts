import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
import appConfig from "./env";

// Define the shape of the email payload
export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    content: Buffer;
    contentType?: string;
  }>;
}

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: appConfig.EMAIL_SERVER_HOST,
  port: Number(appConfig.EMAIL_SERVER_PORT),
  secure: Number(appConfig.EMAIL_SERVER_PORT) === 465,
  auth: {
    user: appConfig.EMAIL_SERVER_USER,
    pass: appConfig.EMAIL_SERVER_PASSWORD,
  },
});

// Core email sending function
export const sendEmail = async (data: EmailPayload) => {
  const mailOptions: MailOptions = {
    from: appConfig.EMAIL_FROM,
    to: data.to,
    subject: data.subject,
    html: data.html,
    attachments: data.attachments,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email.");
  }
};
