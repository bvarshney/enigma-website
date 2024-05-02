import { google } from 'googleapis';
import formidable from 'formidable';
import fs from 'fs';

const googleAuth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON),
  scopes: ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/spreadsheets']
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Form parsing error' });

    const drive = google.drive({ version: 'v3', auth: googleAuth });
    const sheets = google.sheets({ version: 'v4', auth: googleAuth });

    // File upload to Google Drive
    const filePath = files.careerCV.filepath;
    const fileMetadata = {
      name: files.careerCV.originalFilename,
      parents: ['15tEi_2X8kPpFY6FEGZbQ-AgfgaxEQWv_'] // Set the folder ID here
    };
    const media = {
      mimeType: files.careerCV.mimetype,
      body: fs.createReadStream(filePath),
    };

    try {
      const file = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id, webViewLink'
      });

      fs.unlinkSync(filePath); // Remove the file from the server after uploading

      // Parsing experiences JSON if it's a string
      let experiences = [];
      if (fields.experiences) {
        try {
          experiences = JSON.parse(fields.experiences);
        } catch (parseError) {
          console.error('Error parsing experiences:', parseError);
          return res.status(400).json({ error: 'Invalid experiences data' });
        }
      }

      const experiencesData = experiences.map(exp => 
        `${exp.jobTitle} at ${exp.company}, ${exp.years} years and ${exp.months} months`
      ).join(', ');

      // Update data to Google Sheets
      const values = [
        [
          fields.name, fields.email, fields.number, fields.location, 
          fields.url, experiencesData, file.data.webViewLink, fields.pageUrl
        ]
      ];
      await sheets.spreadsheets.values.append({
        spreadsheetId: '1dhlWws1KjcFDtZqelIMCBGIB8uOP4lBGhJB8ROuqsYo',
        range: 'A1',
        valueInputOption: 'USER_ENTERED',
        resource: { values }
      });

      res.status(200).json({ message: "Success", link: file.data.webViewLink });
    } catch (error) {
      console.error('Google API error:', error);
      res.status(500).json({ error: 'Failed to process the request' });
    }
  });
}
