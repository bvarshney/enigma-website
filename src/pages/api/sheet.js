import { appendToSheet } from "./lib/sheet";

export default async function handler(req, res) {
  try {
    const { name, email, message } = req.body;
    await appendToSheet({
      name,
      email,
      message,
    });
    res.status(200).json({
      message: "Success save data",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}