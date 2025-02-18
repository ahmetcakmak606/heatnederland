import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // or your SMTP server
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "alikaya@heatnederland.nl", // your email
    pass: import.meta.env.SMTP_PASSWORD // get password from environment variable
  }
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Format the service name to be more readable
    const serviceNames = {
      airco: "Air Conditioning",
      badkamer: "Bathroom Installation",
      heating: "Heating Systems",
      vloerverwarming: "Floor Heating"
    };

    // Format the email content
    const emailContent = `
New Quote Request

Service: ${serviceNames[data.serviceId as keyof typeof serviceNames]}

Customer Information:
- Name: ${data.formData.name}
- Email: ${data.formData.email}
- Phone: ${data.formData.phone}
- Address: ${data.formData.address}

Service Details:
${Object.entries(data.formData)
  .filter(([key]) => !['name', 'email', 'phone', 'address', 'comments'].includes(key))
  .map(([key, value]) => `- ${key}: ${value}`)
  .join('\n')}

Price Quote: €${data.priceRange.min}

Additional Comments:
${data.formData.comments || 'None'}
    `;

    // Send email
    await transporter.sendMail({
      from: '"HeatNederland Quote System" <alikaya@heatnederland.nl>',
      to: "alikaya@heatnederland.nl",
      subject: `New Quote Request - ${serviceNames[data.serviceId as keyof typeof serviceNames]}`,
      text: emailContent,
    });

    return new Response(JSON.stringify({ 
      success: true
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send quote'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 