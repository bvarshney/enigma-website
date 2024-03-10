// // upload.js
// import formidable from "formidable";
// import fs from "fs";
// import path from "path";
// import { v4 as uuidv4 } from 'uuid'; // Import the 'uuid' library

// const baseUrl = process.env.BASE_URL;

// export const config = {
//   api: {
//     bodyParser: false
//   }
// };

// const post = async (req, res) => {
//   const form = new formidable.IncomingForm();
//   form.parse(req, async function (err, fields, files) {
//     if (err) {
//       return res.status(500).json({ error: 'File upload error' });
//     }

//     const uniqueFileName = generateUniqueFileName(files.file.name);
//     const uploadedFilePath = await saveFile(files.file, uniqueFileName);

//     // Send the uploaded file URL back to the client
//     res.status(201).json({ filePath: uploadedFilePath });
//   });
// };

// const generateUniqueFileName = (originalFileName) => {
//   const fileExtension = path.extname(originalFileName);
//   const uniqueFileName = `${uuidv4()}${fileExtension}`;
//   return uniqueFileName;
// };

// const saveFile = async (file, fileName) => {
//   const data = fs.readFileSync(file.path);
//   const uploadDir = './public/assets/404/temps/';
//   const filePath = path.join(uploadDir, fileName);

//   fs.writeFileSync(filePath, data);
//   await fs.unlinkSync(file.path);

//   // Return the file path, which will be the URL to the uploaded file
//   return `${baseUrl}/assets/404/temps/${fileName}`;
// };

// export default (req, res) => {
//   req.method === "POST"
//     ? post(req, res)
//     : req.method === "PUT"
//     ? console.log("PUT")
//     : req.method === "DELETE"
//     ? console.log("DELETE")
//     : req.method === "GET"
//     ? console.log("GET")
//     : res.status(404).send("");
// };

// pages/api/upload.js

// Improved upload.js

import formidable from "formidable";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from 'uuid';

const baseUrl = process.env.BASE_URL;

export const config = {
  api: {
    bodyParser: false
  }
};

async function post(req, res) {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'File upload error' });
    }

    const uniqueFileName = generateUniqueFileName(files.file.name);
    const uploadedFilePath = await saveFile(files.file, uniqueFileName);

    res.status(201).json({ filePath: `${baseUrl}/assets/404/temps/${uniqueFileName}` });
  });
}

function generateUniqueFileName(originalFileName) {
  const fileExtension = path.extname(originalFileName);
  return `${uuidv4()}${fileExtension}`;
}

async function saveFile(file, fileName) {
  const data = fs.readFileSync(file.path);
  const uploadDir = './public/assets/404/temps/';
  const filePath = path.join(process.cwd(), uploadDir, fileName);

  fs.writeFileSync(filePath, data);
  fs.unlinkSync(file.path);
}

export default async (req, res) => {
  if (req.method === "POST") {
    await post(req, res);
  } else {
    // Explicitly handle unsupported HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

