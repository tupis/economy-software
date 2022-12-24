import express from "express";
import { HotelController } from "../controllers/hotel";
const { create, listAll, search, update } = HotelController;

const HotelRouter = express.Router();

HotelRouter.post("/cadastrarHotel", create);
HotelRouter.get("/buscarHotel/", listAll);
HotelRouter.put("/atualizarHotel/:id", update);
HotelRouter.get("/buscarHotel/:id", search);

export default HotelRouter;
