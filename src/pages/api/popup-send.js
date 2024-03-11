// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import { Writable } from "stream";
import formidable from "formidable";

const formidableConfig = {
  keepExtensions: true,
  maxFileSize: 10_000_000,
  maxFieldsSize: 10_000_000,
  maxFields: 10,
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
      firstName,
      lastName,
      phoneNumber,
      email,
      selectedService,
      budgetRangeText,
      orgName,
      role,
      message,
    } = fields;

    const attachments = [{ content: fileData, filename }];

    //Email Transporter Settings
    const emailRes = await transporter.sendMail({
      from: `${userEmail}`,
      replyTo: `${firstName} ${email}`,
      to: `${userEmail}`,
      subject: `PopUp Form Submission from ${firstName} ${lastName}`,
      html: `<p><Strong>You have a new Enquiry</Strong></p>
          <p><strong>Name: </strong> ${firstName} ${lastName}</p>
          <p><strong>Phone Number: </strong> ${phoneNumber}</p>
          <p><strong>Email: </strong> ${email}</p>
          <p><strong>Requested Service: </strong> ${selectedService}</p>
          <p><strong>Budget Range: </strong> ${budgetRangeText}</p>
          <p><strong>Organisation Name: </strong> ${orgName}</p>
          <p><strong>Role: </strong> ${role}</p>
          <p><strong>Message: </strong> ${message}</p>`,
      attachments: attachments,
    });

    return res.status(200).end();
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
