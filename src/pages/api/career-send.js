// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import { Writable } from "stream";
import formidable from "formidable";

const formidableConfig = {
  keepExtensions: true,
  maxFileSize: 10_000_000,
  maxFieldsSize: 10_000_000,
  maxFields: 7,
  allowEmptyFiles: false,
  multiples: false,
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const userEmail = process.env.EMAIL;
const userPass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: userEmail,
    pass: userPass,
  },
});

function formidablePromise(req, opts) {
  return new Promise((accept, reject) => {
    const form = formidable(opts);

    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      return accept({ fields, files });
    });
  });
}

const fileConsumer = (acc) => {
  const writable = new Writable({
    write: (chunk, _enc, next) => {
      acc.push(chunk);
      next();
    },
  });

  return writable;
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(404).end();

  try {
    const chunks = [];

    const { fields, files } = await formidablePromise(req, {
      ...formidableConfig,
      // consume this, otherwise formidable tries to save the file to disk
      fileWriteStreamHandler: () => fileConsumer(chunks),
    });

    const { careerCV } = files;

    const fileData = Buffer.concat(chunks);

    const filename = careerCV?.originalFilename;

    const {
      name,
      email,
      number,
      location,
      url,
      experiences,
    } = fields;

    // Parse experiences JSON string into an object
    const parsedExperiences = JSON.parse(experiences || '[]'); // Provide a fallback value to prevent errors

    const experienceHTML = parsedExperiences.map(exp => 
      `<li>${exp.jobTitle} at ${exp.company}, ${exp.years} years and ${exp.months} months</li>`
    ).join('');

    const attachments = [{ content: fileData, filename }];

    //Email Transporter Settings
    const emailRes = await transporter.sendMail({
      from: `${userEmail}`,
      replyTo: `${name} ${email}`,
      to: `${userEmail}`,
      subject: `Career Form Submission from ${name}`,
      html: `<p><Strong>You Have a new Career Form Submission</Strong></p>
          <p><strong>Name: </strong> ${name}</p>
          <p><strong>Email: </strong> ${email}</p>
          <p><strong>Phone Number: </strong> ${number}</p>
          <p><strong>Location: </strong> ${location}</p>
          <p><strong>Portfolio URL: </strong> ${url}</p>
          <p><strong>Experiences: </strong></p>
          <ul>${experienceHTML}</ul>`,
      attachments: attachments,
    });

    return res.status(200).end();
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
