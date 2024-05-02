import { IncomingForm } from 'formidable';
import fs from 'fs';
import { Resend } from 'resend';
import PopupTemplate from '../../components/EmailTemplate/PopupTemplate';

export const config = {
  api: {
    bodyParser: false, // Disabling the default body parser
  },
};

export default async function handler (req, res) {
  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing the form data:", err);
      return res.status(500).json({ error: 'Error parsing the form data.' });
    }

    const resendClient = new Resend(process.env.RESEND_API_KEY);

    console.log(fields);

    let attachments = [];

    if (files.myFile) {
      const file = files.myFile;
      const fileBuffer = fs.readFileSync(file.filepath); // Read file content into buffer

      attachments.push({
        filename: file.originalFilename,
        content: fileBuffer,
        contentType: file.mimetype,
      });
    }

    const emailData = {
      from: 'Enigma Webforms <no-reply@weareenigma.com>',
      to: ['b@weareenigma.com'],
      subject: "New Lead: New Popup Form Submission",
      react: PopupTemplate({ 
        userName: fields.firstName + ' ' + fields.lastName,
        userEmail: fields.email,
        userNumber: fields.phoneNumber,
        userService: fields.selectedService,
        userBudget: fields.budgetRangeText,
        userCompany: fields.orgName,
        userRole: fields.role,
        userMessage: fields.message,
        pageLink: fields.pageUrl,
      }),
      attachments: attachments,
    };

    try {
      const response = await resendClient.emails.send(emailData);
      if (response.error) {
        return res.status(400).json({ error: response.error });
      }
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error("Failed to send email:", error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  });
}
