import nodemailer from 'nodemailer';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';
import path from 'path';

const emailform = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailform,
    pass,
  },
});

// Set up multer for handling file uploads
const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory for now
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5MB (adjust as needed)
  },
});

export const config = {
  api: {
    bodyParser: false, // Disable the built-in bodyParser to allow reading raw request body
  },
};

const saveFile = async (file) => {
  const uniqueFilename = uuidv4();
  const fileExtension = path.extname(file.originalname);
  const filePath = path.join(process.cwd(), 'public', 'temp', `${uniqueFilename}${fileExtension}`);

  await fs.writeFile(filePath, file.buffer);
  return filePath;
};

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, selectedService, phoneNumber, email, message } = req.body;
      const selectedFile = req.file; // Use req.file to access the uploaded file

      // Save the uploaded file and get its path
      const filePath = await saveFile(selectedFile);

      const mailOptions = {
        from: emailform,
        to: emailform,
        subject: 'Form Submission',
        text: `
          Name: ${name}
          Service: ${selectedService}
          Phone: ${phoneNumber}
          Email: ${email}
          Message: ${message}
        `,
        attachments: [
          {
            filename: selectedFile.originalname, // Use the original file name
            path: filePath, // Use the path to the saved file
          },
        ],
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
