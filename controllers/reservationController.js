// controllers/reservationFoodController.js
import reservation from '../models/reservationModel.js';

// Create a new reservationFood
export const createReservationFood = async (req, res) => {
  try {
    const reservationFood = new reservation(req.body);
    await reservationFood.save();
    res.status(201).json(reservationFood);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all reservationFoods
export const getReservationFoods = async (req, res) => {
  try {
    const reservationFoods = await reservation.find().populate('user').populate('commande.food')
    res.status(200).json(reservationFoods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a reservationFood by ID
export const getReservationFoodById = async (req, res) => {
  try {
    const reservationFood = await reservation.findById(req.params.id).populate('user').populate('commande.food')
    res.status(200).json(reservationFood);
  } catch (error) {
    res.status(404).json({ message: 'ReservationFood not found' });
  }
};

// Update a reservationFood by ID
export const updateReservationFood = async (req, res) => {
  try {
    const reservationFood = await reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(reservationFood);
  } catch (error) {
    res.status(404).json({ message: 'ReservationFood not found' });
  }
};

// Delete a reservationFood by ID
export const deleteReservationFood = async (req, res) => {
  try {
    await reservation.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: 'ReservationFood not found' });
  }
};
