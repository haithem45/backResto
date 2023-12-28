import mongoose from "mongoose";
// import foodModel from "../models/foodModel.js"
const reservationschema = mongoose.Schema({
  date: {
    type: Date,
    default: new Date(toString()),
  },
  prixTotal: {
    type: Number,
    required: true,
  },
  commande: [
    {
      food: { type: mongoose.Schema.Types.ObjectId, ref: "Food", required: true },
      quantity: { type: Number, required: true },
      prix: { type: Number, required: true },
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const reservation = mongoose.model("Reservation", reservationschema);
export default reservation;
