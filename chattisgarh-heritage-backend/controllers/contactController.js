import Contact from "../models/Contact.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new Contact({
      name,
      email,
      subject,
      message
    });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};