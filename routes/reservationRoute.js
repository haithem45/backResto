// routes/reservationFoodRoutes.js
import express from 'express';
import * as ReservationFoodController from '../controllers/reservationController.js';

const router = express.Router();

router.post('/reservationFoods', ReservationFoodController.createReservationFood);
router.get('/reservationFoods', ReservationFoodController.getReservationFoods);
router.get('/reservationFoods/:id', ReservationFoodController.getReservationFoodById);
router.put('/reservationFoods/:id', ReservationFoodController.updateReservationFood);
router.delete('/reservationFoods/:id', ReservationFoodController.deleteReservationFood);

export default router
