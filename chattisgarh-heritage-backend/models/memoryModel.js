import mongoose from "mongoose";

const memorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  images: [
    {
      type: String
    }
  ],

  contributorName: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Memory = mongoose.model("Memory", memorySchema);

export default Memory;