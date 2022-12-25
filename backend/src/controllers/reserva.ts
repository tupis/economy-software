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
      idhotel,
    } = req.body;

    let hospedes: Array<any> = [];

    for await (let hospede of req.body.hospedes) {
      hospedes.push({ nome: hospede.nome, sobrenome: hospede.sobrenome });
    }

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
              data: hospedes,
            },
          },
        },
        include: {
          hospedes: true,
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
      idhotel,
      numeroreserva,
      status,
    } = req.body;

    let hospedes: Array<any> = [];

    for await (let hospede of req.body.hospedes) {
      hospedes.push({
        where: {
          id: hospede.idhospede,
        },
        create: {
          nome: hospede.nome,
          sobrenome: hospede.sobrenome,
        },
        update: {
          nome: hospede.nome,
          sobrenome: hospede.sobrenome,
        },
      });
    }
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
            upsert: hospedes,
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
