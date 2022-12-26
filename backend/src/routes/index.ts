import express from "express";
import ReservaRouter from "./reserva";
import HotelRouter from "./hotel";
import HospedeRouter from "./hospede";

const router = express.Router();

router.use(ReservaRouter);
router.use(HotelRouter);
router.use(HospedeRouter);

export default router;
