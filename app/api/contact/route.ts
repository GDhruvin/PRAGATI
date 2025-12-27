import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, message, fundSuggestion } = body;

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        // Get email credentials from environment variables
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;
        const emailTo = process.env.EMAIL_TO || emailUser;

        if (!emailUser || !emailPass) {
            console.error("Email credentials not configured");
            return NextResponse.json(
                { error: "Email service not configured. Please contact the administrator." },
                { status: 500 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        // Email content
        const mailOptions = {
            from: emailUser,
            to: emailTo,
            subject: "New Contact Form Submission - P₹AGATI Fund",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; background-color: #f3f4f6; font-weight: bold; width: 150px;">Full Name:</td>
                <td style="padding: 8px; background-color: #f9fafb;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f3f4f6; font-weight: bold;">Email:</td>
                <td style="padding: 8px; background-color: #f9fafb;">
                  <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f3f4f6; font-weight: bold;">Phone:</td>
                <td style="padding: 8px; background-color: #f9fafb;">${phone}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message</h3>
            <div style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #2563eb; white-space: pre-wrap;">
${message}
            </div>
          </div>

          ${fundSuggestion ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Fund Suggestion</h3>
            <div style="padding: 15px; background-color: #f0fdf4; border-left: 4px solid #10b981; white-space: pre-wrap;">
${fundSuggestion}
            </div>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the P₹AGATI Fund contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      `,
            replyTo: email,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
