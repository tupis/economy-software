import express from "express";
import ReservaRouter from "./reserva";
import HotelRouter from "./hotel";

const router = express.Router();

router.use(ReservaRouter);
router.use(HotelRouter);

export default router;
