// controllers/foodController.js
import  food  from '../models/foodModel.js';

// Create a new food
export const createFood = async (req, res) => {
  try {
    const food1 = new food(req.body);
    await food1.save();
    res.status(201).json(food1);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all foods
export const getFoods = async (req, res) => {
  try {
    const foods = await food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a food by ID
export const getFoodById = async (req, res) => {
  try {
    const food = await food.findById(req.params.id);
    res.status(200).json(food);
  } catch (error) {
    res.status(404).json({ message: 'Food not found' });
  }
};

// Update a food by ID
export const updateFood = async (req, res) => {
  try {
    const food1 = await food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(food1);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Food not found' });
  }
};

// Delete a food by ID
export const deleteFood = async (req, res) => {
  try {
    await food.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: 'Food not found' });
  }
};
