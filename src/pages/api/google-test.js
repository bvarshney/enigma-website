// backend.js
const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');

const app = express();
app.use(bodyParser.json());

const apiKey = process.env.GOOGLE_SERVICE_PRIVATE_KEY

// Configure Google Sheets API
const sheets = google.sheets({
  version: 'v4',
  auth: apiKey
});

// Handle form submissions
export default async function handler(req, res) {

  const { name, email, message } = req.body;
  
  try {
    // Write form data to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: '1dhlWws1KjcFDtZqelIMCBGIB8uOP4lBGhJB8ROuqsYo',
      range: 'Sheet1!A:B',
      valueInputOption: 'RAW',
      resource: {
        values: [[name, email, message]]
      }
    });

    res.send('Form submitted successfully');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Error submitting form');
  }
}
