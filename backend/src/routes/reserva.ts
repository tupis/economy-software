import express from "express";
import { ReservaController } from "../controllers/reserva";

const ReservaRouter = express.Router();

ReservaRouter.post("/cadastrarReservaHospede", ReservaController.create);
ReservaRouter.put("/atualizarReservaHospede", ReservaController.update);
ReservaRouter.get("/buscarReservaHospede", ReservaController.listAll);
ReservaRouter.get("/buscarReservaHospede/:id", ReservaController.list);

export default ReservaRouter;
