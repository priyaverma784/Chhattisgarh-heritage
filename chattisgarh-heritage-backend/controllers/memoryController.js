import Memory from "../models/memoryModel.js";

export const addMemory = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const image = req.file ? req.file.filename : null;
    const memory = new Memory({
      title,
      description,
      category,
      image
    });
    await memory.save();
    res.status(201).json({ message: "Memory added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

