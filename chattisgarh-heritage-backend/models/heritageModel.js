import mongoose from "mongoose";

const heritageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  category: {
    type: String,
    required: true
  },

  subcategory: {
    type: String,
    required: true
  },

  image: {
    type: String
  },

});

const Heritage = mongoose.model("Heritage", heritageSchema);
export default Heritage;