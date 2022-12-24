import express from "express";
import { HotelController } from "../controllers/hotel";

const HotelRouter = express.Router();

HotelRouter.post("/cadastrarHotel", HotelController.create);
HotelRouter.put("/atualizarHotel", HotelController.update);
HotelRouter.get("/buscarHotel/", HotelController.listAll);
HotelRouter.get("/buscarHotel/:id", HotelController.list);

export default HotelRouter;
