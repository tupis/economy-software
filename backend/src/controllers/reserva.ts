import { Request as req, Response as res } from "express";
import prisma from "../utils/prisma";

export const ReservaController = {
  listAll: async (req: req, res: res) => {
    try {
      const allReservas = await prisma.tb_reservas.findMany();

      res.send(allReservas);
    } catch (error) {}
  },
  search: async (req: req, res: res) => {
    const { id } = req.params;

    try {
      const findReserva = await prisma.tb_reservas.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (findReserva === null) {
        throw new Error();
      }

      res.send(findReserva);
    } catch (error) {
      res.send("Erro ao achar o reserva");
    }
  },
  create: async (req: req, res: res) => {
    try {
      const newReserva = await prisma.tb_reservas.create({
        data: {
          ...req.body,
        },
      });

      res.send(newReserva);
    } catch (error) {
      res.send("Erro ao criar reserva");
    }
  },
  update: async (req: req, res: res) => {
    const { id } = req.params;

    try {
      const updateReserva = await prisma.tb_reservas.update({
        where: {
          id: Number(id),
        },

        data: {
          ...req.body,
        },
      });

      if (updateReserva === null) {
        throw new Error();
      }

      res.send(updateReserva);
    } catch (error) {
      res.send("Error ao atualizar reserva");
    }
  },
};
