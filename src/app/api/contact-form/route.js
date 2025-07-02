import { Resend } from 'resend';
import ContactDetails from '@/components/EmailTemplate/ContactDetails';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json(); // Use `req.json()` in App Router (not req.body)

    const { name, email, number, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Enigma Webforms <no-reply@weareenigma.com>',
      // to: ['b@weareenigma.com'],
      to: ['bhardwajhitesh09@gmail.com'],
      subject: 'New Lead: New Contact Form Submission',
      react: ContactDetails({
        userName: name,
        userEmail: email,
        userNumber: number,
        userMessage: message,
      }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || error }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
