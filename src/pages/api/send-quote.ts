import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NOTIFICATION_EMAIL,
    pass: process.env.NOTIFICATION_EMAIL_PASSWORD
  }
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Format the email content
    const emailContent = `
New Quote Request

Service: ${data.serviceId}

Customer Information:
- Name: ${data.formData.name}
- Email: ${data.formData.email}
- Phone: ${data.formData.phone}

Service Details:
${Object.entries(data.formData)
  .filter(([key]) => !['name', 'email', 'phone', 'comments'].includes(key))
  .map(([key, value]) => `- ${key}: ${value}`)
  .join('\n')} 

Price Range:
€${data.priceRange.min} - €${data.priceRange.max}

Additional Comments:
${data.formData.comments || 'None'}`;

    // Send email to both addresses
    await transporter.sendMail({
      from: process.env.NOTIFICATION_EMAIL,
      to: [process.env.NOTIFICATION_EMAIL_1, process.env.NOTIFICATION_EMAIL_2].join(','),
      subject: `New Quote Request - ${data.serviceId}`,
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
    return new Response(JSON.stringify({ error: 'Failed to send quote' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 