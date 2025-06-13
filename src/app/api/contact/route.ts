import { type NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/mailer";
import appConfig from "@/lib/env";

export async function POST(request: NextRequest) {
  try {
    // 1. Parse JSON body
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    // 2. Validate data
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 3. Create dynamic HTML content
    const submissionDate = new Date().toLocaleString("en-US", {
      timeZone: "Africa/Lagos",
    });
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #2a2a2a; color: #ffffff; padding: 20px; text-align: center;">
                <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            <div style="padding: 20px;">
                <p style="font-size: 16px;">A new message has been submitted through the website's contact form.</p>
                <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px; font-size: 18px; margin-top: 30px;">Contact Details</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px 0; font-weight: bold;">Name:</td>
                        <td style="padding: 10px 0;">${firstName} ${lastName}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px 0; font-weight: bold;">Email Address:</td>
                        <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message:</td>
                        <td style="padding: 10px 0;">${message}</td>
                    </tr>
                </table>
            </div>
            <div style="background-color: #f4f4f4; color: #888; padding: 15px; text-align: center; font-size: 12px;">
                <p>This email was automatically generated from the company website.</p>
                <p>Submitted on: ${submissionDate}</p>
            </div>
        </div>
    </body>
    </html>
    `;

    // 4. Send the email
    await sendEmail({
      to: `"Contact Form" <${appConfig.EMAIL_FROM}>`,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
