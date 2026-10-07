import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      name,
      company,
      phone,
      email,
      service,
      message,
    } = data;

    if (!name || !phone || !email || !service) {
      return Response.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Anjani Technologies Website" <${process.env.GMAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New Enquiry: ${service} – ${name}`,
      text: `
New Website Enquiry

Name: ${name}
Company / Organization: ${company || "-"}
Phone: ${phone}
Email: ${email}
Service: ${service}

Message:
${message || "-"}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Website Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company / Organization:</strong> ${company || "-"}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>

          <h3>Message</h3>
          <p>${message || "-"}</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Enquiry sent successfully.",
    });
  } catch (error) {
    console.error("Email sending error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to send enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}