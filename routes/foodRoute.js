// routes/foodRoutes.js
import express from 'express';
import * as FoodController from '../controllers/foodController.js';

const router = express.Router();

router.post('/food', FoodController.createFood);
router.get('/foods', FoodController.getFoods);
router.get('/food/:id', FoodController.getFoodById);
router.put('/food/:id', FoodController.updateFood);
router.delete('/food/:id', FoodController.deleteFood);

export default router;
