import { formidable } from 'formidable';
import fs from 'fs';
import { google } from 'googleapis';

export const config = {
  api: {
    bodyParser: false,
  },
};

const googleAuth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON),
  scopes: ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/spreadsheets']
});

export default async function handler(req, res) {
  const form = formidable();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parsing error:', err);
      return res.status(500).json({ error: 'Form parsing error' });
    }

    // Check for the file field
    if (!files.careerCV || !files.careerCV[0] || !files.careerCV[0].filepath) {
      return res.status(400).json({ error: 'No file uploaded or invalid file data.' });
    }

    // Parse experiences properly from the array
    let experiences = [];
    if (fields.experiences && Array.isArray(fields.experiences)) {
      try {
        experiences = JSON.parse(fields.experiences[0]);
      } catch (parseError) {
        console.error('Error parsing experiences:', parseError);
        return res.status(400).json({ error: 'Invalid experiences data' });
      }
    }

    const drive = google.drive({ version: 'v3', auth: googleAuth });
    const sheets = google.sheets({ version: 'v4', auth: googleAuth });

    const filePath = files.careerCV[0].filepath;
    const fileMetadata = {
      name: files.careerCV[0].originalFilename,
      parents: [process.env.FOLDER_ID] 
    };
    const media = {
      mimeType: files.careerCV[0].mimetype,
      body: fs.createReadStream(filePath),
    };

    try {
      const uploadResponse = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id, webViewLink'
      });

      fs.unlinkSync(filePath); // remove temp file

      const experiencesData = experiences.map(exp =>
        `${exp.jobTitle} at ${exp.company}, ${exp.years} years and ${exp.months} months`
      ).join(', ');

      const values = [
        [
          fields.name ? fields.name[0] : '',
          fields.email ? fields.email[0] : '',
          fields.number ? fields.number[0] : '',
          fields.location ? fields.location[0] : '',
          fields.url ? fields.url[0] : '',
          experiencesData,
          uploadResponse.data.webViewLink,
          fields.pageUrl ? fields.pageUrl[0] : ''
        ]
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'A1',
        valueInputOption: 'USER_ENTERED',
        resource: { values }
      });

      return res.status(200).json({ message: "Success", link: uploadResponse.data.webViewLink });
    } catch (error) {
      console.error('Google API error:', error);
      return res.status(500).json({ error: 'Failed to process the request' });
    }
  });
}
