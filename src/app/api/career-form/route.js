import { NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: { bodyParser: false },
};

export async function POST(request) {
  try {
    const formData = await request.formData();

    // pull out the uploaded File
    const uploaded = formData.get("careerCV");
    if (!(uploaded instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // convert the File to a Node Readable
    const buffer = Buffer.from(await uploaded.arrayBuffer());
    const fileStream = Readable.from(buffer);

    // parse other fields
    const applicationTitle = formData.get("jobTitle")?.toString() || "";
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const number = formData.get("number")?.toString() || "";
    const location = formData.get("location")?.toString() || "";
    const url = formData.get("url")?.toString() || "";
    const expsJson = formData.get("experiences")?.toString();
    let experiences = [];
    if (expsJson) {
      experiences = JSON.parse(expsJson);
    }

    // Google Auth + Drive/Sheets setup (unchanged)
    const googleAuth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON),
      scopes: ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/spreadsheets"],
    });
    const drive = google.drive({ version: "v3", auth: googleAuth });
    const sheets = google.sheets({ version: "v4", auth: googleAuth });

    // upload to Drive
    const fileMetadata = {
      name: uploaded.name,
      parents: [process.env.FOLDER_ID],
    };
    const media = {
      mimeType: uploaded.type,
      body: fileStream,
    };

    const fileUpload = await drive.files.create({
      resource: fileMetadata,
      media,
      fields: "id, webViewLink",
    });

    // append to Sheets
    const summary = experiences
      .map(e => `${e.jobTitle} at ${e.company}, ${e.years}y ${e.months}m`)
      .join("; ");
    const currentDate = new Date().toLocaleDateString("en-GB");

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Details25!A1",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[
          currentDate, applicationTitle, name, email, number, location, url, summary,
          fileUpload.data.webViewLink
        ]]
      }
    });

    return NextResponse.json({
      message: "Success",
      link: fileUpload.data.webViewLink
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}