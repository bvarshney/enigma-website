import nextConnect from 'next-connect'
import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

const handler = nextConnect({
  // Handle any other HTTP method
  onNoMatch: (req, res) => {
    res.status(405).json({ error: 'Method not allowed' });
  },
});

handler.post(async (req, res) => {
  const form = new IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Error parsing the form data.' });

    // Assuming the name of the file field is 'file'
    const { file } = files;
    const tempPath = file.filepath;
    const filename = file.originalFilename;
    const newPath = path.join(process.cwd(), 'public/uploads', filename);

    // Move the file from the temp path to the new path
    try {
      fs.rename(tempPath, newPath, (err) => {
        if (err) throw err;
        res.status(200).json({ message: 'File uploaded successfully', filePath: `/uploads/${filename}` });
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to move the file.' });
    }
  });
});

export const config = {
  api: {
    bodyParser: false, // Disabling bodyParser is important for handling multipart/form-data
  },
};

export default handler;

