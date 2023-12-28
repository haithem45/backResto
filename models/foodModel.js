import mongoose from "mongoose";

const foodschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [{
    type: String,
  }],
});

const food = mongoose.model("Food", foodschema);
export default food;
