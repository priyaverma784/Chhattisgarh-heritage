import Heritage from "../models/heritageModel.js";

// POST → insert data
export const addHeritagePlace = async (req, res) => {
  try {
    const place = new Heritage(req.body);
    await place.save();
    res.status(201).json({
      message: "Heritage added successfully",
      data: place
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET → fetch data by category
export const getHeritagePlaces = async (req, res) => {
  try {
    const category = req.params.category;
    const places = await Heritage.find({ category });
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET → fetch single heritage item
export const getHeritageById = async (req, res) => {
  try {
    const item = await Heritage.findById(req.params.id);
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};