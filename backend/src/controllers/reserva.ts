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
        include: {
          hospedes: true,
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
    const {
      apartamento,
      datacheckin,
      numeroreserva,
      status,
      datacheckout,
      hospedes,
      idhotel,
    } = req.body;

    //FIXME: adjust hospede create
    try {
      const newReserva = await prisma.tb_reservas.create({
        data: {
          idhotel,
          numeroreserva,
          apartamento,
          datacheckin,
          datacheckout,
          status,
          hospedes: {
            createMany: {
              data: {
                ...hospedes,
              },
            },
          },
        },
      });

      res.send(newReserva);
    } catch (error) {
      res.send("Erro ao criar reserva");
    }
  },
  update: async (req: req, res: res) => {
    const { id } = req.params;
    const {
      apartamento,
      datacheckin,
      datacheckout,
      hospedes,
      idhotel,
      numeroreserva,
      status,
    } = req.body;

    //FIXME: map each hospede to update
    try {
      const updateReserva = await prisma.tb_reservas.update({
        where: {
          id: Number(id),
        },

        data: {
          apartamento,
          datacheckin,
          datacheckout,
          idhotel,
          numeroreserva,
          status,
          hospedes: {
            upsert: {
              where: {
                id: hospedes[0].idhospede,
              },
              create: {
                nome: hospedes[0].nome,
                sobrenome: hospedes[0].sobrenome,
              },
              update: {
                nome: hospedes[0].nome,
                sobrenome: hospedes[0].sobrenome,
              },
            },
          },
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
