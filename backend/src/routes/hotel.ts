import express from "express";
import { HotelController } from "../controllers/hotel";
const { create, listAll, search, update } = HotelController;

const HotelRouter = express.Router();

HotelRouter.post("/cadastrarHotel", create);
HotelRouter.put("/atualizarHotel", update);
HotelRouter.get("/buscarHotel/", listAll);
HotelRouter.get("/buscarHotel/:id", search);

export default HotelRouter;
