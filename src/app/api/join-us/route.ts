import { type NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/mailer"; // Assuming your mailer service is in lib
import appConfig from "@/lib/env";

export async function POST(request: NextRequest) {
  try {
    // 1. Parse FormData
    const formData = await request.formData();
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const socialMedia = formData.get("socialMedia") as string;
    const specialties = formData.getAll("specialty").join(", "); // Use getAll for multiple selections
    const file = formData.get("portfolio") as File | null;

    // 2. Validate data
    if (!firstName || !lastName || !email || !specialties || !file) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 3. Prepare the file for attachment
    const buffer = Buffer.from(await file.arrayBuffer());

    // 4. Create dynamic HTML content
    const submissionDate = new Date().toLocaleString("en-US", {
      timeZone: "Africa/Lagos",
    });
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Join Us Application</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #2a2a2a; color: #ffffff; padding: 20px; text-align: center;">
                <h1 style="margin: 0; font-size: 24px;">New Join Us Application</h1>
            </div>
            <div style="padding: 20px;">
                <p style="font-size: 16px;">A new candidate has submitted their details through the website's 'Join Us' form.</p>
                <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px; font-size: 18px; margin-top: 30px;">Candidate Details</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px 0; font-weight: bold;">Full Name:</td>
                        <td style="padding: 10px 0;">${firstName} ${lastName}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px 0; font-weight: bold;">Email Address:</td>
                        <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px 0; font-weight: bold;">Phone Number:</td>
                        <td style="padding: 10px 0;">${phone}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px 0; font-weight: bold;">Social Media:</td>
                        <td style="padding: 10px 0;"><a href="${socialMedia}" style="color: #007bff; text-decoration: none;">${socialMedia}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Selected Specialties:</td>
                        <td style="padding: 10px 0;">${specialties}</td>
                    </tr>
                </table>

                <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px; font-size: 18px; margin-top: 30px;">Portfolio / CV</h2>
                <p style="font-size: 16px; background-color: #e9f5ff; border-left: 4px solid #007bff; padding: 12px; margin-top: 10px;">
                    <strong>The candidate's Portfolio/CV is attached to this email.</strong>
                </p>
            </div>
            <div style="background-color: #f4f4f4; color: #888; padding: 15px; text-align: center; font-size: 12px;">
                <p>This email was automatically generated from the company website.</p>
                <p>Submitted on: ${submissionDate}</p>
            </div>
        </div>
    </body>
    </html>
    `
      .replace(/\${firstName}/g, firstName)
      .replace(/\${lastName}/g, lastName)
      .replace(/\${email}/g, email)
      .replace(/\${phone}/g, phone || "Not provided")
      .replace(/\${socialMedia}/g, socialMedia || "Not provided")
      .replace(/\${specialties}/g, specialties)
      .replace(/\${submissionDate}/g, submissionDate);
    // Note: A more robust templating engine can be used for complex cases

    // 5. Send the email using the updated mailer service
    await sendEmail({
      to: `"Hiring Manager" <${appConfig.EMAIL_FROM}>`, // Send to your admin
      subject: `New Application: ${firstName} ${lastName} - ${specialties}`,
      html: htmlContent,
      attachments: [
        {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        },
      ],
    });

    return NextResponse.json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
