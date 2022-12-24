import express from "express";
import { ReservaController } from "../controllers/reserva";
const { create, listAll, search, update } = ReservaController;

const ReservaRouter = express.Router();

ReservaRouter.post("/cadastrarReservaHospede", create);
ReservaRouter.put("/atualizarReservaHospede", update);
ReservaRouter.get("/buscarReservaHospede", listAll);
ReservaRouter.get("/buscarReservaHospede/:id", search);

export default ReservaRouter;
